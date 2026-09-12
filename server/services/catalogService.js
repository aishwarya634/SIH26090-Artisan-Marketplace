const aiService = require("./aiService");

// Combines AI outputs into one suggestion object for the catalog preview
const buildCatalogSuggestion = async ({ title, imagePath }) => {
  const classification = await aiService.classifyImage(imagePath);
  const description = await aiService.generateDescription({
    title,
    category: classification.category,
  });
  const tags = await aiService.generateTags({ title, category: classification.category });

  return {
    suggestedCategory: classification.category,
    suggestedDescription: description,
    suggestedTags: tags,
    confidence: classification.confidence,
  };
};

module.exports = { buildCatalogSuggestion };