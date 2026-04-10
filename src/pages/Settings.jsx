import { securitySettings } from "../data/sampleData";

const Settings = () => {
  return (
    <section className="settings">
      <h1>Cài đặt SSO và bảo mật</h1>
      <div className="settings__grid">
        {securitySettings.map((setting) => (
          <div key={setting.title} className="settings__card">
            <h3>{setting.title}</h3>
            <p>{setting.value}</p>
            <button type="button">{setting.actionLabel}</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Settings;
