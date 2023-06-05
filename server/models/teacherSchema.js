const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const teacherSchema = mongoose.Schema({
  userId: {
    type: String,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    trim: true,
  },
  otp: {
    type:String
  },
  teacherName: {
    type: String,
    required: true,
    trim: true,
  },
  collegeName: {
    type: String,
    required: true,
    trim: true,
  },
  departmentName: {
    type: String,
    required: true,
    trim: true,
  },
  regNumber: {
    type: Number,
    required: true,
    unique: true,
    trim: true,
  },
  mobNumber: {
    type: Number,
    required: true,
    unique: true,
    trim: true,
  },
  emailId: {
    type: String,
    required: true,
    unique: true,
    trim: true,
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

teacherSchema.pre("save", async function (next) {
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

teacherSchema.methods.generateAuthToken = async function () {
  try {
    const token = jwt.sign({ _id: this._id }, process.env.SECERET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
  }
};

const Teacher = mongoose.model("teacher", teacherSchema);
module.exports = Teacher;
