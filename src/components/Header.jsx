import { useAuth } from "../context/AuthContext";

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="header">
      <div className="header__search">
        <input type="search" placeholder="Search employees, teams, permissions" />
      </div>
      <div className="header__actions">
        <button type="button" className="header__icon" aria-label="Notifications">
          Notifications
        </button>
        <div className="header__user">
          <div className="header__user-info">
            <div className="header__user-name">{user?.name || "Guest"}</div>
            <div className="header__user-role">{user?.role || ""}</div>
          </div>
          <button type="button" onClick={logout} className="header__logout">
            Sign out
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
