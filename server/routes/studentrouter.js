const express = require("express");
const router = express.Router();

const {
  studentRegisteration,
  verifyStudentByMobile,
  verifyStudentByEmail,
  studentCreateAccount,
  sendOtp,checkOtp,
  studentlogin
} = require("../controller/studentcontroller");

router.post("/verifyemail", verifyStudentByEmail); 
router.post("/sendotpst", sendOtp); 
router.post("/checkotpst", checkOtp);
router.post("/studentcreateaccount", studentCreateAccount);
router.post("/studentlogin",studentlogin);

module.exports = router;
