const Attendence = require("../models/attendenceSchema");
const Student = require("../models/studentSchema");
const Teacher = require("../models/teacherSchema");
const mailing = require("../utils/nodemailer");
const bcrypt = require("bcryptjs");

module.exports = {
  addStudentAttendence: async (req, res, next) => {
    const { rollNumber, subject, semester } = req.body;
    if (!rollNumber || !subject || !semester) {
      return res.status(400).json({ error: "please fill the all fields" });
    }
    const findStudent = await Attendence.findOne({ roll });

    res.status(200).json(findStudent);
  },

  verifyTeacherByEmail: async (req, res, next) => {
    try {
      const { emailId } = req.body;
      if (!emailId) {
        return res.status(401).json({ error: "please fill up the fields" });
      }
      const isValid = await Student.findOne({ emailId: emailId });
      if (isValid) {
        return res.status(200).json(isValid);
      } else {
        return res.status(402).json({ error: "Your email doesn't exist" });
      }
    } catch (error) {
      res.status(400).json(error);
      console.log(error);
    }
  },
  teacherCreateAccount: async (req, res, next) => {
    try {
      const { userId, password, emailId } = req.body;
      if (!userId || !password) {
        return res.status(401).json({ error: "please fill the all fields" });
      }
      const salt = await bcrypt.genSalt(12);
      const hashpassword = await bcrypt.hash(password, salt);
      const userExist = await Teacher.findOneAndUpdate(
        { emailId: emailId },
        { userId: userId, password: hashpassword },
        { new: true }
      );
      if (userExist) {
        return res.status(200).json({ message: "Account created" });
      } else {
        return res.status(402).json({ error: "Invailid email ID" });
      }
    } catch (error) {
      console.log(error.message);
      res.status(400).json({ error: "Something is wrong" });
    }
  },

  sendOtp: async (req, res, next) => {
    try {
      const { emailId } = req.body;
      function generateOTP() {
        var digits = "1234506789";
        let OTP = "";
        for (let i = 0; i < 4; i++) {
          OTP += digits[Math.floor(Math.random() * 10)];
        }
        return OTP;
      }
      const OTP = await generateOTP();
      const userExist = await Teacher.findOneAndUpdate(
        { emailId },
        { otp: OTP },
        { new: true }
      );
      if (!userExist) {
        return res.status(400).json({ error: "Your are not exist" });
      }
      const maill = await mailing(emailId, OTP);

      res.status(200).json({ message: "check your registered email for OTP" });
      const resetOtp = async () => {
        await Teacher.findOneAndUpdate({ emailId }, { otp: "" });
      };
      setTimeout(function () {
        resetOtp();
      }, 180000);
    } catch (err) {
      console.log("Error in sending email", err.message);
    }
  },

  checkOtp: async (req, res, next) => {
    try {
      const { emailId, otp } = req.body;
      const userExist = await Teacher.findOne({ emailId: emailId });
      if (userExist) {
        let dotp = userExist.otp;
        console.log(otp, dotp);
        if (otp == dotp) {
          return res.status(200).json({ message: "Otp is matched" });
        } else if (otp == null) {
          return res.status(401).json({ message: "Otp has expired" });
        } else {
          return res.status(402).json({ error: "Otp is not matched" });
        }
      } else {
        return res.status(400).json({ error: "Something is wrong, Try again" });
      }
    } catch (error) {
      console.log(error.message);
    }
  },
  teacherlogin: async (req, res, next) => {
    try {
      const { userId, password } = req.body;
      if (!userId || !password) {
        return res.status(401).json({ error: "please fill the all fields" });
      }
      const teacherExist = await Teacher.findOne({ userId: userId });
      if (teacherExist) {
        const isCorrect= await bcrypt.compare(password, teacherExist.password)
        console.log(isCorrect)
        const token = await teacherExist.generateAuthToken()
        res.cookie("teacher", token, {
          expires: new Date(Date.now() + 67346734),
          httpOnly: true,
        });
        console.log(token);
        if (!isCorrect) {
          return res.status(402).json({ error: "Invalid password" });
        } else {
          return res
            .status(200)
            .json({ message: "Teacher login successfully" });
        }
      } else {
        return res.status(403).json({ error: "Teacher is not found" });
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: "Something is wrong" });
    }
  },
};