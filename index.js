const express = require("express");
const cors = require("cors");

const app = express();
require("./db/dbConnect");

const MachineRoute = require("./routes/Machine");

require("dotenv").config();

//To close off requests from unintended hosts
// var corsOptions = {
//   origin: "http://localhost:8081"
// };

app.use(cors());
// parse requests of content-type - application/json

app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded

app.use(express.urlencoded({ extended: true }));
// simple route
app.use(MachineRoute);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to Fo_sho backend." });
});
// set port, listen for requests

const PORT = process.env.PORT || 3035;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
