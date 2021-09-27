const Campground = require("../models/campground.js");
const Review = require("../models/review.js");

const addReview = async (req, res) => {
  const campground = await Campground.findById(req.params.id);
  const review = new Review(req.body.review);
  review.author = req.user._id;
  campground.reviews.push(review);

  try {
    await review.save();
    await campground.save();
    res.status(201).json(review);
  } catch (error) {
    res.status(409).json({ error });
  }
};

const deleteReview = async (req, res) => {
  const { id, reviewId } = req.params;
  try {
    await Campground.findByIdAndUpdate(id, { $pull: { reviews: reviewId } });
    await Review.findByIdAndDelete(reviewId);
    res.json({ message: "Review deleed successfully" });
  } catch (error) {
    res.status(404).send("Not found");
  }
};

module.exports = { addReview, deleteReview };
