import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <section className="dashboard">
      <h1>Welcome to HRM Tools</h1>
      <p>Start a review, audit access, or adjust security posture.</p>
      <div className="dashboard__grid">
        <Link to="/users" className="dashboard__card">
          <h3>User Management</h3>
          <p>Review employee access, titles, and access status.</p>
        </Link>
        <Link to="/permissions" className="dashboard__card">
          <h3>Permissions</h3>
          <p>Monitor role coverage and cross-team approvals.</p>
        </Link>
        <Link to="/audit-logs" className="dashboard__card">
          <h3>Audit Logs</h3>
          <p>Track changes, approvals, and policy events.</p>
        </Link>
        <Link to="/settings" className="dashboard__card">
          <h3>Settings</h3>
          <p>Configure SSO, domains, and security policies.</p>
        </Link>
      </div>
    </section>
  );
};

export default Dashboard;
