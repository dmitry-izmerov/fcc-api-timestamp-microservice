'use strict';

const express = require("express");

let app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
});


// process.env.PORT || 3000, process.env.IP || "0.0.0.0"
let server = app.listen(8080, "0.0.0.0", function () {
  let addr = server.address();
  console.log("Server is listening at", addr.address + ":" + addr.port);
});