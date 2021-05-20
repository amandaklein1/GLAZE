var db = require('../db');

module.exports = {
  findVideo: function (params, callback) {

    var queryStr = `select
    * from videos
    where videos.query = (?)`;

    db.query(queryStr, params, (err, results) => {
      console.log('this is my result: ', results)

      callback(err, results)
    });
  }
}