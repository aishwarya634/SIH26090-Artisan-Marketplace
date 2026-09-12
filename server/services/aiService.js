// PROTOTYPE AI SERVICE — returns mock/rule-based suggestions.
// Replace internals with real model calls when Member 6 connects a real AI backend.

const classifyImage = async (imagePath) => {
  // Mock: pretend to classify based on nothing real yet
  const mockCategories = ["Textiles", "Pottery", "Woodwork", "Jewelry", "Metalwork"];
  const randomCategory = mockCategories[Math.floor(Math.random() * mockCategories.length)];
  return {
    category: randomCategory,
    confidence: 0.75,
  };
};

const generateDescription = async ({ title, category }) => {
  // Mock: template-based description generation
  return `Handcrafted ${category.toLowerCase()} item titled "${title}", made using traditional techniques passed down through generations of skilled artisans.`;
};

const generateTags = async ({ title, category }) => {
  return [category.toLowerCase(), "handmade", "artisan", "traditional"];
};

const translateText = async (text, targetLang = "hi") => {
  // Mock stand-in — real implementation would call a translation API
  return `[${targetLang}] ${text}`;
};

module.exports = { classifyImage, generateDescription, generateTags, translateText };