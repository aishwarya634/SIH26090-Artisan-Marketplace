const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.get("/", (req, res) => {
  res.json({ message: "SIH26090 Artisan Marketplace API is running" });
});

app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/artisans", require("./routes/artisanRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/ai", require("./routes/aiRoutes"));
app.use("/api/market", require("./routes/marketRoutes"));

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));