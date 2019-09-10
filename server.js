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

const sessionConfig = {
  name: "Shieda", //defaults to sid, provide name for security
  secret: "Rhaast", // ?
  cookie: {
    maxAge: 1000 * 60, //set how long cookie is valid for in ms
    secure: false, //true in production
    httpOnly: true //always set this to true, denies js access to cookie
  },
  resave: false, //do we want to recreate a session if the session hasnt changed
  saveUninitialized: false //ALWAYS FALSE BY DEFAULT: GDPR Laws against setting cookies auotmatically, require user consent
};

module.exports = server;
