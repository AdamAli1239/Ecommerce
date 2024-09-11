require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const ItemRoutes = require("./routes/ItemRoutes");
const AuthRoutes = require("./routes/AuthRoutes");
const app = express();

app.use(express.json());
app.use(cookieParser());

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});
app.use("/user", AuthRoutes);
app.use("/items", ItemRoutes);

app.listen(process.env.PORT);
mongoose.connect(process.env.DB_URL);
