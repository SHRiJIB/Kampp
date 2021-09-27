const {
  getAllCamps,
  getCampById,
  editCampground,
  addNewCamp,
  deleteCamp,
  updateCamp,
} = require("../controllers/campground.js");
const express = require("express");
const router = express.Router();
const multer = require("multer");
const { CloudStorage } = require("../cloudinary/index.js");
const upload = multer({ storage: CloudStorage });
const {
  validateCampground,
  isAuthor,
} = require("../middleware/campgroundMw.js");

const catchAsync = require("../utils/catchAsyncError.js");

//all campgrounds route
router.get("/", catchAsync(getAllCamps));

// get campground by id
router.get("/:id", catchAsync(getCampById));

//add new campground
router.post(
  "/",
  upload.array("image"),
  validateCampground,
  catchAsync(addNewCamp)
);

//edit page route
router.get("/:id/edit", isAuthor, catchAsync(editCampground));

//update campground
router.put(
  "/:id",
  isAuthor,
  upload.array("image"),
  validateCampground,
  catchAsync(updateCamp)
);

//delete campground from database
router.delete("/:id", isAuthor, catchAsync(deleteCamp));

module.exports = router;
