import { Link } from "react-router-dom";

export const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: "Mr Jeff Gitau",
      role: "Founder & CEO",
      bio: "With 15+ years of experience in concrete paving, Jeff founded Gitau Concrete Works to bring premium quality and professionalism to the industry.",
      icon: "👨‍💼",
    },
    {
      name: "Madam Pascal Muthoni",
      role: "Operations Manager",
      bio: "Pascal oversees all project operations ensuring timely delivery and quality standards. Her attention to detail is legendary in the team.",
      icon: "👩‍💼",
    },
    {
      name: "Sir Vincent Muthuri",
      role: "Lead Technician",
      bio: "Vincent leads our installation team with expertise in complex paving designs and heavy-duty road construction projects.",
      icon: "👨‍🔧",
    },
    {
      name: "Mr Alex M Nkuja",
      role: "Quality Assurance",
      bio: "Alex ensures every project meets our strict quality standards. Zero defects is our motto under his supervision.",
      icon: "👨‍🔬",
    },
  ];

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
      description:
        "Ensure all projects meet quality standards and specifications",
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
      description:
        "Build relationships with contractors and commercial clients",
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
    {
      icon: "💰",
      title: "Competitive Salary",
      description: "Industry-competitive wages",
    },
    {
      icon: "🏥",
      title: "Health Insurance",
      description: "Comprehensive health coverage",
    },
    {
      icon: "📚",
      title: "Training & Development",
      description: "Continuous skill development",
    },
    {
      icon: "🎯",
      title: "Career Growth",
      description: "Clear career progression paths",
    },
    {
      icon: "👥",
      title: "Team Environment",
      description: "Collaborative work culture",
    },
    {
      icon: "🏆",
      title: "Performance Bonus",
      description: "Merit-based rewards",
    },
  ];

  return (
    <div className="about-page">
      {/* HERO SECTION */}
      <section
        className="about-hero"
        style={{
          background:
            "linear-gradient(135deg, var(--primary-blue), var(--primary-blue))",
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
        <h1
          style={{ fontSize: "3rem", marginBottom: "1rem", fontWeight: "bold" }}
        >
          About Gitau Concrete Works
        </h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "700px", lineHeight: "1.6" }}>
          Building quality, trust, and excellence in concrete paving since 2009
        </p>
      </section>

      {/* OUR STORY SECTION */}
      <section
        className="about-story"
        style={{
          padding: "4rem 1rem",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              marginBottom: "2rem",
              fontWeight: "bold",
              color: "var(--color-brand-strong)",
            }}
          >
            Our Story
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "2rem",
              alignItems: "center",
            }}
            className="responsive-grid"
          >
            <div
              style={{
                lineHeight: "1.8",
                fontSize: "1.05rem",
                color: "var(--text-secondary)",
              }}
            >
              <p>
                Gitau Concrete Works was founded with a simple vision: to
                provide premium quality concrete paving solutions that last.
                What started as a small operation has grown into a trusted name
                in Kenya's construction industry.
              </p>
              <p>
                Over 15 years, we've completed 500+ projects ranging from
                residential driveways to municipal roads. Our commitment to
                quality, reliability, and customer satisfaction has earned us
                the trust of thousands of clients.
              </p>
              <p>
                We believe that concrete paving isn't just about durability—it's
                about creating beautiful spaces that enhance properties and
                communities. Every project we take on reflects our dedication to
                excellence.
              </p>
            </div>
            <div
              style={{
                background:
                  "linear-gradient(135deg, var(--primary-blue-lighter), var(--color-highlight-soft))",
                borderRadius: "0.75rem",
                padding: "2rem",
                textAlign: "center",
              }}
            >
              <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🏗️</div>
              <p
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  color: "var(--color-brand-strong)",
                  marginBottom: "0.5rem",
                }}
              >
                15+ Years
              </p>
              <p style={{ color: "var(--color-text-muted)" }}>
                of dedicated service in concrete paving
              </p>
            </div>
          </div>
        </div>

        {/* MISSION & VALUES */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2rem",
            marginBottom: "4rem",
          }}
          className="responsive-grid"
        >
          <div
            style={{
              background: "var(--bg-tertiary)",
              padding: "2rem",
              borderRadius: "0.75rem",
              border: "2px solid var(--color-border)",
            }}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                marginBottom: "1rem",
                color: "var(--color-brand-strong)",
                fontWeight: "bold",
              }}
            >
              Our Mission
            </h3>
            <p style={{ lineHeight: "1.8", color: "var(--text-secondary)" }}>
              To deliver exceptional concrete paving solutions that exceed
              expectations, providing durability, beauty, and value to every
              client we serve. We are committed to innovation, quality, and
              sustainable practices in everything we do.
            </p>
          </div>
          <div
            style={{
              background: "var(--bg-tertiary)",
              padding: "2rem",
              borderRadius: "0.75rem",
              border: "2px solid var(--color-border)",
            }}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                marginBottom: "1rem",
                color: "var(--color-brand-strong)",
                fontWeight: "bold",
              }}
            >
              Our Values
            </h3>
            <ul
              style={{
                lineHeight: "2",
                color: "var(--text-secondary)",
                paddingLeft: "1.5rem",
                margin: 0,
              }}
            >
              <li>Quality in every project</li>
              <li>Customer satisfaction first</li>
              <li>Professional excellence</li>
              <li>Integrity and honesty</li>
              <li>Continuous improvement</li>
            </ul>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      <section
        className="about-team"
        style={{
          padding: "4rem 1rem",
          background: "var(--color-surface-muted)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2
              style={{
                fontSize: "2.5rem",
                marginBottom: "1rem",
                fontWeight: "bold",
                color: "var(--color-brand-strong)",
              }}
            >
              Meet Our Team
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                color: "var(--color-text-muted)",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Experienced professionals dedicated to excellence
            </p>
          </div>

          <div
            className="about-team-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
            }}
          >
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                style={{
                  background: "white",
                  borderRadius: "0.75rem",
                  padding: "2rem",
                  textAlign: "center",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.08)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 8px 20px rgba(0, 0, 0, 0.12)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow =
                    "0 2px 8px rgba(0, 0, 0, 0.08)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>
                  {member.icon}
                </div>
                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "bold",
                    color: "var(--color-brand-strong)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {member.name}
                </h3>
                <div
                  style={{
                    fontSize: "0.9rem",
                    color: "var(--color-action-primary)",
                    fontWeight: "bold",
                    marginBottom: "1rem",
                  }}
                >
                  {member.role}
                </div>
                <p
                  style={{
                    color: "var(--color-text-muted)",
                    lineHeight: "1.6",
                    fontSize: "0.95rem",
                  }}
                >
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAREERS SECTION */}
      <section
        className="about-careers"
        style={{
          padding: "4rem 1rem",
          background: "var(--color-surface-muted)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2
              style={{
                fontSize: "2.5rem",
                marginBottom: "1rem",
                fontWeight: "bold",
                color: "var(--color-brand-strong)",
              }}
            >
              Join Our Growing Team
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                color: "var(--color-text-muted)",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Build your career with Kenya's leading concrete paving company
            </p>
          </div>

          {/* WHY WORK WITH US */}
          <div
            style={{
              marginBottom: "4rem",
            }}
          >
            <h3
              style={{
                fontSize: "1.8rem",
                marginBottom: "2rem",
                fontWeight: "bold",
                color: "var(--color-brand-strong)",
                textAlign: "center",
              }}
            >
              Why Join Gitau Concrete Works?
            </h3>

            <div
              className="about-benefits-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "2rem",
              }}
            >
              {benefits.map((benefit, idx) => (
                <div
                  key={idx}
                  style={{
                    background: "white",
                    borderRadius: "0.75rem",
                    padding: "2rem",
                    textAlign: "center",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>
                    {benefit.icon}
                  </div>
                  <h4
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "bold",
                      color: "var(--color-brand-strong)",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {benefit.title}
                  </h4>
                  <p
                    style={{
                      color: "var(--color-text-muted)",
                      fontSize: "0.9rem",
                    }}
                  >
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* JOB OPENINGS */}
          <div
            style={{
              marginBottom: "4rem",
            }}
          >
            <h3
              style={{
                fontSize: "1.8rem",
                marginBottom: "2rem",
                fontWeight: "bold",
                color: "var(--color-brand-strong)",
                textAlign: "center",
              }}
            >
              Current Job Openings
            </h3>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--color-text-muted)",
                textAlign: "center",
                marginBottom: "2rem",
              }}
            >
              {jobOpenings.length} exciting opportunities available
            </p>

            <div
              className="about-openings-list"
              style={{ display: "flex", flexDirection: "column", gap: "2rem" }}
            >
              {jobOpenings.map((job) => (
                <div
                  key={job.id}
                  style={{
                    background: "white",
                    border: "1px solid var(--color-border)",
                    borderRadius: "0.75rem",
                    padding: "2rem",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow =
                      "0 8px 20px rgba(0, 0, 0, 0.1)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  <div
                    className="about-job-header"
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
                      <h4
                        style={{
                          fontSize: "1.3rem",
                          fontWeight: "bold",
                          color: "var(--color-brand-strong)",
                          margin: "0 0 0.5rem 0",
                        }}
                      >
                        {job.title}
                      </h4>
                      <div
                        className="about-job-meta"
                        style={{
                          display: "flex",
                          gap: "1rem",
                          flexWrap: "wrap",
                          fontSize: "0.9rem",
                          color: "var(--color-text-muted)",
                        }}
                      >
                        <span>📍 {job.location}</span>
                        <span>💼 {job.type}</span>
                        <span>💰 {job.salary}</span>
                      </div>
                    </div>
                    <Link
                      className="about-job-apply-link"
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
                        whiteSpace: "nowrap",
                        display: "inline-block",
                        textDecoration: "none",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background =
                          "var(--accent-orange)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background =
                          "var(--primary-blue)";
                      }}
                    >
                      Apply Now →
                    </Link>
                  </div>

                  <p
                    style={{
                      color: "var(--text-secondary)",
                      marginBottom: "1rem",
                      lineHeight: "1.6",
                    }}
                  >
                    {job.description}
                  </p>

                  <div>
                    <strong
                      style={{
                        color: "var(--color-brand-strong)",
                        display: "block",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Requirements:
                    </strong>
                    <ul
                      style={{
                        paddingLeft: "1.5rem",
                        color: "var(--color-text-muted)",
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

          {/* TENDER OPPORTUNITIES */}
          <div>
            <h3
              style={{
                fontSize: "1.8rem",
                marginBottom: "2rem",
                fontWeight: "bold",
                color: "var(--color-brand-strong)",
                textAlign: "center",
              }}
            >
              Tender Opportunities
            </h3>
            <p
              style={{
                fontSize: "1rem",
                color: "var(--color-text-muted)",
                textAlign: "center",
                marginBottom: "2rem",
              }}
            >
              Current tender opportunities for contractors and partners
            </p>

            <div
              className="about-tender-grid"
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
                    border: "2px solid var(--color-border)",
                    borderRadius: "0.75rem",
                    padding: "2rem",
                  }}
                >
                  <div
                    className="about-tender-header"
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "start",
                      marginBottom: "1rem",
                    }}
                  >
                    <h4
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: "bold",
                        color: "var(--color-brand-strong)",
                        margin: 0,
                      }}
                    >
                      {tender.name}
                    </h4>
                    <span
                      style={{
                        background: "var(--color-brand-base)",
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
                    <div
                      style={{
                        color: "var(--color-text-muted)",
                        fontSize: "0.9rem",
                        marginBottom: "0.5rem",
                      }}
                    >
                      📍 {tender.location}
                    </div>
                    <div
                      style={{
                        color: "var(--color-text-muted)",
                        fontSize: "0.9rem",
                        marginBottom: "0.5rem",
                      }}
                    >
                      💰 Contract Value: {tender.value}
                    </div>
                    <div
                      style={{
                        color: "var(--color-text-muted)",
                        fontSize: "0.9rem",
                      }}
                    >
                      📅 Deadline: {tender.deadline}
                    </div>
                  </div>

                  <Link
                    className="about-tender-link"
                    to="/contact"
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
                      textDecoration: "none",
                      display: "block",
                      textAlign: "center",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "var(--accent-orange)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "var(--primary-blue)";
                    }}
                  >
                    View Details →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section
        className="about-cta"
        style={{
          background: "var(--pre-footer-bg)",
          color: "var(--text-primary)",
          padding: "4rem 1rem",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "1rem",
            fontWeight: "bold",
          }}
        >
          Ready to Partner With Us?
        </h2>
        <p style={{ fontSize: "1.1rem", marginBottom: "2rem", opacity: 0.95 }}>
          Let's discuss your concrete paving project
        </p>
        <Link
          to="/contact"
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
            e.currentTarget.style.background = "var(--color-danger)";
            e.currentTarget.style.transform = "translateY(-2px)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "var(--construction-red)";
            e.currentTarget.style.transform = "translateY(0)";
          }}
        >
          Get in Touch
        </Link>
      </section>

      <style>{`
        .about-page section {
          width: 100%;
        }

        .about-page .responsive-grid {
          display: grid !important;
          grid-template-columns: 1fr 1fr !important;
          gap: 2rem !important;
        }

        .about-team-grid,
        .about-benefits-grid,
        .about-tender-grid {
          display: grid !important;
        }

        .about-job-header,
        .about-job-meta,
        .about-tender-header {
          display: flex !important;
          flex-direction: row !important;
        }

        @media (max-width: 1024px) {
          .about-page section {
            padding-left: 0.9rem !important;
            padding-right: 0.9rem !important;
          }

          .about-hero h1 {
            font-size: clamp(2rem, 6vw, 2.5rem) !important;
          }

          .about-hero p {
            font-size: 1.02rem !important;
          }

          .about-team-grid,
          .about-tender-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 1.25rem !important;
          }

          .about-benefits-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr)) !important;
            gap: 1rem !important;
          }
        }

        @media (max-width: 767px) {
          .about-page section {
            padding-top: 2.4rem !important;
            padding-bottom: 2.4rem !important;
            padding-left: 0.75rem !important;
            padding-right: 0.75rem !important;
          }

          .about-page .responsive-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }

          .about-team-grid,
          .about-benefits-grid,
          .about-tender-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }

          .about-job-header,
          .about-job-meta,
          .about-tender-header {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 0.6rem !important;
          }

          .about-job-apply-link,
          .about-tender-link {
            width: 100% !important;
            text-align: center !important;
          }

          .about-page h2 {
            font-size: 1.7rem !important;
          }

          .about-page h3 {
            font-size: 1.2rem !important;
          }
        }

        @media (max-width: 479px) {
          .about-hero h1 {
            font-size: 1.7rem !important;
            margin-bottom: 0.6rem !important;
          }

          .about-hero p {
            font-size: 0.92rem !important;
            line-height: 1.45 !important;
          }

          .about-page p,
          .about-page li,
          .about-page span {
            font-size: 0.9rem !important;
            line-height: 1.45 !important;
          }

          .about-story div[style*="padding: \"2rem\""],
          .about-careers div[style*="padding: \"2rem\""],
          .about-team div[style*="padding: \"2rem\""] {
            padding: 1rem !important;
          }
        }
      `}</style>
    </div>
  );
};
