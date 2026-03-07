import { useState } from "react";
import { Link } from "react-router-dom";
import { services } from "../constants/services";
import { ServiceCard } from "../components/cards/ServiceCard";
import { CalculatorModal } from "../components/modals/CalculatorModal";

export const ServicesPage: React.FC = () => {
  const [showCalculator, setShowCalculator] = useState(false);

  return (
    <div className="services-page">
      <div
        className="services-hero"
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
          Our Services
        </h1>
        <p style={{ fontSize: "1.2rem", opacity: 0.95 }}>
          Professional paving and installation services for all your needs
        </p>
      </div>

      <div className="services-main" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
        <div
          className="services-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
            marginBottom: "4rem",
          }}
        >
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        <div
          className="services-why"
          style={{
            background: "var(--bg-secondary)",
            padding: "3rem 2rem",
            borderRadius: "var(--radius-lg)",
            marginBottom: "3rem",
          }}
        >
          <h2 style={{ marginBottom: "2rem", textAlign: "center" }}>
            Why Choose Our Services?
          </h2>
          <div
            className="services-why-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "2rem",
            }}
          >
            <div>
              <h4 style={{ color: "var(--accent-orange)", marginBottom: "0.5rem" }}>
                Professional Team
              </h4>
              <p style={{ color: "var(--text-secondary)" }}>
                Experienced professionals with years of expertise
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--accent-orange)", marginBottom: "0.5rem" }}>
                Quality Materials
              </h4>
              <p style={{ color: "var(--text-secondary)" }}>
                Premium cabro and stone materials
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--accent-orange)", marginBottom: "0.5rem" }}>
                On-Time Delivery
              </h4>
              <p style={{ color: "var(--text-secondary)" }}>
                Projects completed on schedule
              </p>
            </div>
            <div>
              <h4 style={{ color: "var(--accent-orange)", marginBottom: "0.5rem" }}>
                Warranty Coverage
              </h4>
              <p style={{ color: "var(--text-secondary)" }}>
                10+ year durability guarantee
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="services-resources"
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
            Service Resources & Guides
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--color-text-muted)",
              lineHeight: "1.6",
            }}
          >
            Download maintenance guides and installation checklists
          </p>
        </div>

        <div
          className="services-resources-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {[
            {
              title: "Maintenance Manual",
              description:
                "Best practices for maintaining your concrete paving for longevity",
              icon: "Guide",
              category: "Maintenance",
            },
            {
              title: "Installation Checklist",
              description:
                "Step-by-step checklist to ensure quality installation",
              icon: "Checklist",
              category: "Installation",
            },
          ].map((resource, idx) => (
            <div
              className="services-resource-card"
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
                className="services-resource-link"
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
        className="services-calculator"
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
          Estimate Your Service Costs
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
          Get an instant estimate for your paving and installation project.
          Calculate material, labor, and delivery costs.
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
        className="services-cta"
        style={{
          background: "var(--pre-footer-bg)",
          color: "var(--text-primary)",
          padding: "4rem 1rem",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "1rem" }}>
          Ready for Professional Concrete Solutions?
        </h2>
        <p
          style={{
            maxWidth: "600px",
            margin: "0 auto 2rem",
            fontSize: "1.1rem",
            opacity: 0.95,
          }}
        >
          Contact us today for a free consultation and quote on your project.
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
          Get Free Consultation
        </Link>
      </div>

      <CalculatorModal
        isOpen={showCalculator}
        onClose={() => setShowCalculator(false)}
      />

      <style>{`
        .services-page {
          overflow-x: hidden;
        }

        .services-main,
        .services-resources,
        .services-calculator {
          width: 100%;
          box-sizing: border-box;
        }

        .services-grid,
        .services-resources-grid,
        .services-why-grid {
          min-width: 0;
        }

        .services-resource-link {
          min-height: 44px;
        }

        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 1.25rem !important;
          }

          .services-resources-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 1.25rem !important;
          }
        }

        @media (max-width: 768px) {
          .services-hero {
            padding: 2.5rem 0.75rem !important;
            margin-bottom: 2rem !important;
          }

          .services-hero h1 {
            font-size: 1.75rem !important;
          }

          .services-hero p {
            font-size: 1rem !important;
          }

          .services-main {
            padding: 0 0.75rem !important;
          }

          .services-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
            margin-bottom: 2.5rem !important;
          }

          .services-why {
            padding: 1.25rem 1rem !important;
          }

          .services-why h2 {
            font-size: 1.4rem !important;
            margin-bottom: 1.2rem !important;
          }

          .services-why-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }

          .services-resources {
            padding: 2.5rem 0.75rem !important;
            margin-bottom: 2rem !important;
          }

          .services-resources h2 {
            font-size: 1.6rem !important;
          }

          .services-resources-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }

          .services-resource-card {
            padding: 1.25rem !important;
          }

          .services-calculator {
            padding: 2.5rem 0.75rem !important;
          }

          .services-calculator h2 {
            font-size: 1.6rem !important;
          }

          .services-calculator p {
            font-size: 0.98rem !important;
          }

          .services-calculator button,
          .services-cta a {
            width: 100%;
            max-width: 320px;
            box-sizing: border-box;
          }

          .services-cta {
            padding: 2.5rem 0.75rem !important;
          }

          .services-cta h2 {
            font-size: 1.45rem !important;
          }

          .services-cta p {
            font-size: 0.98rem !important;
          }
        }

        @media (max-width: 480px) {
          .services-main {
            padding: 0 0.5rem !important;
          }

          .services-resources,
          .services-calculator {
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
          }
        }
      `}</style>
    </div>
  );
};


