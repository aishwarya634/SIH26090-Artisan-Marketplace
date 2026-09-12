const express = require("express");
const router = express.Router();
const { getCatalogSuggestion } = require("../controllers/aiController");
const { protect } = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

router.post("/catalog-suggestion", protect, upload.single("image"), getCatalogSuggestion);

module.exports = router;