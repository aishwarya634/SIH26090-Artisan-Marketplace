import { Outlet, Link, useNavigate } from "react-router-dom";
import { logoutUser, getCurrentUser } from "../services/authService";

const DashboardLayout = () => {
  const navigate = useNavigate();
  const user = getCurrentUser();

  const handleLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <div className="dashboard-shell">
      <aside className="dashboard-sidebar">
        <h2 className="sidebar-title">ArtisanConnect</h2>
        <nav className="sidebar-nav">
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/add-product">Add Product</Link>
          <Link to="/smart-catalog">Smart Catalog</Link>
          <Link to="/market-linkage">Market Linkage</Link>
        </nav>
        <div className="sidebar-footer">
          {user && <span className="sidebar-user">Hi, {user.name}</span>}
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </div>
      </aside>
      <main className="dashboard-content">
        <Outlet />
      </main>
    </div>
  );
};

export default DashboardLayout;