const router = require("express").Router();
const Controller = require("../controllers/admin");
const checkLogin = require("../helper/checkLogin");
const checkLoginToAdmin = require("../helper/checkLogintoAdmin")

router.get("/", checkLoginToAdmin);

router.get("/:id/interview/add", Controller.showaddInterview);
router.post("/:id/interview/add", checkLogin, Controller.createInterview);
router.get("/interview", checkLogin, Controller.showInterview);


router.get("/applicant", checkLogin, Controller.showApplicant);

router.get("/login", Controller.formLogin);
router.post("/login", Controller.login);

router.get("/delete/:id", Controller.deleteApplicant);

router.post("/update/:id", checkLogin, Controller.update);

router.get("/logout", Controller.logout);

module.exports = router;
