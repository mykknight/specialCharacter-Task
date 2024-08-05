const express = require("express");
import bodyParser from "body-parser";
import mongoose from "mongoose";
import router from "./routes/productRoutes";
const dotenv = require("dotenv");

const app = express();

app.use(bodyParser.json());
//app.use(dotenv);
const mongoUrl = "mongodb://localhost:27017";

app.use("/products", router);

// mongoose
//   .connect(mongoUrl, {
//     //useNewUrlParser: true,
//     //useUnifiedTopology: true
//   })
//   .then(() => {
//     console.log("connected to mongodb database");
//   })
//   .catch((err) => console.log(err));

// app.get("/", (req, res) => {
//   res.send("Server is running");
// });

app.listen(3000, () => {
  console.log("App is listening on 3000");
});
