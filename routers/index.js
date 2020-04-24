const router = require("express").Router();
const admin = require("./admin");
const Controller = require("../controllers/applicant")

router.get("/", (req, res) => res.render("home"));
router.use("/admin", admin);

router.get("/apply", Controller.formApply);
router.post("/apply", Controller.apply);

module.exports = router;