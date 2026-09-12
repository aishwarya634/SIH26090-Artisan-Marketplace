const express = require("express");
const router = express.Router();
const {
  createArtisanProfile,
  getMyArtisanProfile,
  getArtisanById,
  updateArtisanProfile,
} = require("../controllers/artisanController");
const { protect } = require("../middleware/authMiddleware");

router.post("/", protect, createArtisanProfile);
router.get("/me", protect, getMyArtisanProfile);
router.put("/me", protect, updateArtisanProfile);
router.get("/:id", getArtisanById);

module.exports = router;