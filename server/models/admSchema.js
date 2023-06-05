const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
// const dotenv= require("dotenv");
// dotenv.config({path:"./config.env"})

const adminSchema = new mongoose.Schema({
  adminEmail: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
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
  otp: {
    otpdata: {
      type: Number,
    },
    date: {
      type: Date,
      default: new Date(),
    },
  },
});

adminSchema.pre("save", async function (next) {
  try {
    if (this.isModified("password")) {
      const salt = await bcrypt.genSalt(12);
      const hashpassword = await bcrypt.hash(this.password, salt);
      this.password = hashpassword;
      next();
    }
  } catch (error) {
    next(error);
  }
});

adminSchema.methods.generateAuthToken = async function () {
  try {
    let token = jwt.sign({ _id: this._id }, process.env.SECERET_KEY);
    this.tokens = this.tokens.concat({ token: token });
    await this.save();
    return token;
  } catch (error) {
    console.log(error);
  }
};

const AdminUser = mongoose.model("admin", adminSchema);
module.exports = AdminUser;
 