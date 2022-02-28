const controller = require("../controllers/Machine");
const express = require("express");

const router = express.Router();

router.post("/changeMachineStatus", controller.changeMachineStatus);

router.get("/getHistory/:limit", controller.getHistoryWithLimit);

router.get("/getMachineStatuses", controller.getMachineStatuses);

module.exports = router;
