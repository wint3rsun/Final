const router = require('express').Router();

module.exports = (db) => {
  // sends all challenge participants for game_id
  router.get('/:game_id', (req, res) => {
    const queryString = `
    SELECT *
    FROM game_challenge_participants
    WHERE game_challenges_id = $1
    `;

    db.query(queryString, [req.params.game_id])
    .then((results) => {
      res.json(results.rows);
    })
    .catch((err) => {
      res.status(500).json({error: err.message});
    });
  });

  router.get('/', (req, res) => {
    const queryString = `
      SELECT *
      FROM game_challenge_participants
      WHERE users_id = $1
    `;

    const queryParams = [req.query.user];

    db.query(queryString, queryParams)
    .then((results) => {
      const myChallenges = {};
      results.rows.forEach(element => {
        myChallenges[element.game_challenges_id] = element;
      });
      res.json(myChallenges);
    })
    .catch((err) => {
      res.status(500).json({error: err.message});
    });
  });

  // create game challenge participant
  router.put('/new', (req, res) => {
    const {game_challenge_id, user_id} = req.body.game
    const queryString = `
    INSERT INTO game_challenge_participants (game_challenges_id ,users_id)
    VALUES ($1, $2)
    RETURNING *
    `;
    console.log(req.body.game_challenge_id);
    console.log(req.body.user_id);

    db.query(queryString, [game_challenge_id, user_id])
    .then((results) => {
      res.json(results.rows);
    })
    .catch((err) => {
      res.status(500).json({error: err.message});
    });
  });

  return router;
}