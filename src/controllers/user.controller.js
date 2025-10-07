exports.createUser = (req, res) => {
  res.send({
    message: 'api hit detected'
  })
}

exports.testRoute = (req, res) => {
  console.log('hit')
  res.send({
    message: 'test route hit'
  })
}