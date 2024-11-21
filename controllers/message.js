const getMessage = (req, res) => {
  res.send(`El id de este mensaje es: ${req.params.id}`)
}

const replicateMessage = (req, res) => {
  res.send(req.query.message)
}

module.exports = {
  getMessage,
  replicateMessage,
}
