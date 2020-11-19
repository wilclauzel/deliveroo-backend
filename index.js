/* Import */
const express = require("express");
const formidable = require("express-formidable");
const mongoose = require("mongoose");
const cors = require("cors");
const data = require("./models/Restaurant");

/* Initialize */
require("dotenv").config();
const app = express();
app.use(formidable());
app.use(cors());

/* Routes */
app.get("/", (req, res) => {
  return res.status(200).json({ data });
});
app.all("*", (req, res) => {
  return res.status(401).json({ error: { message: "page not found" } });
});

/* Start server */
app.listen(process.env.PORT, () => {
  console.log(`Server started on port : ${process.env.PORT}`);
});
