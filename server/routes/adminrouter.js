const express = require("express");
const router = express.Router();
const {
  createAdmin,
  adminlogin,
  addStudent,
  deleteStudent,
  updateStudent,
  viewStudent,
  viewTeacher,
  addSubject,
  sendOtp,
  addTeacher,
  viewStudentByData
} = require("../controller/admincontroller");


// router.post("/create", function(req, res){
//   createAdmin
// });
router.post("/adminlogin", adminlogin);
router.post("/addstudent", addStudent);
router.post("/addteacher", addTeacher);
router.get("/viewteacher", viewTeacher);
router.get("/viewstudent", viewStudent); 
router.post("/viewstudentbydata", viewStudentByData);
router.post("/otp", function(req,res){
  sendOtp
});

module.exports = router;
 