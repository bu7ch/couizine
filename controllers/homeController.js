// exports.sendReqParams = (req, res) => {
//   let leg = req.params.legumes;
//   res.send(`C'est la page pour les ${leg}`);
// };
// exports.respondWithName = (req, res) => {
//   let paramsName = req.params.myName;
//   res.render("index", { name: paramsName });
// };

const courses = [
  { title: "Faires des gateaux", cost: 50 },
  { title: "La recette de du cake aux raisins", cost: 10 },
  { title: "Une autre recette", cost: 23 },
  { title: "Comment devenir riche en cuisine", cost: 456 },
  { title: "Comment obtenir des etoiles au guide Michelin", cost: 12000 },
];

exports.showCourses = (req, res) => {
  res.render("courses", { oCourses: courses });
};
exports.showContact = (req, res) => {
  res.render("contact");
};
exports.showThanks = (req, res) => {
  res.render("thanks");
};
