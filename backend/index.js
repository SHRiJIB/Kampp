require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const ExpressError = require("./utils/ExpressError.js");
const campgroundRouter = require("./routes/campgrounds.js");
const reviewRouter = require("./routes/reviews.js");
const authRouter = require("./routes/auth.js");
const mongoSanitize = require("express-mongo-sanitize");
const helmet = require("helmet");
const {
  connectSrcUrls,
  scriptSrcUrls,
  styleSrcUrls,
  fontSrcUrls,
} = require("./resourceUrls.js");
const PORT = process.env.PORT || 3000;
mongoose.connect(process.env.CONNECTION_URL, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error!!"));
db.once("open", () => {
  console.log("MONGO IS ONNN!!!");
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(mongoSanitize());

//helmet
app.use(helmet());

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: [],
      connectSrc: ["'self'", ...connectSrcUrls],
      scriptSrc: ["'unsafe-inline'", "'self'", ...scriptSrcUrls],
      styleSrc: ["'self'", "'unsafe-inline'", ...styleSrcUrls],
      workerSrc: ["'self'", "blob:"],
      childSrc: ["blob:"],
      objectSrc: [],
      imgSrc: [
        "'self'",
        "blob:",
        "data:",
        `https://res.cloudinary.com/${process.env.CLOUDINARY_CLOUD_NAME}/`, //SHOULD MATCH YOUR CLOUDINARY ACCOUNT!
        "https://images.unsplash.com",
        "https://source.unsplash.com",
      ],
      fontSrc: ["'self'", ...fontSrcUrls],
    },
  })
);

//routes
//home page route
app.get("/", (req, res) => {
  res.send("okkk!! kamp server is running");
});

//router
app.use("/auth", authRouter);
app.use("/campgrounds", campgroundRouter);
app.use("/campgrounds/:id/reviews", reviewRouter);

app.all("*", (req, res, next) => {
  next(new ExpressError("Page Not Found", 404));
});

app.use((err, req, res, next) => {
  const { statusCode = 500 } = err;
  if (!err.message) {
    err.message = "Something Went Wrong";
  }

  res.status(statusCode).json({ err });
  next();
});

app.listen(PORT, () => {
  console.log(`SERVER IS RUNNIG ON PORT ${PORT}`);
});
