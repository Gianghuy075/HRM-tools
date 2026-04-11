import { useMemo, useState } from "react";
import { permissionGroups, users as seedUsers } from "../data/sampleData";

const statusOptions = [
  { value: "active", label: "Đang hoạt động" },
  { value: "review", label: "Cần rà soát" },
  { value: "locked", label: "Đã khóa" },
];

const roleByGroupId = {
  "grp-admin": "Quản trị HR",
  "grp-manager": "Quản lý Bộ phận",
  "grp-staff": "Chuyên viên",
};

const defaultGroupId = permissionGroups[0]?.id || "";

const createInitialForm = () => ({
  name: "",
  email: "",
  department: "",
  groupId: defaultGroupId,
  status: "active",
});

const normalizeUsers = (users) =>
  users.map((user, index) => ({
    id: user.id || `usr-${index + 1}`,
    name: user.name,
    email: user.email || "",
    role: user.role,
    department: user.department,
    groupId: user.groupId || defaultGroupId,
    status: user.status,
    statusLabel:
      statusOptions.find((option) => option.value === user.status)?.label || user.statusLabel,
    lastLogin: user.lastLogin,
  }));

const Users = () => {
  const [accounts, setAccounts] = useState(() => normalizeUsers(seedUsers));
  const [form, setForm] = useState(createInitialForm);
  const [editingId, setEditingId] = useState(null);

  const isEditing = Boolean(editingId);

  const groupNameById = useMemo(
    () => Object.fromEntries(permissionGroups.map((group) => [group.id, group.name])),
    []
  );

  const handleChange = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const resetForm = () => {
    setForm(createInitialForm());
    setEditingId(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const nextStatusLabel =
      statusOptions.find((option) => option.value === form.status)?.label || form.status;
    const nextRole = roleByGroupId[form.groupId] || "Nhân viên";

    if (isEditing) {
      setAccounts((prev) =>
        prev.map((account) =>
          account.id === editingId
            ? {
                ...account,
                name: form.name,
                email: form.email,
                department: form.department,
                groupId: form.groupId,
                role: nextRole,
                status: form.status,
                statusLabel: nextStatusLabel,
              }
            : account
        )
      );
      resetForm();
      return;
    }

    const newAccount = {
      id: `usr-${Date.now()}`,
      name: form.name,
      email: form.email,
      department: form.department,
      groupId: form.groupId,
      role: nextRole,
      status: form.status,
      statusLabel: nextStatusLabel,
      lastLogin: "Chưa đăng nhập",
    };

    setAccounts((prev) => [newAccount, ...prev]);
    resetForm();
  };

  const handleEdit = (account) => {
    setEditingId(account.id);
    setForm({
      name: account.name,
      email: account.email,
      department: account.department,
      groupId: account.groupId,
      status: account.status,
    });
  };

  const handleDelete = (accountId) => {
    setAccounts((prev) => prev.filter((account) => account.id !== accountId));
    if (editingId === accountId) {
      resetForm();
    }
  };

  return (
    <section className="users users--admin">
      <div className="users-admin__list-panel">
        <div className="users-admin__head">
          <h2>Danh sách tài khoản</h2>
          <span>{accounts.length} tài khoản</span>
        </div>

        <div className="users-admin__table-wrap">
          <table className="users-admin__table">
            <thead>
              <tr>
                <th>Tài khoản</th>
                <th>Phòng ban</th>
                <th>Nhóm quyền</th>
                <th>Trạng thái</th>
                <th>Đăng nhập gần nhất</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {accounts.map((account) => (
                <tr key={account.id}>
                  <td>
                    <div className="users-admin__name">{account.name}</div>
                    <div className="users-admin__email">{account.email}</div>
                  </td>
                  <td>{account.department}</td>
                  <td>
                    <span className="users-admin__group">
                      {groupNameById[account.groupId] || "Chưa gán nhóm"}
                    </span>
                  </td>
                  <td>
                    <span className={`users-admin__status users-admin__status--${account.status}`}>
                      {account.statusLabel}
                    </span>
                  </td>
                  <td>{account.lastLogin}</td>
                  <td>
                    <div className="users-admin__actions">
                      <button type="button" onClick={() => handleEdit(account)}>
                        Sửa
                      </button>
                      <button
                        type="button"
                        className="users-admin__delete"
                        onClick={() => handleDelete(account.id)}
                      >
                        Xóa
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="users-admin__form-panel">
        <h2>{isEditing ? "Cập nhật tài khoản" : "Thêm tài khoản"}</h2>
        <form className="users-admin__form" onSubmit={handleSubmit}>
          <label>
            Họ và tên
            <input
              type="text"
              value={form.name}
              onChange={(event) => handleChange("name", event.target.value)}
              required
            />
          </label>

          <label>
            Email
            <input
              type="email"
              value={form.email}
              onChange={(event) => handleChange("email", event.target.value)}
              required
            />
          </label>

          <label>
            Phòng ban
            <input
              type="text"
              value={form.department}
              onChange={(event) => handleChange("department", event.target.value)}
              required
            />
          </label>

          <label>
            Nhóm quyền
            <select
              value={form.groupId}
              onChange={(event) => handleChange("groupId", event.target.value)}
              required
            >
              {permissionGroups.map((group) => (
                <option key={group.id} value={group.id}>
                  {group.name}
                </option>
              ))}
            </select>
          </label>

          <label>
            Trạng thái
            <select
              value={form.status}
              onChange={(event) => handleChange("status", event.target.value)}
            >
              {statusOptions.map((status) => (
                <option key={status.value} value={status.value}>
                  {status.label}
                </option>
              ))}
            </select>
          </label>

          <div className="users-admin__form-actions">
            <button type="submit">{isEditing ? "Lưu thay đổi" : "Thêm tài khoản"}</button>
            {isEditing ? (
              <button type="button" className="users-admin__cancel" onClick={resetForm}>
                Hủy
              </button>
            ) : null}
          </div>
        </form>
      </div>
    </section>
  );
};

export default Users;
