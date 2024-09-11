require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const ItemRoutes = require("./routes/ItemRoutes");

const app = express();

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.use("/items", ItemRoutes);

app.listen(process.env.PORT);
