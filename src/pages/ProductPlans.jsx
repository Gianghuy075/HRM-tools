import { productPlans } from "../data/sampleData";

const ProductPlans = () => {
  return (
    <section className="plans">
      <div className="plans__grid">
        {productPlans.map((plan) => (
          <article
            key={plan.id}
            className={
              plan.highlight ? "plans__card plans__card--highlight" : "plans__card"
            }
          >
            <div className="plans__header">
              <span className="plans__badge">{plan.badge}</span>
              <h2>{plan.name}</h2>
              <p>{plan.summary}</p>
            </div>

            <div className="plans__price">
              <strong>{plan.price}</strong>
              <span>{plan.cycle}</span>
            </div>

            <ul className="plans__features">
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>

            <button type="button" className="plans__button">
              {plan.ctaLabel}
            </button>
          </article>
        ))}
      </div>
    </section>
  );
};

export default ProductPlans;
