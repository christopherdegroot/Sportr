const db = require('../../../../db/db')
const chalk = require('chalk')

export default async function handler(req, res) {
  const { id } = req.query
  if (req.method === 'GET') {
    try {
      const query = {
        text: 'SELECT * FROM users_events WHERE id = $1;',
        values: [req.query.id],
      };
      const dbResponse = await db.query(query);
      res.json(dbResponse.rows)
    } catch (error) {
      console.log(chalk.redBright('ERROR in users_events.js @ READ:', chalk.whiteBright(error)));
    }
  }
  if (req.method === 'PUT') {
    try {
      // req.body object destructuring
      const {user_id, event_id, value} = req.body;
  
      const query = {
        text: 'UPDATE users_events SET user_id=$1, event_id=$2, value=$3 WHERE id=$4 RETURNING *;',
        values: [user_id, event_id, value, req.query.id],
      };
      const dbResponse = await db.query(query);
      res.json(dbResponse.rows)
    } catch (error) {
      console.log(chalk.redBright('ERROR in users_events.js @ EDIT:', chalk.whiteBright(error)));
    }
  }
  if (req.method === 'DELETE') {
    try {
      const query = {
        text: 'DELETE FROM users_events WHERE id = $1 RETURNING *;',
        values: [req.query.id],
      };
      const dbResponse = await db.query(query);
      res.json(dbResponse.rows)
    } catch (error) {
      console.log(chalk.redBright('ERROR in users_events.js @ DELETE:', chalk.whiteBright(error)));
    }
  }
}

