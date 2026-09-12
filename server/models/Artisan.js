const mongoose = require("mongoose");

const artisanSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true, unique: true },
    craft: { type: String, required: true },
    bio: { type: String, default: "" },
    location: {
      city: { type: String, default: "" },
      state: { type: String, default: "" },
      country: { type: String, default: "India" },
    },
    contactNumber: { type: String, default: "" },
    profileImage: { type: String, default: "" },
    yearsOfExperience: { type: Number, default: 0 },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Artisan", artisanSchema);