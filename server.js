const express = require("express");

const serveStatic = require("serve-static");

const path = require("path");

// Create the express app

const app = express();

// Create middleware to  handle the serving of the app

app.use("/", serveStatic(path.join(__dirname, "/public")));
app.get("*", function(req, res) {
  res.sendFile(__dirname + "/public/index.html");
});

// Create default poit to serve the app
const port = process.env.PORT || 5000;
app.listen(port);

console.log("Server started on port " + port);
