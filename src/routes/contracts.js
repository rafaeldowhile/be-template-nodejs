const { Router } = require("express");
const { getProfile } = require("../middleware/getProfile");
const router = Router();
const ContractsController = require("../controllers/contracts");

router.get("/contracts/:id", getProfile, ContractsController.findById);
router.get("/contracts", getProfile, ContractsController.findAll);

module.exports = router;
