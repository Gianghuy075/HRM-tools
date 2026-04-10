import { auditLogs } from "../data/sampleData";

const AuditLogs = () => {
  return (
    <section className="audit">
      <h1>Nhật ký kiểm toán hệ thống</h1>
      <div className="audit__list">
        {auditLogs.map((log) => (
          <div key={log.detail} className="audit__item">
            <div className="audit__action">{log.action}</div>
            <div className="audit__detail">{log.detail}</div>
            <div className="audit__time">{log.time}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AuditLogs;
