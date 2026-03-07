import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProductById } from "../constants/products";

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = id ? getProductById(id) : undefined;
  const gallery = useMemo(() => product?.gallery ?? [], [product]);
  const colors = useMemo(() => product?.colorOptions ?? [], [product]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColorId, setSelectedColorId] = useState<string | null>(null);

  useEffect(() => {
    setSelectedImage(0);
    setSelectedColorId(colors[0]?.id ?? null);
  }, [id, colors]);

  if (!product) {
    return (
      <div className="product-detail-container">
        <div style={{ textAlign: "center", padding: "3rem 0" }}>
          <h1>Product Not Found</h1>
          <p>The product you are looking for does not exist.</p>
          <Link to="/products">Back to Products</Link>
        </div>
      </div>
    );
  }

  const selectedColor = colors.find((color) => color.id === selectedColorId);
  const primaryImage = gallery[selectedImage] ?? product.image;

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
        Back to Products
      </Link>

      <div className="product-detail-grid">
        <div className="product-detail-image">
          <img src={primaryImage} alt={product.name} />
          {gallery.length > 1 && (
            <div className="product-gallery-thumbs">
              {gallery.map((image, idx) => (
                <button
                  key={`${product.id}-thumb-${idx}`}
                  type="button"
                  className={`product-thumb-btn ${selectedImage === idx ? "active" : ""}`}
                  onClick={() => setSelectedImage(idx)}
                  aria-label={`View image ${idx + 1} of ${product.name}`}
                >
                  <img src={image} alt={`${product.name} view ${idx + 1}`} />
                </button>
              ))}
            </div>
          )}
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

          {colors.length > 0 && (
            <div className="product-color-section">
              <h3 style={{ marginBottom: "0.75rem" }}>Available Colors</h3>
              <div className="product-color-swatches">
                {colors.map((color) => (
                  <button
                    key={color.id}
                    type="button"
                    className={`product-color-swatch ${selectedColorId === color.id ? "active" : ""}`}
                    onClick={() => setSelectedColorId(color.id)}
                    aria-label={`${color.name} (${color.hex})`}
                    title={`${color.name} - ${color.useCase}`}
                  >
                    <span
                      className="swatch-dot"
                      style={{
                        background:
                          color.type === "blend"
                            ? "linear-gradient(135deg, #B91C1C 0%, #6B7280 50%, #CA8A04 100%)"
                            : color.hex,
                      }}
                    />
                    <span className="swatch-label">{color.name}</span>
                  </button>
                ))}
              </div>
              {selectedColor && (
                <p className="selected-color-use-case">
                  Best use: {selectedColor.useCase}
                </p>
              )}
            </div>
          )}

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

          <Link to="/contact" className="cta-button" style={{ textDecoration: "none" }}>
            Request Quote
          </Link>
        </div>
      </div>
    </div>
  );
};
