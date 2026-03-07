import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "../constants/projects";
import { ProjectCard } from "../components/cards/ProjectCard";
import { CalculatorModal } from "../components/modals/CalculatorModal";

export const ProjectsGalleryPage: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");
  const [showCalculator, setShowCalculator] = useState(false);
  const navigate = useNavigate();

  const filteredProjects =
    filter === "all" ? projects : projects.filter((p) => p.type === filter);

  return (
    <div className="projects-page">
      <div
        className="projects-hero"
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
          Our Projects
        </h1>
        <p style={{ fontSize: "1.2rem", opacity: 0.95 }}>
          Showcasing beautiful paving installations across Kenya
        </p>
      </div>

      <div
        className="projects-main"
        style={{
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0.5rem 1rem",
        }}
      >
        <div
          className="projects-filter"
          style={{
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            marginBottom: "2rem",
            flexWrap: "wrap",
          }}
        >
          {["all", "residential", "commercial", "municipal"].map((type) => (
            <button
              className="projects-filter-btn"
              key={type}
              onClick={() => setFilter(type)}
              style={{
                padding: "0.75rem 1.5rem",
                background:
                  filter === type
                    ? "var(--accent-orange)"
                    : "var(--bg-secondary)",
                color: filter === type ? "white" : "var(--text-primary)",
                border:
                  "2px solid " +
                  (filter === type
                    ? "var(--accent-orange)"
                    : "var(--gray-border)"),
                borderRadius: "var(--radius-md)",
                fontWeight: "600",
                cursor: "pointer",
                transition: "all var(--transition-base)",
              }}
              onMouseEnter={(e) => {
                if (filter !== type) {
                  e.currentTarget.style.background = "var(--gray-light)";
                }
              }}
              onMouseLeave={(e) => {
                if (filter !== type) {
                  e.currentTarget.style.background = "var(--bg-secondary)";
                }
              }}
            >
              {type.charAt(0).toUpperCase() +
                type.slice(1).replace(/([A-Z])/g, " $1")}
            </button>
          ))}
        </div>

        <div
          className="projects-grid"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            marginBottom: "4rem",
            justifyContent: "center",
            width: "100%",
          }}
        >
          {filteredProjects.map((project) => (
            <div
              className="projects-grid-item"
              key={project.id}
              style={{
                flex: "0 1 350px",
                minWidth: "280px",
                maxWidth: "450px",
              }}
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </div>

        <div
          className="projects-stats"
          style={{
            background: "var(--bg-secondary)",
            padding: "clamp(1.5rem, 3vw, 3rem) clamp(1rem, 2vw, 2rem)",
            borderRadius: "var(--radius-lg)",
            marginBottom: "3rem",
            textAlign: "center",
          }}
        >
          <h2 style={{ marginBottom: "2rem" }}>Our Project Portfolio</h2>
          <div
            className="projects-stats-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
              gap: "clamp(1rem, 2vw, 2rem)",
            }}
          >
            <div>
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "var(--primary-blue)",
                  marginBottom: "0.5rem",
                }}
              >
                {projects.length}+
              </div>
              <div style={{ color: "var(--text-secondary)" }}>
                Projects Completed
              </div>
            </div>
            <div>
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "var(--primary-blue)",
                  marginBottom: "0.5rem",
                }}
              >
                {projects.filter((p) => p.type === "residential").length}+
              </div>
              <div style={{ color: "var(--text-secondary)" }}>
                Residential Projects
              </div>
            </div>
            <div>
              <div
                style={{
                  fontSize: "2rem",
                  fontWeight: "bold",
                  color: "var(--primary-blue)",
                  marginBottom: "0.5rem",
                }}
              >
                10+
              </div>
              <div style={{ color: "var(--text-secondary)" }}>
                Years of Experience
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="projects-calculator"
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
          Plan Your Project Budget
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
          Use our cost calculator to estimate your project budget. Get instant
          quotes for materials, labor, and delivery.
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
        className="projects-cta"
        style={{
          background: "var(--pre-footer-bg)",
          color: "var(--text-primary)",
          padding: "4rem 1rem",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginBottom: "1rem" }}>Ready to Start Your Project?</h2>
        <p
          style={{
            maxWidth: "600px",
            margin: "0 auto 2rem",
            fontSize: "1.1rem",
            opacity: 0.95,
          }}
        >
          Let Gitau Concrete Works bring your vision to life. Contact us for a
          consultation and project quote.
        </p>
        <button
          onClick={() => navigate("/contact")}
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
          Get Your Quote Today
        </button>
      </div>

      <CalculatorModal
        isOpen={showCalculator}
        onClose={() => setShowCalculator(false)}
      />

      <style>{`
        .projects-page {
          overflow-x: hidden;
        }

        .projects-main,
        .projects-calculator {
          width: 100%;
          box-sizing: border-box;
        }

        .projects-filter-btn {
          white-space: nowrap;
        }

        .projects-grid-item {
          min-width: 0;
        }

        @media (max-width: 1024px) {
          .projects-grid {
            gap: 1.25rem !important;
          }

          .projects-grid-item {
            flex: 0 1 calc(50% - 0.75rem) !important;
            min-width: 0 !important;
            max-width: none !important;
          }
        }

        @media (max-width: 768px) {
          .projects-hero {
            padding: 2.5rem 0.75rem !important;
            margin-bottom: 2rem !important;
          }

          .projects-hero h1 {
            font-size: 1.75rem !important;
          }

          .projects-hero p {
            font-size: 1rem !important;
          }

          .projects-main {
            padding: 0.25rem 0.75rem !important;
          }

          .projects-filter {
            gap: 0.5rem !important;
            margin-bottom: 1.25rem !important;
          }

          .projects-filter-btn {
            font-size: 0.88rem !important;
            padding: 0.58rem 0.85rem !important;
            border-width: 1px !important;
          }

          .projects-grid {
            gap: 1rem !important;
            margin-bottom: 2.5rem !important;
          }

          .projects-grid-item {
            flex: 1 1 100% !important;
            max-width: 100% !important;
          }

          .projects-stats h2 {
            font-size: 1.4rem !important;
            margin-bottom: 1.25rem !important;
          }

          .projects-stats-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }

          .projects-calculator {
            padding: 2.5rem 0.75rem !important;
          }

          .projects-calculator h2 {
            font-size: 1.6rem !important;
          }

          .projects-calculator p,
          .projects-cta p {
            font-size: 0.98rem !important;
          }

          .projects-calculator button,
          .projects-cta button {
            width: 100%;
            max-width: 320px;
          }

          .projects-cta {
            padding: 2.5rem 0.75rem !important;
          }

          .projects-cta h2 {
            font-size: 1.45rem !important;
          }
        }

        @media (max-width: 480px) {
          .projects-main,
          .projects-calculator {
            padding-left: 0.5rem !important;
            padding-right: 0.5rem !important;
          }

          .projects-filter-btn {
            width: 100%;
            max-width: 320px;
          }
        }
      `}</style>
    </div>
  );
};


