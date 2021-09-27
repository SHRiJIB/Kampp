const express = require("express");
const catchAsyncError = require("../utils/catchAsyncError.js");
const { addReview, deleteReview } = require("../controllers/reviews.js");
const { validateReview, isReviewAuthor } = require("../middleware/reviewMw.js");

const router = express.Router({ mergeParams: true });

// add reviews to a campground
router.post("/", validateReview, catchAsyncError(addReview));

//delete reviews
router.delete("/:reviewId", isReviewAuthor, catchAsyncError(deleteReview));

module.exports = router;
