const mongoose = require("mongoose");

const subjectSchema = mongoose.Schema({
  departmentName: {
    type: String,
    trim: true,
  },
  semester: {
    type: Number,
  },
  subject: {
    type: String,
    trim: true,
  },
  subjectCode: {
    type: Number,
  },
});

const Subject = mongoose.model("subject", subjectSchema);
module.exports = Subject;
