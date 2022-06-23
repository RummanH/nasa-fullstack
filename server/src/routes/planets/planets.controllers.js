const { planets } = require("../../models/planets.model");
console.log(planets);

const getAllPlanets = (req, res, next) => {
  return res.status(200).json({ status: "success", data: { planets } });
};

module.exports = { getAllPlanets };
