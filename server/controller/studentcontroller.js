const Student = require("../models/studentSchema");
const mailing = require("../utils/nodemailer");
const bcrypt = require("bcryptjs");

module.exports = {
  studentRegisteration: async (req, res, next) => {
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
    const studentExist = await Student.findOne({ regNumber: regNumber });
    if (!studentExist.userId.length === 0) {
      return res
        .status(400)
        .json({ error: "Account is already exist, please do login" });
    }
    if (studentExist) {
      return res.status(200).json({ message: "Welcome, verify your self" });
    } else {
      return res
        .status(400)
        .json({ error: "Sorry!, please go to college and take admission" });
    }
  },
  verifyStudentByMobile: async (req, res, next) => {
    const { mobNumber } = req.body;
    if (!mobNumber) {
      return res.status(400).json({ error: "please fill up the filed" });
    }
    const isValid = await Student.findOne({ mobNumber: mobNumber });
    if (isValid) {
      return res.status(200).json({ message: "Verified" });
    } else {
      return res.status(400).json({ error: "Invailid mobile number" });
    }
  },

  verifyStudentByEmail: async (req, res, next) => {
    try {
      const { emailId } = req.body;
      console.log(emailId)
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
      res.status(400).json(error+"hello");
      console.log(error);
    }
  },
  studentCreateAccount: async (req, res, next) => {
    try {
      const { userId, password, emailId } = req.body;
      if (!userId || !password) {
        return res.status(401).json({ error: "please fill the all fields" });
      }
      const salt = await bcrypt.genSalt(12);
      const hashpassword = await bcrypt.hash(password, salt);
      const userExist = await Student.findOneAndUpdate(
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
        let digits = "1234506789";
        let OTP = "";
        for (let i = 0; i < 4; i++) {
          OTP += digits[Math.floor(Math.random() * 10)];
        }
        return OTP;
      }
      const OTP = await generateOTP();
      const userExist = await Student.findOneAndUpdate(
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
        await Student.findOneAndUpdate({ emailId }, { otp: "" });
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
      const userExist = await Student.findOne({ emailId: emailId });
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
  studentlogin: async (req, res, next) => {
    try {
      const { userId, password } = req.body;
      if (!userId || !password) {
        return res.status(401).json({ error: "please fill the all fields" });
      }
      const studentExist = await Student.findOne({ userId: userId });
      if (studentExist) {
        const isCorrect = await bcrypt.compare(password, studentExist.password);
        const token = await studentExist.generateAuthToken();
        res.cookie("student", token, {
          expires: new Date(Date.now() + 67346734),
          httpOnly: true,
        });
        console.log(token);
        if (!isCorrect) {
          return res.status(402).json({ error: "Invalid password" });
        } else {
          return res
            .status(200)
            .json({ message: "student login successfully" });
        }
      } else {
        return res.status(403).json({ error: "Student is not found" });
      }
    } catch (error) {
      console.log(error);
      res.status(400).json({ error: "Something is wrong" });
    }
  },
};
