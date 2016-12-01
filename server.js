'use strict';

const express = require("express");

let app = express();
let locale = 'en-us';

app.get('/', function (req, res) {
  let response = {
    unix: null,
    natural: null
  };
  res.send(response);
});

app.get('/:time', function (req, res) {
  let response = {
    unix: null,
    natural: null
  };
  let timestamp = parseInt(req.params.time, 10);
  let date = new Date(req.params.time);
  if (Number.isFinite(timestamp)) {
     date = new Date(timestamp);
     response.unix = timestamp;
     response.natural = getDateStr(date);
  } else if (isFinite(date)) {
     response.unix = date.getTime();
     response.natural = getDateStr(date);
  }
  res.send(response);
});

let server = app.listen(process.env.PORT || 8080, process.env.IP || "0.0.0.0", function () {
  let addr = server.address();
  console.log("Server is listening at", addr.address + ":" + addr.port);
});

function getDateStr(date) {
  return date.toLocaleString(locale, {month: 'long'}) + ' ' + date.getDate() + ', ' + date.getFullYear();
}