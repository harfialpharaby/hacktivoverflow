const express = require('express')
const router = express.Router()
const questionController = require('../controllers/question');

router.post('/register', questionController.register);

module.exports = router