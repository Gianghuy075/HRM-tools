import { NavLink } from "react-router-dom";
import { navItems } from "../data/sampleData";

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
