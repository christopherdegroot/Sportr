const db = require('../../../../db/db')
const chalk = require('chalk')
const sockets = require('../../socket.js')

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

      console.log('POST REQUEST',req.body)
      // req.body object destructuring
      const {user_owner, datetime, title, description, sport, same_gender, similar_age, capacity_limit, latitude, longitude} = req.body;
  
      const query = {
        text: 'INSERT INTO events (user_owner, datetime, title, description, sport, same_gender, similar_age, capacity_limit, latitude, longitude) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *;',
        values: [user_owner, datetime, title, description, sport, same_gender, similar_age, capacity_limit, latitude, longitude],
      };
      const dbResponse = await db.query(query);
      console.log('logging sockets at events index', res.socket)
      res.socket.server.io.emit('update-input', dbResponse.rows)
      res.status(200).json(dbResponse.rows)
    } catch (error) {
      console.log(chalk.redBright('ERROR in events.js @ ADD:', chalk.whiteBright(error)));
    }
  }
}
