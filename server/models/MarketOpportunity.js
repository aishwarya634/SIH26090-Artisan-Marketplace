const mongoose = require("mongoose");

const marketOpportunitySchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, default: "" },
    category: { type: String, required: true },
    region: { type: String, default: "All India" },
    organizer: { type: String, default: "" },
    link: { type: String, default: "" },
    deadline: { type: Date },
    matchedCategories: [{ type: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model("MarketOpportunity", marketOpportunitySchema);