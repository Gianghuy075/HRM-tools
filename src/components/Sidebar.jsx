import { NavLink } from "react-router-dom";

const navItems = [
  { label: "Dashboard", to: "/" },
  { label: "Users", to: "/users" },
  { label: "Permissions", to: "/permissions" },
  { label: "Audit Logs", to: "/audit-logs" },
  { label: "Settings", to: "/settings" },
];

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <div className="sidebar__brand">HRM Tools</div>
      <nav className="sidebar__nav">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === "/"}
            className={({ isActive }) =>
              isActive ? "sidebar__link sidebar__link--active" : "sidebar__link"
            }
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
