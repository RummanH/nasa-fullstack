const express = require("express");

const { getAllPlanets } = require("./planets.controllers");
const router = express.Router();

router.route("/").get(getAllPlanets);

module.exports = router;
