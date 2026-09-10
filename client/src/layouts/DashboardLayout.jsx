import { Outlet, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="dashboard-layout">
      <aside className="dashboard-sidebar">
        <div className="dashboard-brand">ArtisanConnect</div>
        <nav className="dashboard-nav">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/add-product">Add Product</Link>
          <Link to="/smart-catalog">Smart Catalog</Link>
          <Link to="/market-linkage">Market Linkage</Link>
        </nav>
        <div className="sidebar-footer">
          {user && <span>Hi, {user.name}</span>}
          <button onClick={handleLogout}>Logout</button>
        </div>
      </aside>
      <main className="dashboard-content">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;