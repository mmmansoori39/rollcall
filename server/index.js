const cors = require('cors');
const express = require("express");
const path = require('path')
const app = express();
const dotenv = require("dotenv");
require("./database/conn");

app.use(cors());
app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true // Enable credentials (cookies)
}));

app.use(express.static(path.join(__dirname, "../client/build")));

// app.use(require("./routes/auth"));
app.use(require("./routes/adminrouter"));
app.use(require("./routes/studentrouter"))
app.use(require("./routes/teacherrouter"))


app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'))
})

dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT || 3000;

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
