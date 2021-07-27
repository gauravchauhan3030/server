const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const router = require("./router");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

mongoose.connect("mongodb://localhost:27017/auth");

app.use(cors());
app.use(morgan("combined"));
app.use(bodyParser.json());

router(app);

app.listen(3090, () => {
  console.log("Server is listening on 3090");
});
