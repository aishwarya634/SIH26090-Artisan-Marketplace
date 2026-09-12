const Product = require("../models/Product");
const Artisan = require("../models/Artisan");
const { asyncHandler } = require("../utils/helpers");

// POST /api/products
const createProduct = asyncHandler(async (req, res) => {
  const artisan = await Artisan.findOne({ user: req.user._id });
  if (!artisan) {
    res.status(400);
    throw new Error("You must create an artisan profile before adding products");
  }

  const product = await Product.create({ ...req.body, artisan: artisan._id });
  res.status(201).json(product);
});

// GET /api/products?search=&category=&page=&limit=
const getProducts = asyncHandler(async (req, res) => {
  const { search, category, page = 1, limit = 12 } = req.query;

  const query = { status: "published" };
  if (search) query.title = { $regex: search, $options: "i" };
  if (category) query.category = category;

  const products = await Product.find(query)
    .populate("artisan", "craft location")
    .skip((page - 1) * limit)
    .limit(Number(limit))
    .sort({ createdAt: -1 });

  const total = await Product.countDocuments(query);

  res.json({ products, total, page: Number(page), pages: Math.ceil(total / limit) });
});

// GET /api/products/:id
const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id).populate({
    path: "artisan",
    populate: { path: "user", select: "name" },
  });
  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }
  res.json(product);
});

// GET /api/products/mine
const getMyProducts = asyncHandler(async (req, res) => {
  const artisan = await Artisan.findOne({ user: req.user._id });
  if (!artisan) {
    return res.json([]);
  }
  const products = await Product.find({ artisan: artisan._id }).sort({ createdAt: -1 });
  res.json(products);
});

// PUT /api/products/:id
const updateProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id).populate("artisan");
  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }
  if (product.artisan.user.toString() !== req.user._id.toString()) {
    res.status(403);
    throw new Error("Not authorized to edit this product");
  }

  Object.assign(product, req.body);
  await product.save();
  res.json(product);
});

// DELETE /api/products/:id
const deleteProduct = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id).populate("artisan");
  if (!product) {
    res.status(404);
    throw new Error("Product not found");
  }
  if (product.artisan.user.toString() !== req.user._id.toString()) {
    res.status(403);
    throw new Error("Not authorized to delete this product");
  }

  await product.deleteOne();
  res.json({ message: "Product removed" });
});

module.exports = {
  createProduct,
  getProducts,
  getProductById,
  getMyProducts,
  updateProduct,
  deleteProduct,
};