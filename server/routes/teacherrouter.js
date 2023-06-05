const express = require("express");
const router = express.Router();

const { verifyTeacherByEmail, teacherCreateAccount, sendOtp, checkOtp, teacherlogin} = require("../controller/teachercontroller")

router.post("/verifyemailteacher", verifyTeacherByEmail); 
router.post("/sendotpteacher", sendOtp); 
router.post("/checkotpteacher", checkOtp); 
router.post("/teachercreateaccount", teacherCreateAccount);
router.post("/teacherlogin",teacherlogin);

module.exports = router; 