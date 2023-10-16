const express = require('express');
const newsController = require('./controller')

const router = express.Router()

router.route('/').get(newsController.getAllNews)

router.route('/:newsId')
    .get(newsController.getSingleNews)
    .put(newsController.editNews)
    .delete(newsController.deleteNews)

router.route('/new').post(newsController.pushNews)

module.exports = router