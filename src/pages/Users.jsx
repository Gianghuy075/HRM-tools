import { rbac, users } from "../data/sampleData";

const Users = () => {
  return (
    <section className="users">
      <h1>Quản lý tài khoản truy cập</h1>
      <p className="users__subtitle">
        Kiểm soát quyền truy cập tài khoản trên CRM, Chấm công, Tính lương và Tuyển dụng.
      </p>
      <div className="users__list">
        {users.map((user) => (
          <div key={user.name} className="users__card">
            <div className="users__card-header">
              <h3>{user.name}</h3>
              <span className={`users__pill users__pill--${user.status}`}>
                {user.statusLabel}
              </span>
            </div>
            <p>{user.role}</p>
            <div className="users__meta">
              <span>{user.department}</span>
              <span>Đăng nhập gần nhất: {user.lastLogin}</span>
            </div>
          </div>
        ))}
      </div>
      <div className="users__matrix">
        <h2>Ma trận RBAC</h2>
        <table>
          <thead>
            <tr>
              <th>Quyền</th>
              <th>Quản trị</th>
              <th>Quản lý</th>
              <th>Chuyên viên</th>
            </tr>
          </thead>
          <tbody>
            {rbac.map((row) => (
              <tr key={row.permission}>
                <td>{row.permission}</td>
                <td>{row.admin ? "Có" : "Không"}</td>
                <td>{row.manager ? "Có" : "Không"}</td>
                <td>{row.analyst ? "Có" : "Không"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Users;
