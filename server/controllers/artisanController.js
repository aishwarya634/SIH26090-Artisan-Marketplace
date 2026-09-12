const Artisan = require("../models/Artisan");
const { asyncHandler } = require("../utils/helpers");

// POST /api/artisans
const createArtisanProfile = asyncHandler(async (req, res) => {
  const existing = await Artisan.findOne({ user: req.user._id });
  if (existing) {
    res.status(400);
    throw new Error("Artisan profile already exists for this user");
  }

  const artisan = await Artisan.create({ ...req.body, user: req.user._id });
  res.status(201).json(artisan);
});

// GET /api/artisans/me
const getMyArtisanProfile = asyncHandler(async (req, res) => {
  const artisan = await Artisan.findOne({ user: req.user._id }).populate("user", "name email");
  if (!artisan) {
    res.status(404);
    throw new Error("Artisan profile not found");
  }
  res.json(artisan);
});

// GET /api/artisans/:id
const getArtisanById = asyncHandler(async (req, res) => {
  const artisan = await Artisan.findById(req.params.id).populate("user", "name email");
  if (!artisan) {
    res.status(404);
    throw new Error("Artisan not found");
  }
  res.json(artisan);
});

// PUT /api/artisans/me
const updateArtisanProfile = asyncHandler(async (req, res) => {
  const artisan = await Artisan.findOneAndUpdate({ user: req.user._id }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!artisan) {
    res.status(404);
    throw new Error("Artisan profile not found");
  }
  res.json(artisan);
});

module.exports = { createArtisanProfile, getMyArtisanProfile, getArtisanById, updateArtisanProfile };