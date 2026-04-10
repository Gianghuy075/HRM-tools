import { Link } from "react-router-dom";
import { accessTools, subsystems } from "../data/sampleData";

const SystemIcon = ({ type }) => {
  switch (type) {
    case "crm":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="8" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.8" />
          <circle cx="16" cy="9" r="2.5" stroke="currentColor" strokeWidth="1.8" />
          <path d="M3.8 18c.5-2.4 2.4-3.8 4.2-3.8S11.7 15.6 12.2 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M11.8 18c.5-2.4 2.4-3.8 4.2-3.8s3.7 1.4 4.2 3.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>
      );
    case "attendance":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.8" />
          <path d="M12 7.8v4.7l3.1 1.9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "payroll":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3.5" y="6" width="17" height="12" rx="3" stroke="currentColor" strokeWidth="1.8" />
          <path d="M8 12h8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M8.5 9.2h.5a2.3 2.3 0 1 1 0 4.6h-.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "recruitment":
      return (
        <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="5" y="7" width="14" height="11" rx="2" stroke="currentColor" strokeWidth="1.8" />
          <path d="M9 7v-1a3 3 0 0 1 6 0v1" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          <path d="M5.2 11.5h13.6" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      );
    default:
      return null;
  }
};

const Dashboard = () => {
  return (
    <section className="dashboard">
      <h1>Trung tâm điều phối HRM Tools</h1>
      <p>Mở các cổng hệ thống con và quản trị truy cập tại một nơi duy nhất.</p>

      <div className="dashboard__section">
        <h2>Hệ thống con</h2>
        <p className="dashboard__subtitle">
          Nhấn vào từng thẻ để mở cổng hệ thống chuyên biệt.
        </p>
        <div className="dashboard__grid">
          {subsystems.map((system) => (
            <a
              key={system.name}
              href={system.url}
              className="dashboard__card dashboard__card--system"
              rel="noreferrer"
              target="_blank"
            >
              <div className="dashboard__meta">
                <span className="dashboard__title">
                  <span className="dashboard__icon">
                    <SystemIcon type={system.icon} />
                  </span>
                  <span>{system.name}</span>
                </span>
                <span className="dashboard__badge">{system.status}</span>
              </div>
              <p>{system.description}</p>
              <div className="dashboard__status">
                <span className={`dashboard__dot dashboard__dot--${system.tone}`} />
                <span>{system.health}</span>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="dashboard__section">
        <h2>Kiểm soát truy cập</h2>
        <p className="dashboard__subtitle">
          Quản lý truy cập người dùng và giám sát an toàn tập trung.
        </p>
        <div className="dashboard__grid">
          {accessTools.map((tool) => (
            <Link key={tool.to} to={tool.to} className="dashboard__card">
              <h3>{tool.title}</h3>
              <p>{tool.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
