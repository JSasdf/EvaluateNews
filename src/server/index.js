const path = require("path");
const express = require("express");
const mockAPIResponse = require("./mockAPI.js");
const bodyParser = require("body-parser");
const cors = require("cors");
const aylien = require("aylien_textapi");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.static("dist"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const textapi = new aylien({
  application_id: process.env.API_ID,
  application_key: process.env.API_KEY
});

app.get("/", function(req, res) {
  res.sendFile("dist/index.html");
});

const port = 8080;
// designates what port the app will listen to for incoming requests
app.listen(port, function() {
  console.log("Example app listening on port 8080!");
});

app.get("/test", function(req, res) {
  res.send(mockAPIResponse);
});

app.post("/analysis", (req, res) => {
  textapi.sentiment({ url: req.body.url }, (error, result) => {
    if (error) {
      console.log("Error");
      res.send();
      return;
    }

    console.log("Got Results");

    res.send(result);
    console.log(result);
  });
});

module.exports = app;
