const express = require("express");
const server = express();
server.use(express.json());

const helmet = require("helmet");
server.use(helmet());

server.use(logger);

const db = require("./userModel");

server.get("/", (req, res) => {
  res.send("working");
});

module.exports = server;
