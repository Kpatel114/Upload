// server file 
const cors = require('cors');
const express = require('express');
const app = express();

global.__basedir = __dirname;

var corsOptions = {
    // allow request from this port
    origin: "http://localhost:8081"
    //cross origin selective on who allows to access 
};

app.use(cors(corsOptions))

const initRoutes = require("./routes");

app.use(express.urlencoded({ extended: true }))

