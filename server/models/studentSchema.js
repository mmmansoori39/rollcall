const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const studentSchema = mongoose.Schema({
  studentName: {
    type: String,
    required: true,
    trim: true,
  },
  collegeName: {
    type: String,
    required: true,
    trim: true,
  },
  courseName: {
    type: String,
    required: true,
    trim: true,
  },
  departmentName: {
    type: String,
    required: true,
    trim: true,
  },
  semester: {
    type: Number,
    required: true,
  },
  regNumber: {
    type: Number,
    required: true,
    unique: true,
    trim: true,
  },
  rollNumber: {
    type: Number,
    required: true,
    unique: true,
    trim: true,
  },
  mobNumber: {
    type: Number,
    required: true,
    trim: true,
  },
  emailId: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  userId: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    trim: true,
  },
  otp: {
    type: String,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
});

studentSchema.pre("save", async function (next) {
  try {
    if (this.isModified("password")) {
      const salt = await bcrypt.genSalt(12);
      const hashpassword = await bcrypt.hash(this.password, salt);
      this.password = hashpassword;
      next();
    }
  } catch (error) {
    console.log(error.message);
  }
});

studentSchema.methods.generateAuthToken = async function () {
  try {
    const token = jwt.sign({ _id: this._id }, process.env.SECERET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
  }
};

const Student = mongoose.model("student", studentSchema);
module.exports = Student;
