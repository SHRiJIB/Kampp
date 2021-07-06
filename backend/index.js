require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Campground = require("./models/campground.js");
const app = express();
const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.CONNECTION_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`ON ${PORT}!!`);
    });
  });

app.get("/campgrounds", async (req, res) => {
  try {
    const campgrounds = await Campground.find({});
    console.log(campgrounds.length);
    res.status(200).json(campgrounds);
  } catch (error) {
    res.status(404).json({ error });
  }
});
app.get("/", (req, res) => {
  res.send({ heello: "guys" });
});
