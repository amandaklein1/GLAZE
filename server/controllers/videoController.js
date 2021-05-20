var videoModel = require('../models/videoModel.js');

module.exports = {
  get: function (req, res) {
    var id = [req.params.query]

    videoModel.findVideo(id, (err, result) => {
      if (err) {
        console.error('error finding a video: ', err);
      res.sendStatus(500);
      }
      res.status(200).json(result);
    });
  }
};

// exports.createOne = (req, res) => {
//   video.create(req.body)
//     .then((data) => {
//       res.status(201).send(data);
//     })
//     .catch((err) => {
//       console.error('error adding a video: ', err);
//       res.sendStatus(500);
//     });
// };

