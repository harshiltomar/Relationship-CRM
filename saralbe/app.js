const express = require("express");
const cors = require("cors");
import { connections } from "mongoose";

//Routes
const profile = require("./routes/profile.route");
const stage = require("./routes/stage.route");

const app = express();
connections();

// JSON formating
app.use(express.json());

// CORS
app.use(cors());

app.get("/", (req, res) => {
  res.send("Backend Running !");
});

app.use("/api/profile", profile);
app.use("/api/stage", stage);

app.listen(3000, () => {
  console.log("Server Started");
});
