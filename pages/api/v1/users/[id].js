const db = require('../../../../db/db')
const chalk = require('chalk')

export default async function handler(req, res) {
  const { id } = req.query
  res.status(200).json(req.query)
  if (req.method === 'GET') {
    try {
      const query = {
        text: 'SELECT * FROM users WHERE id = $1;',
        values: [req.query.id],
      };
      const dbResponse = await db.query(query);
      res.json(dbResponse.rows)
    } catch (error) {
      console.log(chalk.redBright('ERROR in users.js @ READ:', chalk.whiteBright(error)));
    }
  }
  if (req.method === 'PUT') {
    try {
      // req.body object destructuring
      const {email, name, password, bio, profile_image_url, gender, birth_date, sports, km_range} = req.body;
      
      const query = {
        text: 'UPDATE users SET email=$1, name=$2, password=$3, bio=$4, profile_image_url=$5, gender=$6, birth_date=$7, sports=$8, km_range=$9 WHERE id=$10 RETURNING *;',
        values: [email, name, password, bio, profile_image_url, gender, birth_date, sports, km_range, req.query.id],
      };
      const dbResponse = await db.query(query);
      res.json(dbResponse.rows)
    } catch (error) {
      console.log(chalk.redBright('ERROR in users.js @ EDIT:', chalk.whiteBright(error)));
    }
  }
  if (req.method === 'DELETE') {
    try {
      const query = {
        text: 'DELETE FROM users WHERE id = $1 RETURNING *;',
        values: [req.query.id],
      };
      const dbResponse = await db.query(query);
      res.json(dbResponse.rows)
    } catch (error) {
      console.log(chalk.redBright('ERROR in users.js @ DELETE:', chalk.whiteBright(error)));
    }
  }
}
