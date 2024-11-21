const express = require('express');
const { getMessage, replicateMessage } = require('../controllers/message');

const router = express.Router();

router.get('/', replicateMessage);

router.get('/:id', getMessage)

module.exports = router;
