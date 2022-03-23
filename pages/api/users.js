var express = require('express');
var router = express.Router();
const db = require('../bin/db')
const chalk = require('chalk')

// BREAD ROUTES

// BROWSE GET
router.get('/', async(req, res) => {
  try {
    const query = {
      text: 'SELECT * FROM users;',
    };
    const dbResponse = await db.query(query);
    res.json(dbResponse.rows)
  } catch (error) {
    console.log(chalk.redBright('ERROR in users.js @ BROWSE:', chalk.whiteBright(error)));
  }
});

// READ GET
router.get('/:id', async(req, res) => {
  try {
    const query = {
      text: 'SELECT * FROM users WHERE id = $1;',
      values: [req.params.id],
    };
    const dbResponse = await db.query(query);
    res.json(dbResponse.rows)
  } catch (error) {
    console.log(chalk.redBright('ERROR in users.js @ READ:', chalk.whiteBright(error)));
  }
});

// EDIT PUT
router.put('/:id', async(req, res) => {
  try {
    // req.body object destructuring
    const {email, name, password, bio, profile_image_url, gender, birth_date, sports, km_range} = req.body;
    
    const query = {
      text: 'UPDATE users SET email=$1, name=$2, password=$3, bio=$4, profile_image_url=$5, gender=$6, birth_date=$7, sports=$8, km_range=$9 WHERE id=$10 RETURNING *;',
      values: [email, name, password, bio, profile_image_url, gender, birth_date, sports, km_range, req.params.id],
    };
    const dbResponse = await db.query(query);
    res.json(dbResponse.rows)
  } catch (error) {
    console.log(chalk.redBright('ERROR in users.js @ EDIT:', chalk.whiteBright(error)));
  }
});

// ADD POST
router.post('/', async(req, res) => {
  try {
    // req.body object destructuring
    const {email, name, password, bio, profile_image_url, gender, birth_date, sports, km_range} = req.body;

    const query = {
      text: 'INSERT INTO users (email, name, password, bio, profile_image_url, gender, birth_date, sports, km_range) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING *;',
      values: [email, name, password, bio, profile_image_url, gender, birth_date, sports, km_range],
    };
    const dbResponse = await db.query(query);
    res.json(dbResponse.rows)
  } catch (error) {
    console.log(chalk.redBright('ERROR in users.js @ ADD:', chalk.whiteBright(error)));
  }
});

// DELETE DELETE
router.delete('/:id', async(req, res) => {
  try {
    const query = {
      text: 'DELETE FROM users WHERE id = $1 RETURNING *;',
      values: [req.params.id],
    };
    const dbResponse = await db.query(query);
    res.json(dbResponse.rows)
  } catch (error) {
    console.log(chalk.redBright('ERROR in users.js @ DELETE:', chalk.whiteBright(error)));
  }
});

module.exports = router;
