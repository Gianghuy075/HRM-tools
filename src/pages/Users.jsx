const users = [
  { name: "Taylor Morgan", role: "HR Admin", department: "People Ops" },
  { name: "Jordan Lee", role: "Security Analyst", department: "Security" },
  { name: "Casey Patel", role: "IT Manager", department: "IT" },
];

const rbac = [
  { permission: "View payroll", admin: true, manager: false, analyst: false },
  { permission: "Edit profiles", admin: true, manager: true, analyst: false },
  { permission: "Export reports", admin: true, manager: true, analyst: true },
];

const Users = () => {
  return (
    <section className="users">
      <h1>User Management</h1>
      <div className="users__list">
        {users.map((user) => (
          <div key={user.name} className="users__card">
            <h3>{user.name}</h3>
            <p>{user.role}</p>
            <span>{user.department}</span>
          </div>
        ))}
      </div>
      <div className="users__matrix">
        <h2>RBAC Matrix</h2>
        <table>
          <thead>
            <tr>
              <th>Permission</th>
              <th>Admin</th>
              <th>Manager</th>
              <th>Analyst</th>
            </tr>
          </thead>
          <tbody>
            {rbac.map((row) => (
              <tr key={row.permission}>
                <td>{row.permission}</td>
                <td>{row.admin ? "Yes" : "No"}</td>
                <td>{row.manager ? "Yes" : "No"}</td>
                <td>{row.analyst ? "Yes" : "No"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Users;
