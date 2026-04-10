const permissions = [
  {
    role: "HR Admin",
    summary: "Full access to HR workflows, payroll, and compliance reviews.",
  },
  {
    role: "IT Manager",
    summary: "Manage device policies, onboarding workflows, and access lifecycle.",
  },
  {
    role: "Security Analyst",
    summary: "Review access logs, run audits, and validate security controls.",
  },
];

const Permissions = () => {
  return (
    <section className="permissions">
      <h1>Roles Overview</h1>
      <div className="permissions__grid">
        {permissions.map((item) => (
          <div key={item.role} className="permissions__card">
            <h3>{item.role}</h3>
            <p>{item.summary}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Permissions;
