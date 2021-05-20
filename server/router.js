var controller = require('./controllers');
var router = require('express').Router();


router.get('/:query', controller.videoController.get)


module.exports = router;















