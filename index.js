require("dotenv").config()
require("express-async-errors")
const XMLReader = require("./helpers/XMLReader");

const accessLogMiddleware = require("./middlewares/logger.middleware")
const routes = require("./routes/api")

const express = require("express")
const app = express()
const cors = require("cors")

app.use(cors())

app.use(express.json())

// Req and Res logger.
app.use(accessLogMiddleware)

app.use("/", routes)

XMLReader.run();

module.exports = app
