import { useState } from "react";
import { cabroDesigns } from "../constants/designs";
import { DesignCard } from "../components/cards/DesignCard";
import { CalculatorModal } from "../components/modals/CalculatorModal";

export const DesignsPage: React.FC = () => {
  const [showCalculator, setShowCalculator] = useState(false);
  return (
    <div>
      {/* Hero Section */}
      <div
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

      {/* Designs Grid */}
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1rem" }}>
        <div
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

        {/* Design Tips */}
        <div
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
              <h4
                style={{
                  color: "var(--primary-blue)",
                  marginBottom: "0.75rem",
                }}
              >
                🏠 For Residential
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
              <h4
                style={{
                  color: "var(--primary-blue)",
                  marginBottom: "0.75rem",
                }}
              >
                🏢 For Commercial
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
              <h4
                style={{
                  color: "var(--primary-blue)",
                  marginBottom: "0.75rem",
                }}
              >
                ✨ For Feature Areas
              </h4>
              <p style={{ color: "var(--text-secondary)" }}>
                Circle Pattern and Flemish Bond create stunning focal points
                ideal for entryways.
              </p>
            </div>
          </div>
        </div>

        {/* Difficulty Guide */}
        <div
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
                  background: "#10B981",
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
                  background: "#F59E0B",
                  color: "white",
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
                  background: "#EF4444",
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

      {/* CALCULATOR SECTION */}
      <div
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
          💰 Calculate Design & Installation Costs
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
            e.currentTarget.style.background = "#EA580C";
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

      {/* CTA Section */}
      <div
        style={{
          background:
            "linear-gradient(135deg, var(--primary-blue), var(--primary-blue-light))",
          color: "white",
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
          Request Quote
        </button>
      </div>

      {/* Calculator Modal */}
      <CalculatorModal
        isOpen={showCalculator}
        onClose={() => setShowCalculator(false)}
      />
    </div>
  );
};
