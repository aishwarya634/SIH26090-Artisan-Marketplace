const catalogService = require("../services/catalogService");
const { asyncHandler } = require("../utils/helpers");

// POST /api/ai/catalog-suggestion
const getCatalogSuggestion = asyncHandler(async (req, res) => {
  const { title } = req.body;
  const imagePath = req.file ? req.file.path : null;

  if (!title) {
    res.status(400);
    throw new Error("Product title is required to generate suggestions");
  }

  const suggestion = await catalogService.buildCatalogSuggestion({ title, imagePath });
  res.json(suggestion);
});

module.exports = { getCatalogSuggestion };