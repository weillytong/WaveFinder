const Report = require('./index.js');

const dbQueries = {
  getSurf: (req, callback) => {
    Report.find(
      {},
      (err, data) => {
        if (err) {
          callback(err);
        } else {
          callback(null, data);
        }
      }
    )
  }
}

module.exports = dbQueries;