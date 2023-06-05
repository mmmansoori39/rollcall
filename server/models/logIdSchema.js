const mongoose = require("mongoose");

const logIdSchema = mongoose.Schema({
  student:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "student",
  },
  
});



const logId = mongoose.model("logId", logIdSchema);
module.exports = logId;
