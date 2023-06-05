const bcrypt = require("bcryptjs");
const AdminUser = require("../models/admSchema");
const Student = require("../models/studentSchema");
const Teacher = require("../models/teacherSchema");
const Subject = require("../models/subjectSchema");
const sendEmail = require("../utils/nodemailer");
const nodemailer = require("nodemailer");
const Mailgen = require("mailgen");
const mailing = require("../utils/nodemailer");

module.exports = {
  addSubject: async (req, res, next) => {
    try {
      const { departmentName, semester, Subject, subjectCode } = req.body;
      if (!departmentName || !semester || !Subject || !subjectCode) {
        return res.status(400).json({ error: "please fill the all fields" });
      }
      const subjectExist = await Subject.findOne({ adminEmail: adminEmail });
      if (subjectExist) {
        return res.status(400).json({ error: "Subject is already added" });
      }
      const saveSubject = new Subject({
        departmentName,
        semester,
        Subject,
        subjectCode,
      });
      await saveSubject.save();
      res.status(200).json({ message: "Subject is added successfully" });
    } catch (error) {
      console.log(error.message);
    }
  },

  createAdmin: async (req, res, next) => {
    try {
      const { adminEmail, password } = req.body;
      if (!adminEmail || !password) {
        return res.status(400).json({ error: "please fill the all fields" });
      }
      const adminExist = await AdminUser.findOne({ adminEmail: adminEmail });
      if (adminExist) {
        return res.status(400).json({ error: "Admin is already exist" });
      }
      const Admindata = new AdminUser({ adminEmail, password });
      await Admindata.save();
      res.status(200).json({ message: "Admin account created successfully" });
    } catch (error) {
      console.log(error.message);
    }
  },

  adminlogin: async (req, res, next) => {
    try {
      const { adminEmail, password } = req.body;
      if (!adminEmail || !password) {
        return res.status(401).json({ error: "please fill the all fields" });
      }
      const adminExist = await AdminUser.findOne({ adminEmail: adminEmail });
      if (adminExist) {
        const isCorrect = await bcrypt.compare(password, adminExist.password);
        const token = await adminExist.generateAuthToken();
        res.cookie("moinuddin", token, {
          expires: new Date(Date.now() + 67346734),
          httpOnly: true,
        });
        console.log(token);
        if (!isCorrect) {
          return res.status(402).json({ error: "Invalid password" });
        } else {
          return res.status(200).json({ message: "Admin login successfully" });
        }
      } else {
        return res.status(400).json({ error: "Admin is not found" });
      }
    } catch (error) {
      console.log(error.message);
    }
  },

  addStudent: async (req, res, next) => {
    const {
      studentName,
      collegeName,
      courseName,
      departmentName,
      semester,
      regNumber,
      rollNumber,
      mobNumber,
      emailId,
    } = req.body;
    if (
      !studentName ||
      !collegeName ||
      !courseName ||
      !departmentName ||
      !semester ||
      !regNumber ||
      !rollNumber ||
      !mobNumber ||
      !emailId
    ) {
      return res.status(401).json({ error: "please fill the all fields" });
    }
    const studentExist = await Student.findOne({ regNumber: regNumber });
    if (studentExist) {
      return res.status(400).json({ error: "Student is already exist" });
    }
    function generateOTP() {
      var digits = "0123456789";
      let OTP = "";
      for (let i = 0; i < 4; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
      }
      return OTP;
    }
    const OTP = await generateOTP();
    const userId = await generateOTP();
    const password = await generateOTP();
    const saveStudent = new Student({
      studentName,
      collegeName,
      courseName,
      departmentName,
      semester,
      regNumber,
      rollNumber,
      mobNumber,
      emailId,
      userId: userId,
      password: password,
      otp: OTP,
    });
    const addeds = await saveStudent.save();
    console.log(addeds);
    res.status(200).json({ message: "Student is added successfully" });
  },

  addTeacher: async (req, res, next) => {
    const {
      teacherName,
      collegeName,
      departmentName,
      regNumber,
      mobNumber,
      emailId,
    } = req.body;
    if (
      !teacherName ||
      !collegeName ||
      !departmentName ||
      !regNumber ||
      !mobNumber ||
      !emailId
    ) {
      return res.status(401).json({ error: "please fill the all fields" });
    }
    const teacherExist = await Teacher.findOne({ regNumber: regNumber });
    if (teacherExist) {
      return res.status(400).json({ error: "Teacher is already exist" });
    }
    function generateOTP() {
      var digits = "0123456789";
      let OTP = "";
      for (let i = 0; i < 4; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
      }
      return OTP;
    }
    const OTP = await generateOTP();
    const userId = await generateOTP();
    const password = await generateOTP();
    const saveTeacher = new Teacher({
      teacherName,
      collegeName,
      departmentName,
      regNumber,
      mobNumber,
      emailId,
      userId: userId,
      password: password,
      otp: OTP,
    });
    const added = await saveTeacher.save();
    console.log(added);
    res.status(200).json({ message: "Teacher is added successfully" });
  },

  deleteStudent: async (req, res, next) => {
    const { departmentName, semester, rollNumber } = req.body;
    // if (!departmentName || !semester || !rollNumber) {
    //   return res.status(400).json({ error: "please fill the all fields" });
    // }
    const studentExist = await Student.deleteOne(
      { rollNumber: rollNumber },
      (error, collection) => {
        if (error) {
          throw error;
        }
        console.log(collection);
      }
    );
    if (studentExist) {
      return res.status(400).json({ error: "Something is wrong" });
    }
    res.status(400).json({ error: "Something" });

    console.log(studentExist);
  },
  updateStudent: async (req, res, next) => {
    const {
      name,
      collegeName,
      courseName,
      departmentName,
      semester,
      regNumber,
      rollNumber,
      mobNumber,
      emailId,
    } = req.body;
    if (
      !name ||
      !collegeName ||
      !courseName ||
      !departmentName ||
      !semester ||
      !regNumber ||
      !rollNumber ||
      !mobNumber ||
      !emailId
    ) {
      return res.status(400).json({ error: "please fill the all fields" });
    }
    const studentExist = await Student.findOneAndUpdate(
      {
        rollNumber: rollNumber,
        departmentName: departmentName,
        semester: 6,
      },
      {
        name: name,
        collegeName: collegeName,
        courseName: courseName,
        rollNumber: rollNumber,
        departmentName: departmentName,
        semester: semester,
        regNumber: regNumber,
        mobNumber: mobNumber,
        emailId: emailId,
      },
      { new: true }
    );
    if (studentExist) {
      return res
        .status(200)
        .json({ message: "Student data is updated successfully" });
    } else {
      return res.status(400).json({ error: "Something is wrong" });
    }
  },

  updateTeacher: async (req, res, next) => {
    const { name, collegeName, departmentName, regNumber, mobNumber, emailId } =
      req.body;
    if (
      !name ||
      !collegeName ||
      !departmentName ||
      !regNumber ||
      !mobNumber ||
      !emailId
    ) {
      return res.status(400).json({ error: "please fill the all fields" });
    }
    const teacherExist = await Teacher.findOneAndUpdate(
      {
        regNumber: regNumber,
        departmentName: departmentName,
      },
      {
        name: name,
        collegeName: collegeName,
        rollNumber: rollNumber,
        departmentName: departmentName,
        regNumber: regNumber,
        emailId: emailId,
      },
      { new: true }
    );
    if (teacherExist) {
      return res
        .status(200)
        .json({ message: "Teacher data is updated successfully" });
    } else {
      return res.status(400).json({ error: "Something is wrong" });
    }
  },

  viewStudent: async (req, res, next) => {
    const { courseName, departmentName, semester } = req.body;
    // if (!courseName || !departmentName || !semester) {
    //   return res.status(400).json({ error: "please fill the all fields" });
    // }
    const studentExist = await Student.find({});
    if (studentExist) {
      return res.status(200).json(studentExist);
    } else {
      return res.status(400).json({ error: "Student is not exist" });
    }
  },
  viewStudentByData: async (req, res, next) => {
    const { courseName, departmentName, semester } = req.body;
    if (!courseName || !departmentName || !semester) {
      return res.status(401).json({ error: "please fill the all fields" });
    }
    const studentExist = await Student.find({
      courseName: courseName,
      departmentName: departmentName,
      semester: semester,
    });
    if (studentExist) {
      return res.status(200).json({ message: "Here is student" });
    } else {
      return res.status(400).json({ error: "Student is not exist" });
    }
  },

  viewTeacher: async (req, res, next) => {
    const { departmentName } = req.body;
    // if (!departmentName) {
    //   return res.status(400).json({ error: "please fill the all fields" });
    // }
    const teacherExist = await Teacher.find({});
    if (teacherExist) {
      return res.status(200).json(teacherExist);
    } else {
      return res.status(400).json({ error: "Teacher is not exist" });
    }
  },
};
