const db = require('../../../../db/db')
const chalk = require('chalk')

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const query = {
        text: 'SELECT * FROM users_events;',
      };
      const dbResponse = await db.query(query);
      res.json(dbResponse.rows)
    } catch (error) {
      console.log(chalk.redBright('ERROR in users_events.js @ BROWSE:', chalk.whiteBright(error)));
    }
  }
  if (req.method === 'POST') {
    try {
      // req.body object destructuring
      const {user_id, event_id, value} = req.body;
  
      const query = {
        text: 'INSERT INTO users_events (user_id, event_id, value) VALUES ($1, $2, $3) RETURNING *;',
        values: [user_id, event_id, value],
      };
      const dbResponse = await db.query(query);
      res.json(dbResponse.rows)
    } catch (error) {
      console.log(chalk.redBright('ERROR in users_events.js @ ADD:', chalk.whiteBright(error)));
    }
  }
}
