import { useMemo, useState } from "react";
import { permissionGroups, permissionModules } from "../data/sampleData";

const createEmptyModules = () =>
  Object.fromEntries(
    permissionModules.map((module) => [
      module.id,
      {
        pageAccess: false,
        features: Object.fromEntries(module.features.map((feature) => [feature.id, false])),
      },
    ])
  );

const Permissions = () => {
  const [groups, setGroups] = useState(permissionGroups);
  const [activeGroupId, setActiveGroupId] = useState(permissionGroups[0]?.id || "");

  const activeGroup = useMemo(
    () => groups.find((group) => group.id === activeGroupId) || groups[0],
    [groups, activeGroupId]
  );

  const updateGroupName = (name) => {
    setGroups((prev) =>
      prev.map((group) => (group.id === activeGroup.id ? { ...group, name } : group))
    );
  };

  const addGroup = () => {
    const nextId = `grp-${Date.now()}`;
    const newGroup = {
      id: nextId,
      name: "Nhóm quyền mới",
      members: 0,
      modules: createEmptyModules(),
    };
    setGroups((prev) => [...prev, newGroup]);
    setActiveGroupId(nextId);
  };

  const togglePageAccess = (moduleId) => {
    setGroups((prev) =>
      prev.map((group) => {
        if (group.id !== activeGroup.id) {
          return group;
        }

        const currentModule = group.modules[moduleId];
        return {
          ...group,
          modules: {
            ...group.modules,
            [moduleId]: {
              ...currentModule,
              pageAccess: !currentModule.pageAccess,
            },
          },
        };
      })
    );
  };

  const toggleFeatureAccess = (moduleId, featureId) => {
    setGroups((prev) =>
      prev.map((group) => {
        if (group.id !== activeGroup.id) {
          return group;
        }

        const currentModule = group.modules[moduleId];
        return {
          ...group,
          modules: {
            ...group.modules,
            [moduleId]: {
              ...currentModule,
              features: {
                ...currentModule.features,
                [featureId]: !currentModule.features[featureId],
              },
            },
          },
        };
      })
    );
  };

  return (
    <section className="permissions permissions--group-admin">
      <div className="permissions-panel permissions-panel--groups">
        <div className="permissions-panel__head">
          <h2>Nhóm quyền</h2>
          <button type="button" className="permissions-btn" onClick={addGroup}>
            + Thêm nhóm
          </button>
        </div>

        <div className="permissions-group-list">
          {groups.map((group) => (
            <button
              key={group.id}
              type="button"
              className={
                group.id === activeGroup.id
                  ? "permissions-group-item permissions-group-item--active"
                  : "permissions-group-item"
              }
              onClick={() => setActiveGroupId(group.id)}
            >
              <span className="permissions-group-item__name">{group.name}</span>
              <span className="permissions-group-item__meta">{group.members} thành viên</span>
            </button>
          ))}
        </div>

        <div className="permissions-group-editor">
          <label htmlFor="group-name-input">Tên nhóm quyền</label>
          <input
            id="group-name-input"
            type="text"
            value={activeGroup?.name || ""}
            onChange={(event) => updateGroupName(event.target.value)}
          />
        </div>
      </div>

      <div className="permissions-panel permissions-panel--matrix">
        <div className="permissions-panel__head">
          <h2>Quyền truy cập</h2>
          <p>
            Chọn trang và chức năng cho nhóm đang chọn.
          </p>
        </div>

        <div className="permissions-module-list">
          {permissionModules.map((module) => {
            const moduleState = activeGroup?.modules?.[module.id];
            const canAccessPage = Boolean(moduleState?.pageAccess);

            return (
              <article key={module.id} className="permissions-module-card">
                <div className="permissions-module-card__top">
                  <label className="permissions-check permissions-check--page">
                    <input
                      type="checkbox"
                      checked={canAccessPage}
                      onChange={() => togglePageAccess(module.id)}
                    />
                    <span>{module.pageLabel}</span>
                  </label>

                  <span
                    className={
                      canAccessPage
                        ? "permissions-access-badge permissions-access-badge--on"
                        : "permissions-access-badge permissions-access-badge--off"
                    }
                  >
                    {canAccessPage ? "Được truy cập" : "Không truy cập"}
                  </span>
                </div>

                <div className="permissions-feature-grid">
                  {module.features.map((feature) => (
                    <label
                      key={feature.id}
                      className={
                        canAccessPage
                          ? "permissions-check"
                          : "permissions-check permissions-check--disabled"
                      }
                    >
                      <input
                        type="checkbox"
                        checked={Boolean(moduleState?.features?.[feature.id])}
                        disabled={!canAccessPage}
                        onChange={() => toggleFeatureAccess(module.id, feature.id)}
                      />
                      <span>{feature.label}</span>
                    </label>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Permissions;
