import { useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { pageHeaders } from "../data/sampleData";

const Header = () => {
  const { user, logout } = useAuth();
  const { pathname } = useLocation();
  const currentPage = pageHeaders[pathname] || {
    title: "HRM Tools",
    subtitle: "",
  };

  return (
    <header className="header">
      <div className="header__page">
        <h1 className="header__title">{currentPage.title}</h1>
        {currentPage.subtitle ? (
          <p className="header__subtitle">{currentPage.subtitle}</p>
        ) : null}
      </div>
      <div className="header__actions">
        <button type="button" className="header__icon" aria-label="Thông báo">
          Thông báo
        </button>
        <div className="header__user">
          <div className="header__user-info">
            <div className="header__user-name">{user?.name || "Khách"}</div>
            <div className="header__user-role">{user?.role || ""}</div>
          </div>
          <button type="button" onClick={logout} className="header__logout">
            Đăng xuất
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
