import { permissions } from "../data/sampleData";

const Permissions = () => {
  return (
    <section className="permissions">
      <h1>Tổng quan vai trò</h1>
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
