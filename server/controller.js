const dbQueries = require('../database/dbQueries.js');

const controller = {
  // get all surf data
  getSurf: (req, res) => {
    dbQueries.getSurf(req, (err, data) => {
      if (err) {
        res.status(400).send(err);
      } else {
        res.status(200).send(data);
      }
    })
  }
}

module.exports = controller;