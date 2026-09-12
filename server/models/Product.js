const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    artisan: { type: mongoose.Schema.Types.ObjectId, ref: "Artisan", required: true },
    title: { type: String, required: true, trim: true },
    description: { type: String, default: "" },
    category: { type: String, required: true },
    price: { type: Number, required: true, min: 0 },
    images: [{ type: String }],
    stock: { type: Number, default: 1 },
    status: { type: String, enum: ["draft", "published"], default: "draft" },

    // AI-assisted cataloging fields
    aiSuggestions: {
      suggestedCategory: { type: String, default: "" },
      suggestedDescription: { type: String, default: "" },
      suggestedTags: [{ type: String }],
      confidence: { type: Number, default: 0 },
    },
    isAiAssisted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);