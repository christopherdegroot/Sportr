const db = require('../../../../db/db')
const chalk = require('chalk')

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const query = {
        text: 'SELECT * FROM events;',
      };
      const dbResponse = await db.query(query);
      res.json(dbResponse.rows)
    } catch (error) {
      console.log(chalk.redBright('ERROR in events.js @ BROWSE:', chalk.whiteBright(error)));
    }
  }
  if (req.method === 'POST') {
    try {
      // req.body object destructuring
      const {user_owner, datetime, title, description, location, sport, same_gender, similar_age} = req.body;
  
      const query = {
        text: 'INSERT INTO events (user_owner, datetime, title, description, location, sport, same_gender, similar_age) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *;',
        values: [user_owner, datetime, title, description, location, sport, same_gender, similar_age],
      };
      const dbResponse = await db.query(query);
      res.json(dbResponse.rows)
    } catch (error) {
      console.log(chalk.redBright('ERROR in events.js @ ADD:', chalk.whiteBright(error)));
    }
  }
}
