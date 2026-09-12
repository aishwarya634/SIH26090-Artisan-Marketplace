const express = require("express");
const router = express.Router();
const { getAllOpportunities, getRecommendations } = require("../controllers/marketController");
const { protect } = require("../middleware/authMiddleware");

router.get("/opportunities", getAllOpportunities);
router.get("/recommendations", protect, getRecommendations);

module.exports = router;