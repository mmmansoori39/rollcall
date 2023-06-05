const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  userId: {
    type: String,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
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
    type: Number,
  },
});

// userSchema.pre("save", async function (next) {
//     console.log("hello");
//     if (this.isModified("password")) {
//         this.password = await bcrypt.hash(this.password, 12);
//     }
//     next();
// });

adminSchema.pre("save", async function(next){
  if(this.isModified('password')){
    this.password= bcrypt.hash(this.password, 12)
  }
  next()
})

const User = mongoose.model("check", userSchema);
module.exports = User;