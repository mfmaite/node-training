const express = require('express')

const router = express.Router();

router.get('/', (req, res) => {
  res.send(req.query.message)
});

router.get('/:id', (req, res) => {
  res.send(`El id de este mensaje es: ${req.params.id}`)
})

module.exports = router;
