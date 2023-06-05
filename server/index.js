const express = require("express");
const app = express();
const dotenv = require("dotenv");
require("./database/conn");

app.use(express.json());
// app.use(require("./routes/auth"));
app.use(require("./routes/adminrouter"));
app.use(require("./routes/studentrouter"))
app.use(require("./routes/teacherrouter"))

dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.cookie("moinuddin", "jasmine");
  res.status(201).send("Hello, I am from server MMM");
});
app.listen(PORT, () => {
  console.log(`Server is running at port number ${PORT}`);
});

// app.post('/user/all',Controller.Create);
// app.post('/user/all', function(req, res){
//   Controller.Create
// });
