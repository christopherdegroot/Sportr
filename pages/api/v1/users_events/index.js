// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

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
      const {user_id, event_id} = req.body;
  
      const query = {
        text: 'INSERT INTO users_events (user_id, event_id) VALUES ($1, $2) RETURNING *;',
        values: [user_id, event_id],
      };
      const dbResponse = await db.query(query);
      res.json(dbResponse.rows)
    } catch (error) {
      console.log(chalk.redBright('ERROR in users_events.js @ ADD:', chalk.whiteBright(error)));
    }
  }
}
