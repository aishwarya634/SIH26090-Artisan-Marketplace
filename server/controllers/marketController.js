const marketService = require("../services/marketService");
const Artisan = require("../models/Artisan");
const MarketOpportunity = require("../models/MarketOpportunity");
const { asyncHandler } = require("../utils/helpers");

// GET /api/market/opportunities
const getAllOpportunities = asyncHandler(async (req, res) => {
  const opportunities = await MarketOpportunity.find().sort({ createdAt: -1 });
  res.json(opportunities);
});

// GET /api/market/recommendations
const getRecommendations = asyncHandler(async (req, res) => {
  const artisan = await Artisan.findOne({ user: req.user._id });
  if (!artisan) {
    res.status(404);
    throw new Error("Artisan profile not found");
  }

  const recommendations = await marketService.getRecommendationsForArtisan(artisan.craft);
  res.json(recommendations);
});

module.exports = { getAllOpportunities, getRecommendations };