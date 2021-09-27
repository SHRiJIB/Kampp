const Campground = require("../models/campground.js");
const geoCoding = require("@mapbox/mapbox-sdk/services/geocoding");
const { cloudinary } = require("../cloudinary");
const mbxToken = process.env.MAPBOX;
const geoCoder = geoCoding({ accessToken: mbxToken });

//get all campgrounds
const getAllCamps = async (req, res) => {
  const campgrounds = await Campground.find({});
  res.status(200).json(campgrounds);
};

//get a campground by id
const getCampById = async (req, res) => {
  const { id } = req.params;
  const camp = await Campground.findById(id)
    .populate({
      path: "reviews",
      populate: {
        path: "author",
      },
    })
    .populate("author");
  if (!camp) {
    return res.status(404).json({ error: "Campground not found." });
  }
  res.status(200).json(camp);
};

//add new camp
const addNewCamp = async (req, res) => {
  const geoData = await geoCoder
    .forwardGeocode({
      query: req.body.campground.location,
      limit: 1,
    })
    .send();
  console.log(req.body.campground);
  const campground = new Campground(req.body.campground);
  console.log(campground);
  campground.geometry = geoData.body.features[0].geometry;
  campground.description = campground.description.trim();
  campground.images = req.files.map((f) => ({
    url: f.path,
    filename: f.filename,
  }));
  console.log(campground);
  campground.author = req.user._id;
  await campground.save();
  res.status(201).json(campground);
};

//edit a campground
const editCampground = async (req, res) => {
  const { id } = req.params;
  const camp = await Campground.findById(id);
  if (!camp) {
    return res.status(400).json({ error: "Campground don't exists." });
  }
  res.status(200).json(camp);
};

//update a campground
const updateCamp = async (req, res) => {
  const { id } = req.params;
  const { campground } = req.body;
  campground.description = campground.description.trim();

  try {
    const camp = await Campground.findByIdAndUpdate(id, { ...campground });
    const imgs = req.files.map((f) => ({
      url: f.path,
      filename: f.filename,
    }));
    camp.images.push(...imgs);
    await camp.save();
    if (req.body.deleteImages) {
      for (let fname of req.body.deleteImages) {
        await cloudinary.uploader.destroy(fname);
      }
      await camp.updateOne({
        $pull: { images: { filename: { $in: req.body.deleteImages } } },
      });
    }

    res.status(200).json(camp);
  } catch (error) {
    res.status(404).json({ error });
  }
};
const deleteCamp = async (req, res) => {
  const { id } = req.params;
  await Campground.findByIdAndDelete(id);
  res.json({ error: "Campground deleted successfully." });
};

module.exports = {
  getAllCamps,
  addNewCamp,
  getCampById,
  editCampground,
  updateCamp,
  deleteCamp,
};
