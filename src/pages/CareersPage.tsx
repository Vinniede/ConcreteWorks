import { Link } from "react-router-dom";

export const CareersPage: React.FC = () => {
  const jobOpenings = [
    {
      id: "job-1",
      title: "Senior Cabro Technician",
      location: "Nairobi, Kenya",
      type: "Full-time",
      salary: "KES 60,000 - 80,000",
      description: "Lead installation teams with 5+ years of paving experience",
      requirements: [
        "5+ years in concrete paving installation",
        "Expertise in various paver designs",
        "Team leadership skills",
        "Driver's license",
        "Knowledge of safety standards",
      ],
    },
    {
      id: "job-2",
      title: "Project Manager",
      location: "Nairobi, Kenya",
      type: "Full-time",
      salary: "KES 80,000 - 100,000",
      description: "Oversee multiple paving projects from start to finish",
      requirements: [
        "3+ years project management experience",
        "Strong communication skills",
        "Budget management experience",
        "Civil engineering background preferred",
        "Auto-CAD or similar software skills",
      ],
    },
    {
      id: "job-3",
      title: "Quality Assurance Inspector",
      location: "Nairobi, Kenya",
      type: "Full-time",
      salary: "KES 50,000 - 65,000",
      description: "Ensure all projects meet quality standards and specifications",
      requirements: [
        "3+ years in quality inspection",
        "Knowledge of construction standards",
        "Strong attention to detail",
        "Report writing skills",
        "Weekend and occasional night shifts",
      ],
    },
    {
      id: "job-4",
      title: "Sales & Business Development",
      location: "Nairobi, Kenya",
      type: "Full-time",
      salary: "KES 45,000 - 70,000 + Commission",
      description: "Build relationships with contractors and commercial clients",
      requirements: [
        "2+ years in construction/building materials sales",
        "Strong negotiation skills",
        "Customer relationship management",
        "Sales target achievement record",
        "Valid driver's license",
      ],
    },
  ];

  const tenderOpportunities = [
    {
      id: "tender-1",
      name: "Municipal Road Resurfacing",
      deadline: "March 31, 2026",
      value: "KES 5,000,000+",
      location: "Nairobi Metropolitan Area",
      status: "Open",
    },
    {
      id: "tender-2",
      name: "Commercial Plaza Paving",
      deadline: "April 15, 2026",
      value: "KES 2,500,000+",
      location: "Westlands, Nairobi",
      status: "Open",
    },
    {
      id: "tender-3",
      name: "Residential Estate Infrastructure",
      deadline: "April 30, 2026",
      value: "KES 3,000,000+",
      location: "Outer Ring Road Area",
      status: "Open",
    },
  ];

  const benefits = [
    { icon: "💰", title: "Competitive Salary", description: "Industry-competitive wages" },
    { icon: "🏥", title: "Health Insurance", description: "Comprehensive health coverage" },
    { icon: "📚", title: "Training & Development", description: "Continuous skill development" },
    { icon: "🎯", title: "Career Growth", description: "Clear career progression paths" },
    { icon: "👥", title: "Team Environment", description: "Collaborative work culture" },
    { icon: "🏆", title: "Performance Bonus", description: "Merit-based rewards" },
  ];

  return (
    <div>
      {/* HERO SECTION */}
      <section
        style={{
          background: "linear-gradient(135deg, var(--primary-blue), #0052A3)",
          color: "white",
          padding: "4rem 1rem",
          textAlign: "center",
          minHeight: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem", fontWeight: "bold" }}>
          Join Our Team
        </h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "700px", lineHeight: "1.6" }}>
          Build your career with Kenya's leading concrete paving company
        </p>
      </section>

      {/* WHY WORK WITH US */}
      <section
        style={{
          padding: "4rem 1rem",
          maxWidth: "1200px",
          margin: "0 auto",
          marginBottom: "4rem",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              marginBottom: "1rem",
              fontWeight: "bold",
              color: "#1E3A8A",
            }}
          >
            Why Join Gitau Concrete Works?
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
          }}
        >
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              style={{
                background: "#F9FAFB",
                borderRadius: "0.75rem",
                padding: "2rem",
                textAlign: "center",
                border: "1px solid #E5E7EB",
              }}
            >
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>
                {benefit.icon}
              </div>
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  color: "#1E3A8A",
                  marginBottom: "0.5rem",
                }}
              >
                {benefit.title}
              </h3>
              <p style={{ color: "#6B7280", fontSize: "0.95rem" }}>
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* JOB OPENINGS */}
      <section
        style={{
          padding: "4rem 1rem",
          background: "#F9FAFB",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div style={{ marginBottom: "3rem", textAlign: "center" }}>
            <h2
              style={{
                fontSize: "2.5rem",
                marginBottom: "1rem",
                fontWeight: "bold",
                color: "#1E3A8A",
              }}
            >
              Current Job Openings
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                color: "#6B7280",
              }}
            >
              {jobOpenings.length} exciting opportunities available
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "2rem" }}>
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                style={{
                  background: "white",
                  border: "1px solid #E5E7EB",
                  borderRadius: "0.75rem",
                  padding: "2rem",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "start",
                    marginBottom: "1rem",
                    flexWrap: "wrap",
                    gap: "1rem",
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontSize: "1.4rem",
                        fontWeight: "bold",
                        color: "#1E3A8A",
                        marginBottom: "0.5rem",
                        margin: "0 0 0.5rem 0",
                      }}
                    >
                      {job.title}
                    </h3>
                    <div
                      style={{
                        display: "flex",
                        gap: "1rem",
                        flexWrap: "wrap",
                        fontSize: "0.9rem",
                        color: "#6B7280",
                      }}
                    >
                      <span>📍 {job.location}</span>
                      <span>💼 {job.type}</span>
                      <span>💰 {job.salary}</span>
                    </div>
                  </div>
                  <button
                    style={{
                      background: "var(--primary-blue)",
                      color: "white",
                      border: "none",
                      padding: "0.75rem 1.5rem",
                      borderRadius: "0.375rem",
                      fontWeight: "bold",
                      cursor: "pointer",
                      transition: "all 0.3s ease",
                      whiteSpace: "nowrap",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "var(--accent-orange)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "var(--primary-blue)";
                    }}
                  >
                    Apply Now →
                  </button>
                </div>

                <p style={{ color: "#4B5563", marginBottom: "1rem", lineHeight: "1.6" }}>
                  {job.description}
                </p>

                <div>
                  <strong style={{ color: "#1E3A8A", display: "block", marginBottom: "0.5rem" }}>
                    Requirements:
                  </strong>
                  <ul
                    style={{
                      paddingLeft: "1.5rem",
                      color: "#6B7280",
                      margin: 0,
                      lineHeight: "1.8",
                    }}
                  >
                    {job.requirements.map((req, idx) => (
                      <li key={idx}>{req}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TENDER OPPORTUNITIES */}
      <section
        style={{
          padding: "4rem 1rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div style={{ marginBottom: "3rem", textAlign: "center" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              marginBottom: "1rem",
              fontWeight: "bold",
              color: "#1E3A8A",
            }}
          >
            Tender Opportunities
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "#6B7280",
            }}
          >
            Current tender opportunities for contractors and partners
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {tenderOpportunities.map((tender) => (
            <div
              key={tender.id}
              style={{
                background: "white",
                border: "2px solid #E5E7EB",
                borderRadius: "0.75rem",
                padding: "2rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "start",
                  marginBottom: "1rem",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    color: "#1E3A8A",
                    margin: 0,
                  }}
                >
                  {tender.name}
                </h3>
                <span
                  style={{
                    background: "#10B981",
                    color: "white",
                    padding: "0.25rem 0.75rem",
                    borderRadius: "0.375rem",
                    fontSize: "0.8rem",
                    fontWeight: "bold",
                    whiteSpace: "nowrap",
                  }}
                >
                  {tender.status}
                </span>
              </div>

              <div style={{ marginBottom: "1rem" }}>
                <div style={{ color: "#6B7280", fontSize: "0.9rem", marginBottom: "0.5rem" }}>
                  📍 {tender.location}
                </div>
                <div style={{ color: "#6B7280", fontSize: "0.9rem", marginBottom: "0.5rem" }}>
                  💰 Contract Value: {tender.value}
                </div>
                <div style={{ color: "#6B7280", fontSize: "0.9rem" }}>
                  📅 Deadline: {tender.deadline}
                </div>
              </div>

              <button
                style={{
                  background: "var(--primary-blue)",
                  color: "white",
                  border: "none",
                  padding: "0.75rem 1.5rem",
                  borderRadius: "0.375rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                  width: "100%",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--accent-orange)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--primary-blue)";
                }}
              >
                View Details →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        style={{
          background: "linear-gradient(135deg, var(--primary-blue), #0052A3)",
          color: "white",
          padding: "4rem 1rem",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem", fontWeight: "bold" }}>
          Ready to Build Your Career?
        </h2>
        <p style={{ fontSize: "1.1rem", marginBottom: "2rem", opacity: 0.95 }}>
          Send us your CV or inquire about opportunities
        </p>
        <a
          href="mailto:careers@gitauconcrete.com?subject=Job Inquiry"
          style={{
            background: "var(--construction-red)",
            color: "white",
            padding: "1rem 2rem",
            textDecoration: "none",
            borderRadius: "var(--radius-lg)",
            fontWeight: "bold",
            fontSize: "1rem",
            display: "inline-block",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#B91C1C";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "var(--construction-red)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Send Your CV →
        </a>
      </section>
    </div>
  );
};
