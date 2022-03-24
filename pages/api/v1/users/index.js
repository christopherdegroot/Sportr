const db = require('../../../../db/db')
const chalk = require('chalk')

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const query = {
        text: 'SELECT * FROM users;',
      };
      const dbResponse = await db.query(query);
      res.json(dbResponse.rows)
    } catch (error) {
      console.log(chalk.redBright('ERROR in users.js @ BROWSE:', chalk.whiteBright(error)));
    }
  }
  if (req.method === 'POST') {
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
  }
}
