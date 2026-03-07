import { Link } from "react-router-dom";
import { useState } from "react";
import {
  productCategories,
  cabroPavingBlocks,
  cobblestones,
  kerbStones,
  ProductType,
} from "../constants/products";
import { CalculatorModal } from "../components/modals/CalculatorModal";

export const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "cabro" | "cobblestone" | "kerbstone"
  >("all");
  const [showCalculator, setShowCalculator] = useState(false);

  const allProducts: ProductType[] = [
    ...cabroPavingBlocks,
    ...cobblestones,
    ...kerbStones,
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? allProducts
      : allProducts.filter((product) => product.category === selectedCategory);

  const getCategoryName = () => {
    if (selectedCategory === "all") return "All Products";
    const category = productCategories.find(
      (cat) => cat.categoryKey === selectedCategory,
    );
    return category?.name || "All Products";
  };

  return (
    <div className="products-page">
      <div
        className="products-hero"
        style={{
          position: "relative",
          color: "white",
          padding: "4rem 1rem",
          textAlign: "center",
          marginBottom: "3rem",
          minHeight: "300px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <video
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
          }}
          autoPlay
          muted
          loop
        >
          <source src="/Videos/Carbropavingblocks.mp4" type="video/mp4" />
        </video>

        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(0, 0, 0, 0.5)",
            zIndex: 2,
          }}
        />

        <div className="products-hero-content" style={{ position: "relative", zIndex: 3 }}>
          <h1
            style={{
              fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
              marginBottom: "1rem",
            }}
          >
            Our Products
          </h1>
          <p style={{ fontSize: "clamp(0.95rem, 3vw, 1.2rem)", opacity: 0.95 }}>
            High-quality paving solutions for all your construction needs
          </p>
        </div>
      </div>

      <div
        className="products-main"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 clamp(0.5rem, 2vw, 1rem)",
        }}
      >
        <div
          className="products-filter"
          style={{
            marginBottom: "3rem",
            padding: "clamp(1rem, 3vw, 2rem)",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              marginTop: 0,
              marginBottom: "1.5rem",
              color: "var(--primary-blue)",
              fontSize: "clamp(1rem, 3vw, 1.2rem)",
            }}
          >
            Filter by Category
          </h3>
          <div
            className="products-filter-buttons"
            style={{
              display: "flex",
              gap: "clamp(0.5rem, 2vw, 1rem)",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {[
              { label: `All Products (${allProducts.length})`, value: "all" },
              {
                label: `Cabro Blocks (${cabroPavingBlocks.length})`,
                value: "cabro",
              },
              {
                label: `Cobblestones (${cobblestones.length})`,
                value: "cobblestone",
              },
              {
                label: `Kerb Stones (${kerbStones.length})`,
                value: "kerbstone",
              },
            ].map((option) => (
              <button
                className="products-filter-button"
                key={option.value}
                onClick={() => setSelectedCategory(option.value as typeof selectedCategory)}
                style={{
                  padding: "0.75rem 1.5rem",
                  borderRadius: "var(--radius-md)",
                  border:
                    selectedCategory === option.value
                      ? "2px solid var(--accent-orange)"
                      : "2px solid var(--primary-blue)",
                  background:
                    selectedCategory === option.value
                      ? "var(--accent-orange)"
                      : "white",
                  color:
                    selectedCategory === option.value
                      ? "white"
                      : "var(--primary-blue)",
                  fontWeight: "600",
                  fontSize: "1rem",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  if (selectedCategory !== option.value) {
                    e.currentTarget.style.borderColor = "var(--accent-orange)";
                    e.currentTarget.style.boxShadow = "var(--shadow-md)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedCategory !== option.value) {
                    e.currentTarget.style.borderColor = "var(--primary-blue)";
                    e.currentTarget.style.boxShadow = "none";
                  }
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        <div
          className="products-results"
          style={{
            marginBottom: "2rem",
            padding: "1rem",
            background: "var(--primary-blue-lighter)",
            borderRadius: "var(--radius-md)",
            borderLeft: "4px solid var(--primary-blue)",
          }}
        >
          <p
            style={{
              margin: 0,
              color: "var(--primary-blue)",
              fontWeight: "600",
              fontSize: "1.05rem",
            }}
          >
            Showing {filteredProducts.length} product
            {filteredProducts.length !== 1 ? "s" : ""} in {getCategoryName()}
          </p>
        </div>

        <div
          className="products-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "2rem",
            marginBottom: "4rem",
          }}
        >
          {filteredProducts.map((product) => (
            <Link
              className="products-grid-link"
              key={product.id}
              to={`/product/${product.id}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <div
                className="products-card"
                style={{
                  background: "white",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-md)",
                  transition: "all 0.3s ease",
                  cursor: "pointer",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "var(--shadow-xl)";
                  e.currentTarget.style.transform = "translateY(-6px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "var(--shadow-md)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div
                  className="products-card-image-wrap"
                  style={{
                    position: "relative",
                    overflow: "hidden",
                    height: "220px",
                    background: "var(--bg-secondary)",
                  }}
                >
                  <img
                    className="products-card-image"
                    src={product.image}
                    alt={product.name}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transition: "transform 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.08)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                    }}
                  />
                  <div
                    className="products-card-badge"
                    style={{
                      position: "absolute",
                      top: "1rem",
                      right: "1rem",
                      background: "var(--accent-orange)",
                      color: "white",
                      padding: "0.5rem 1rem",
                      borderRadius: "var(--radius-md)",
                      fontSize: "0.8rem",
                      fontWeight: "600",
                    }}
                  >
                    {productCategories.find(
                      (cat) => cat.categoryKey === product.category,
                    )?.name || "Product"}
                  </div>
                </div>

                <div
                  className="products-card-content"
                  style={{
                    padding: "1.5rem",
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                  }}
                >
                  <h3
                    className="products-card-title"
                    style={{
                      color: "var(--primary-blue)",
                      margin: "0 0 0.75rem 0",
                      fontSize: "1.3rem",
                      fontWeight: "bold",
                    }}
                  >
                    {product.name}
                  </h3>

                  <p
                    className="products-card-description"
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "0.95rem",
                      margin: "0 0 1rem 0",
                      flex: 1,
                      lineHeight: "1.5",
                    }}
                  >
                    {product.description}
                  </p>

                  <div
                    className="products-card-features"
                    style={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "0.5rem",
                      marginBottom: "1rem",
                    }}
                  >
                    {product.features.slice(0, 2).map((feature, idx) => (
                      <span
                        className="products-card-feature"
                        key={idx}
                        style={{
                          background: "var(--primary-blue-lighter)",
                          color: "var(--primary-blue)",
                          padding: "0.3rem 0.7rem",
                          borderRadius: "var(--radius-sm)",
                          fontSize: "0.75rem",
                          fontWeight: "600",
                        }}
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <button
                    className="products-card-cta"
                    style={{
                      background: "var(--primary-blue)",
                      color: "white",
                      border: "none",
                      padding: "0.75rem 1rem",
                      borderRadius: "var(--radius-md)",
                      fontWeight: "600",
                      cursor: "pointer",
                      transition: "background 0.3s ease",
                      width: "100%",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "var(--primary-blue-light)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "var(--primary-blue)";
                    }}
                  >
                    View Details {"->"}
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div
            className="products-empty"
            style={{
              textAlign: "center",
              padding: "3rem 1rem",
              color: "var(--text-secondary)",
            }}
          >
            <p style={{ fontSize: "1.2rem", marginBottom: "1rem" }}>
              No products found
            </p>
            <button
              onClick={() => setSelectedCategory("all")}
              style={{
                background: "var(--primary-blue)",
                color: "white",
                border: "none",
                padding: "0.75rem 1.5rem",
                borderRadius: "var(--radius-md)",
                fontWeight: "600",
                cursor: "pointer",
              }}
            >
              View All Products
            </button>
          </div>
        )}
      </div>

      <div
        className="products-resources"
        style={{
          padding: "4rem 1rem",
          maxWidth: "1200px",
          margin: "0 auto",
          marginBottom: "4rem",
        }}
      >
        <div style={{ marginBottom: "3rem", textAlign: "center" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              marginBottom: "1rem",
              fontWeight: "bold",
              color: "var(--color-brand-strong)",
            }}
          >
            Product Resources & Downloads
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--color-text-muted)",
              lineHeight: "1.6",
            }}
          >
            Download guides and technical documentation for our products
          </p>
        </div>

        <div
          className="products-resources-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {[
            {
              title: "Product Installation Guide",
              description:
                "Complete guide for proper installation of cabro paving blocks",
              icon: "Guide",
              category: "Installation",
            },
            {
              title: "Technical Specifications",
              description:
                "Detailed specs for all products including dimensions and materials",
              icon: "Specs",
              category: "Technical",
            },
            {
              title: "Cost Estimation Tool",
              description:
                "Calculate project costs based on area and product type",
              icon: "Cost",
              category: "Pricing",
            },
          ].map((resource, idx) => (
            <div
              className="products-resource-card"
              key={idx}
              style={{
                background: "white",
                border: "2px solid var(--color-border)",
                borderRadius: "0.75rem",
                padding: "2rem",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.1)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.borderColor = "var(--primary-blue)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "var(--color-border)";
              }}
            >
              <div className="products-resource-icon" style={{ fontSize: "1rem", marginBottom: "1rem", fontWeight: 700 }}>
                {resource.icon}
              </div>
              <div
                style={{
                  fontSize: "0.85rem",
                  fontWeight: "bold",
                  color: "var(--accent-orange)",
                  marginBottom: "0.5rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                {resource.category}
              </div>
              <h3
                style={{
                  fontSize: "1.3rem",
                  fontWeight: "bold",
                  color: "var(--color-brand-strong)",
                  marginBottom: "0.75rem",
                  marginTop: "0.5rem",
                }}
              >
                {resource.title}
              </h3>
              <p
                style={{
                  color: "var(--color-text-muted)",
                  fontSize: "0.95rem",
                  lineHeight: "1.6",
                  marginBottom: "1.5rem",
                }}
              >
                {resource.description}
              </p>
              <Link
                className="products-resource-link"
                to="/contact"
                style={{
                  background: "var(--primary-blue)",
                  color: "white",
                  border: "none",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "0.375rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  textDecoration: "none",
                  display: "inline-block",
                  width: "100%",
                  textAlign: "center",
                }}
                onMouseEnter={(e) => {
                  const link = e.currentTarget as HTMLAnchorElement;
                  link.style.background = "var(--accent-orange)";
                  link.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  const link = e.currentTarget as HTMLAnchorElement;
                  link.style.background = "var(--primary-blue)";
                  link.style.transform = "translateX(0)";
                }}
              >
                Download {"->"}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <div
        className="products-calculator"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "4rem 1rem",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "1.5rem",
            color: "var(--primary-blue)",
            fontWeight: "bold",
          }}
        >
          Calculate Your Project Cost
        </h2>
        <p
          style={{
            fontSize: "1.1rem",
            color: "var(--text-secondary)",
            marginBottom: "2rem",
            maxWidth: "600px",
            margin: "0 auto 2rem",
          }}
        >
          Use our calculator to estimate material costs, installation fees, and
          delivery charges for your specific project.
        </p>
        <button
          onClick={() => setShowCalculator(true)}
          style={{
            padding: "1rem 3rem",
            fontSize: "1rem",
            fontWeight: "bold",
            background: "var(--accent-orange)",
            color: "white",
            border: "none",
            borderRadius: "var(--radius-lg)",
            cursor: "pointer",
            transition: "all 0.3s ease",
            boxShadow: "var(--shadow-lg)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--color-action-primary-hover)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "var(--accent-orange)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Open Calculator
        </button>
      </div>

      <div
        className="products-cta"
        style={{
          background: "var(--pre-footer-bg)",
          color: "var(--text-primary)",
          padding: "4rem 1rem",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "1rem" }}>
          Ready to Build Your Foundation?
        </h2>
        <p
          style={{
            maxWidth: "600px",
            margin: "0 auto 2rem",
            fontSize: "1.1rem",
            opacity: 0.95,
          }}
        >
          Contact us today for a custom quote on your paving project. Our
          experts are ready to help.
        </p>
        <Link to="/contact">
          <button
            style={{
              background: "var(--accent-orange)",
              color: "white",
              border: "none",
              padding: "1rem 2rem",
              fontSize: "1.1rem",
              fontWeight: "600",
              borderRadius: "var(--radius-md)",
              cursor: "pointer",
              transition: "background var(--transition-base)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--accent-dark)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--accent-orange)";
            }}
          >
            Get Your Quote Now
          </button>
        </Link>
      </div>

      <CalculatorModal
        isOpen={showCalculator}
        onClose={() => setShowCalculator(false)}
      />

      <style>{`
        .products-page {
          overflow-x: hidden;
        }

        .products-main,
        .products-resources,
        .products-calculator {
          width: 100%;
          box-sizing: border-box;
        }

        .products-filter-button {
          white-space: nowrap;
        }

        .products-results p {
          overflow-wrap: anywhere;
        }

        .products-grid-link {
          min-width: 0;
        }

        .products-card-title,
        .products-card-description {
          word-break: break-word;
        }

        .products-card-cta,
        .products-resource-link {
          min-height: 44px;
        }

        @media (max-width: 1024px) {
          .products-hero {
            min-height: 260px !important;
            padding: 3rem 1rem !important;
          }

          .products-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 1.25rem !important;
          }

          .products-resources-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 1.25rem !important;
          }
        }

        @media (max-width: 768px) {
          .products-hero {
            min-height: 220px !important;
            padding: 2.25rem 0.75rem !important;
          }

          .products-hero-content h1 {
            margin-bottom: 0.75rem !important;
          }

          .products-main {
            padding: 0 0.75rem !important;
          }

          .products-filter {
            margin-bottom: 2rem !important;
            padding: 1rem 0.25rem !important;
          }

          .products-filter-buttons {
            gap: 0.5rem !important;
          }

          .products-filter-button {
            font-size: 0.88rem !important;
            padding: 0.6rem 0.9rem !important;
            border-width: 1px !important;
          }

          .products-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
            margin-bottom: 2.5rem !important;
          }

          .products-card-image-wrap {
            height: 190px !important;
          }

          .products-card-content {
            padding: 1rem !important;
          }

          .products-card-title {
            font-size: 1.1rem !important;
          }

          .products-card-feature {
            font-size: 0.72rem !important;
            padding: 0.24rem 0.5rem !important;
          }

          .products-resources {
            padding: 2.5rem 0.75rem !important;
            margin-bottom: 2rem !important;
          }

          .products-resources h2 {
            font-size: 1.6rem !important;
          }

          .products-resources-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }

          .products-resource-card {
            padding: 1.25rem !important;
          }

          .products-calculator {
            padding: 2.5rem 0.75rem !important;
          }

          .products-calculator h2 {
            font-size: 1.6rem !important;
            margin-bottom: 1rem !important;
          }

          .products-calculator p {
            font-size: 0.98rem !important;
          }

          .products-calculator button {
            width: 100%;
            max-width: 320px;
            padding: 0.95rem 1.2rem !important;
          }

          .products-cta {
            padding: 2.5rem 0.75rem !important;
          }

          .products-cta h2 {
            font-size: 1.45rem !important;
            margin-bottom: 0.75rem !important;
          }

          .products-cta p {
            font-size: 0.98rem !important;
          }

          .products-cta button {
            width: 100%;
            max-width: 320px;
            padding: 0.9rem 1rem !important;
            font-size: 1rem !important;
          }
        }

        @media (max-width: 480px) {
          .products-main {
            padding: 0 0.5rem !important;
          }

          .products-filter-button {
            width: 100%;
            max-width: 320px;
          }

          .products-card-image-wrap {
            height: 170px !important;
          }

          .products-card-badge {
            top: 0.6rem !important;
            right: 0.6rem !important;
            padding: 0.32rem 0.6rem !important;
            font-size: 0.7rem !important;
          }

          .products-results {
            padding: 0.75rem !important;
          }

          .products-results p {
            font-size: 0.92rem !important;
          }

          .products-calculator button,
          .products-cta button {
            max-width: none;
          }
        }
      `}</style>
    </div>
  );
};


