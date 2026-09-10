import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import DashboardLayout from "./layouts/DashboardLayout";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Marketplace from "./pages/Marketplace";
import ProductDetails from "./pages/ProductDetails";
import ArtisanProfile from "./pages/ArtisanProfile";
import ArtisanRegistration from "./pages/ArtisanRegistration";
import Dashboard from "./pages/Dashboard";
import AddProduct from "./pages/AddProduct";
import SmartCatalog from "./pages/SmartCatalog";
import MarketLinkage from "./pages/MarketLinkage";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/artisan-registration" element={<ArtisanRegistration />} />
        </Route>

        {/* Dashboard / protected routes */}
        <Route element={<DashboardLayout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<ArtisanProfile />} />
          <Route path="/add-product" element={<AddProduct />} />
          <Route path="/smart-catalog" element={<SmartCatalog />} />
          <Route path="/market-linkage" element={<MarketLinkage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;