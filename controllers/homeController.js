exports.sendReqParams = (req, res) => {
  let leg = req.params.legumes
  res.send(`C'est la page pour les ${leg}`)
}
exports.respondWithName = (req, res) => {
  res.render('index', { name:'John'})
}