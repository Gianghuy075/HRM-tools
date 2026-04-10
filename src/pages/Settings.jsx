const Settings = () => {
  return (
    <section className="settings">
      <h1>SSO and Security Settings</h1>
      <div className="settings__grid">
        <div className="settings__card">
          <h3>SSO Provider</h3>
          <p>Okta Enterprise (Configured)</p>
          <button type="button">Update provider</button>
        </div>
        <div className="settings__card">
          <h3>Domain allowlist</h3>
          <p>company.com, corp.company.com</p>
          <button type="button">Edit domains</button>
        </div>
        <div className="settings__card">
          <h3>Security posture</h3>
          <p>MFA required for all admins</p>
          <button type="button">Adjust policies</button>
        </div>
      </div>
    </section>
  );
};

export default Settings;
