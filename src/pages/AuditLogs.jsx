import { auditLogs } from "../data/sampleData";

const AuditLogs = () => {
  return (
    <section className="audit">
      <div className="audit__list">
        {auditLogs.map((log) => (
          <article key={log.id} className={`audit__item audit__item--${log.actionType}`}>
            <div className="audit__head">
              <span className={`audit__tag audit__tag--${log.actionType}`}>
                {log.actionLabel}
              </span>
              <span className="audit__time">{log.time}</span>
            </div>

            <div className="audit__grid">
              <div className="audit__cell">
                <span className="audit__label">Người sử dụng chức năng</span>
                <strong className="audit__value">{log.actor}</strong>
              </div>
              <div className="audit__cell">
                <span className="audit__label">Áp dụng lên người</span>
                <strong className="audit__value">{log.target}</strong>
              </div>
              <div className="audit__cell">
                <span className="audit__label">Chức năng</span>
                <strong className="audit__value">{log.feature}</strong>
              </div>
              <div className="audit__cell">
                <span className="audit__label">Thời gian</span>
                <strong className="audit__value">{log.time}</strong>
              </div>
            </div>

            <p className="audit__note">{log.note}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default AuditLogs;
