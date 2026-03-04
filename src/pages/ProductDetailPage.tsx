import { useParams, Link } from "react-router-dom";
import { getProductById } from "../constants/products";

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : undefined;

  if (!product) {
    return (
      <div className="product-detail-container">
        <div style={{ textAlign: "center", padding: "3rem 0" }}>
          <h1>Product Not Found</h1>
          <p>The product you're looking for doesn't exist.</p>
          <Link to="/products">← Back to Products</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="product-detail-container">
      <Link
        to="/products"
        style={{
          color: "var(--accent-orange)",
          marginBottom: "2rem",
          display: "inline-block",
        }}
      >
        ← Back to Products
      </Link>

      <div className="product-detail-grid">
        <div className="product-detail-image">
          <img src={product.image} alt={product.name} />
        </div>

        <div className="product-detail-info">
          <h1>{product.name}</h1>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--text-secondary)",
              marginBottom: "2rem",
            }}
          >
            {product.description}
          </p>

          <div className="product-detail-specs">
            {product.thickness && (
              <div className="spec-item">
                <div className="spec-label">Available Thickness</div>
                <div className="spec-value">{product.thickness.join(", ")}</div>
              </div>
            )}

            <div className="spec-item">
              <div className="spec-label">Best Used For</div>
              <div className="spec-value">
                <ul className="features-list" style={{ marginBottom: 0 }}>
                  {product.useCases.map((useCase, idx) => (
                    <li
                      key={idx}
                      style={{
                        borderBottom:
                          idx === product.useCases.length - 1
                            ? "none"
                            : "1px solid var(--gray-border)",
                      }}
                    >
                      {useCase}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "2rem" }}>
            <h3 style={{ marginBottom: "1rem" }}>Product Features</h3>
            <ul className="features-list">
              {product.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>

          <button className="cta-button">Request Quote</button>
        </div>
      </div>
    </div>
  );
};
