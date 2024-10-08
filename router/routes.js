const express = require("express");
const controller = require("../controller/controller.js");

const router = express.Router();

router.get("/", controller.localHost);
router.post("/addData", controller.addData);
router.get("/editData/:id", controller.editData);
router.post("/updateData/:id", controller.updateData);
router.get("/deleteData/:id", controller.deleteData);

module.exports = router;