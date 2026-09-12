const MarketOpportunity = require("../models/MarketOpportunity");

// Very simple category-matching recommendation logic (prototype)
const getRecommendationsForArtisan = async (artisanCraft) => {
  const opportunities = await MarketOpportunity.find({
    matchedCategories: { $regex: artisanCraft, $options: "i" },
  }).limit(10);

  return opportunities;
};

module.exports = { getRecommendationsForArtisan };