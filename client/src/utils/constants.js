// API Configuration
export const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

// Route Paths
export const ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER: "/register",
  MARKETPLACE: "/marketplace",
  PRODUCT_DETAILS: "/product/:id",
  ARTISAN_REGISTRATION: "/artisan-registration",
  ARTISAN_PROFILE: "/profile",
  DASHBOARD: "/dashboard",
  ADD_PRODUCT: "/add-product",
  SMART_CATALOG: "/smart-catalog",
  MARKET_LINKAGE: "/market-linkage",
};

// Product Categories (align with backend + AI cataloging)
export const PRODUCT_CATEGORIES = [
  "Textiles",
  "Pottery",
  "Woodwork",
  "Jewelry",
  "Metalwork",
  "Paintings",
  "Handicrafts",
  "Other",
];

// User Roles
export const USER_ROLES = {
  ARTISAN: "artisan",
  BUYER: "buyer",
  ADMIN: "admin",
};

// LocalStorage Keys
export const STORAGE_KEYS = {
  TOKEN: "token",
  USER: "user",
};

// Pagination defaults
export const DEFAULT_PAGE_SIZE = 12;

// AI status labels (for SmartCatalog UI states)
export const AI_STATUS = {
  IDLE: "idle",
  PROCESSING: "processing",
  SUCCESS: "success",
  ERROR: "error",
};