const controller = require("../controllers/Machine");
const express = require("express");

const router = express.Router();

router.post("/changeMachineStatus", controller.changeMachineStatus);

module.exports = router;
