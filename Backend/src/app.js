const express = require("express");
const app = express();

app.use(express.json());

const eventosRoute = require("./routes/eventosRoute");

app.use(eventosRoute);

module.exports = app;