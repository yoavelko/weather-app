const express = require("express");
const weatherController = require("../controllers/weatherController");
const router = express.Router();

router.route("/").post(weatherController.search);

module.exports = router;