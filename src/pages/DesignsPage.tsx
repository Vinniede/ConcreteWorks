import { useState } from "react";
import { Link } from "react-router-dom";
import { cabroDesigns } from "../constants/designs";
import { DesignCard } from "../components/cards/DesignCard";
import { CalculatorModal } from "../components/modals/CalculatorModal";

export const DesignsPage: React.FC = () => {
  const [showCalculator, setShowCalculator] = useState(false);

  return (
    <div className="designs-page">
      <div
        className="designs-hero"
        style={{
          background:
            "linear-gradient(135deg, var(--primary-blue), var(--primary-blue-light))",
          color: "white",
          padding: "4rem 1rem",
          textAlign: "center",
          marginBottom: "3rem",
        }}
      >
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>
          Cabro Design Patterns
        </h1>
        <p style={{ fontSize: "1.2rem", opacity: 0.95 }}>
          Explore beautiful patterns and layouts for your paving project
        </p>
      </div>

      <div className="designs-main" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
        <div
          className="designs-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "2rem",
            marginBottom: "4rem",
          }}
        >
          {cabroDesigns.map((design) => (
            <DesignCard key={design.id} design={design} />
          ))}
        </div>

        <div
          className="designs-tips"
          style={{
            background: "var(--bg-secondary)",
            padding: "3rem 2rem",
            borderRadius: "var(--radius-lg)",
            marginBottom: "3rem",
          }}
        >
          <h2 style={{ marginBottom: "2rem", textAlign: "center" }}>
            Choosing the Right Design
          </h2>
          <div
            className="designs-tips-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
            }}
          >
            <div
              style={{
                padding: "1.5rem",
                background: "white",
                borderRadius: "var(--radius-md)",
              }}
            >
              <h4 style={{ color: "var(--primary-blue)", marginBottom: "0.75rem" }}>
                For Residential
              </h4>
              <p style={{ color: "var(--text-secondary)" }}>
                Herringbone and Running Bond designs are popular for their
                aesthetic appeal and durability.
              </p>
            </div>
            <div
              style={{
                padding: "1.5rem",
                background: "white",
                borderRadius: "var(--radius-md)",
              }}
            >
              <h4 style={{ color: "var(--primary-blue)", marginBottom: "0.75rem" }}>
                For Commercial
              </h4>
              <p style={{ color: "var(--text-secondary)" }}>
                Running Bond offers a professional, clean look while being easy
                to maintain at scale.
              </p>
            </div>
            <div
              style={{
                padding: "1.5rem",
                background: "white",
                borderRadius: "var(--radius-md)",
              }}
            >
              <h4 style={{ color: "var(--primary-blue)", marginBottom: "0.75rem" }}>
                For Feature Areas
              </h4>
              <p style={{ color: "var(--text-secondary)" }}>
                Circle Pattern and Flemish Bond create stunning focal points
                ideal for entryways.
              </p>
            </div>
          </div>
        </div>

        <div
          className="designs-difficulty"
          style={{
            background: "white",
            border: "2px solid var(--gray-border)",
            padding: "2rem",
            borderRadius: "var(--radius-lg)",
            marginBottom: "3rem",
          }}
        >
          <h3 style={{ marginBottom: "1.5rem", color: "var(--primary-blue)" }}>
            Installation Difficulty
          </h3>
          <div
            className="designs-difficulty-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
              gap: "1.5rem",
            }}
          >
            <div>
              <div
                style={{
                  display: "inline-block",
                  background: "var(--color-brand-base)",
                  color: "white",
                  padding: "0.5rem 1rem",
                  borderRadius: "var(--radius-md)",
                  marginBottom: "0.5rem",
                  fontWeight: "bold",
                }}
              >
                Easy
              </div>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                Quick installation, perfect for DIY projects
              </p>
            </div>
            <div>
              <div
                style={{
                  display: "inline-block",
                  background: "var(--color-highlight)",
                  color: "var(--text-primary)",
                  padding: "0.5rem 1rem",
                  borderRadius: "var(--radius-md)",
                  marginBottom: "0.5rem",
                  fontWeight: "bold",
                }}
              >
                Medium
              </div>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                Requires skill, recommended professional installation
              </p>
            </div>
            <div>
              <div
                style={{
                  display: "inline-block",
                  background: "var(--color-danger)",
                  color: "white",
                  padding: "0.5rem 1rem",
                  borderRadius: "var(--radius-md)",
                  marginBottom: "0.5rem",
                  fontWeight: "bold",
                }}
              >
                Hard
              </div>
              <p style={{ color: "var(--text-secondary)", fontSize: "0.9rem" }}>
                Complex installation, professional required
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="designs-resources"
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
            Design Resources
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--color-text-muted)",
              lineHeight: "1.6",
            }}
          >
            Download our complete design catalog and inspiration guides
          </p>
        </div>

        <div
          className="designs-resources-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {[
            {
              title: "Design Catalog",
              description:
                "Browse all available paver designs and patterns available",
              icon: "Catalog",
              category: "Design",
            },
          ].map((resource, idx) => (
            <div
              className="designs-resource-card"
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
                e.currentTarget.style.boxShadow =
                  "0 10px 25px rgba(0, 0, 0, 0.1)";
                e.currentTarget.style.transform = "translateY(-4px)";
                e.currentTarget.style.borderColor = "var(--primary-blue)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.borderColor = "var(--color-border)";
              }}
            >
              <div style={{ fontSize: "1rem", marginBottom: "1rem", fontWeight: 700 }}>
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
                className="designs-resource-link"
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
        className="designs-calculator"
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
          Calculate Design and Installation Costs
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
          Select your preferred design pattern and get an instant cost estimate
          for materials and installation.
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
        className="designs-cta"
        style={{
          background: "var(--pre-footer-bg)",
          color: "var(--text-primary)",
          padding: "4rem 1rem",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "1rem" }}>
          Found Your Perfect Concrete Design?
        </h2>
        <p
          style={{
            maxWidth: "600px",
            margin: "0 auto 2rem",
            fontSize: "1.1rem",
            opacity: 0.95,
          }}
        >
          Contact Gitau Concrete Works to discuss your design preference and get
          a professional installation quote.
        </p>
        <Link
          to="/contact"
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
            textDecoration: "none",
            display: "inline-block",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--accent-dark)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "var(--accent-orange)";
          }}
        >
          Request Quote
        </Link>
      </div>

      <CalculatorModal
        isOpen={showCalculator}
        onClose={() => setShowCalculator(false)}
      />

      <style>{`
        .designs-page {
          overflow-x: hidden;
        }

        .designs-main,
        .designs-resources,
        .designs-calculator {
          width: 100%;
          box-sizing: border-box;
        }

        .designs-grid,
        .designs-tips-grid,
        .designs-difficulty-grid,
        .designs-resources-grid {
          min-width: 0;
        }

        .designs-resource-link {
          min-height: 44px;
        }

        @media (max-width: 1024px) {
          .designs-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 1.25rem !important;
          }

          .designs-resources-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 1.25rem !important;
          }
        }

        @media (max-width: 768px) {
          .designs-hero {
            padding: 2.5rem 0.75rem !important;
            margin-bottom: 2rem !important;
          }

          .designs-hero h1 {
            font-size: 1.75rem !important;
          }

          .designs-hero p {
            font-size: 1rem !important;
          }

          .designs-main {
            padding: 0 0.75rem !important;
          }

          .designs-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
            margin-bottom: 2.5rem !important;
          }

          .designs-tips {
            padding: 1.25rem 1rem !important;
          }

          .designs-tips h2 {
            font-size: 1.4rem !important;
            margin-bottom: 1.25rem !important;
          }

          .designs-tips-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }

          .designs-difficulty {
            padding: 1.25rem 1rem !important;
          }

          .designs-difficulty h3 {
            font-size: 1.25rem !important;
          }

          .designs-difficulty-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }

          .designs-resources {
            padding: 2.5rem 0.75rem !important;
            margin-bottom: 2rem !important;
          }

          .designs-resources h2 {
            font-size: 1.6rem !important;
          }

          .designs-resources-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }

          .designs-resource-card {
            padding: 1.25rem !important;
          }

          .designs-calculator {
            padding: 2.5rem 0.75rem !important;
          }

          .designs-calculator h2 {
            font-size: 1.6rem !important;
          }

          .designs-calculator p,
          .designs-cta p {
            font-size: 0.98rem !important;
          }

          .designs-calculator button,
          .designs-cta a {
            width: 100%;
            max-width: 320px;
            box-sizing: border-box;
          }

          .designs-cta {
            padding: 2.5rem 0.75rem !important;
          }

          .designs-cta h2 {
            font-size: 1.45rem !important;
          }
        }

        @media (max-width: 480px) {
          .designs-main,
          .designs-resources,
          .designs-calculator {
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
          }
        }
      `}</style>
    </div>
  );
};


