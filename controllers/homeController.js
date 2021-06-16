exports.sendReqParams = (req, res) => {
  let leg = req.params.legumes;
  res.send(`C'est la page pour les ${leg}`);
};
exports.respondWithName = (req, res) => {
  let paramsName = req.params.myName;
  res.render("index", { name: paramsName });
};
