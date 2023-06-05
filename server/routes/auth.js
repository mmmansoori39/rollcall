// const express = require("express");
// const router = express.Router();
// require("../database/conn");
// const User = require("../models/userSchema");

// router.get("/", (req, res) => {
//   res.status(201).send("Hello, I am from server jasmine");
// });

// router.post("/login", async (req, res) => {
//   try {
//     const { username, attendence } = req.body;
//     if (!username || !attendence) {
//       return res.status(422).json({ error: "fill the data" });
//     }
//     const userExist = await User.findOne({ username: username });
//     if (userExist) {
//       const att = userExist.attendence.concat({ count });
//       await att.save()
//       res.status(201).json({ message: "data saved" });
//     } else {
//       const alldata = new User({ username, attendence });
//       await alldata.save();
//       res.status(201).json({ message: "data saved" });
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });

// module.exports = router;
