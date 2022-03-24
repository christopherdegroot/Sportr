const db = require('../../../../db/db')

export default async function handler(req, res) {
  const { id } = req.query
  res.status(200).json(req.query)
  if (req.method === 'GET') {
    try {
      const query = {
        text: 'SELECT * FROM events WHERE id = $1;',
        values: [req.query.id],
      };
      const dbResponse = await db.query(query);
      res.json(dbResponse.rows)
    } catch (error) {
      console.log(chalk.redBright('ERROR in events.js @ READ:', chalk.whiteBright(error)));
    }
  }
  if (req.method === 'PUT') {
    try {
      // req.body object destructuring
      const {user_owner, datetime, title, description, location, sport, same_gender, similar_age} = req.body;
  
      const query = {
        text: 'UPDATE events SET user_owner=$1, datetime=$2, title=$3, description=$4, location=$5, sport=$6, same_gender=$7, similar_age=$8 WHERE id=$9 RETURNING *;',
        values: [user_owner, datetime, title, description, location, sport, same_gender, similar_age, req.query.id],
      };
      const dbResponse = await db.query(query);
      res.json(dbResponse.rows)
    } catch (error) {
      console.log(chalk.redBright('ERROR in events.js @ EDIT:', chalk.whiteBright(error)));
    }
  }
  if (req.method === 'DELETE') {
    try {
      const query = {
        text: 'DELETE FROM events WHERE id = $1 RETURNING *;',
        values: [req.query.id],
      };
      const dbResponse = await db.query(query);
      res.json(dbResponse.rows)
    } catch (error) {
      console.log(chalk.redBright('ERROR in events.js @ DELETE:', chalk.whiteBright(error)));
    }
  }
}
