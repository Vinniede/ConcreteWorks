import { Link } from "react-router-dom";

export const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: "George Gitau",
      role: "Founder & CEO",
      bio: "With 15+ years of experience in concrete paving, George founded Gitau Concrete Works to bring premium quality and professionalism to the industry.",
      icon: "👨‍💼",
    },
    {
      name: "Jane Kariuki",
      role: "Operations Manager",
      bio: "Jane oversees all project operations ensuring timely delivery and quality standards. Her attention to detail is legendary in the team.",
      icon: "👩‍💼",
    },
    {
      name: "David Mwangi",
      role: "Lead Technician",
      bio: "David leads our installation team with expertise in complex paving designs and heavy-duty road construction projects.",
      icon: "👨‍🔧",
    },
    {
      name: "Sarah Kipchoge",
      role: "Quality Assurance",
      bio: "Sarah ensures every project meets our strict quality standards. Zero defects is our motto under her supervision.",
      icon: "👩‍🔬",
    },
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
          About Gitau Concrete Works
        </h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "700px", lineHeight: "1.6" }}>
          Building quality, trust, and excellence in concrete paving since 2009
        </p>
      </section>

      {/* OUR STORY SECTION */}
      <section
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
              color: "#1E3A8A",
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
            <div style={{ lineHeight: "1.8", fontSize: "1.05rem", color: "#4B5563" }}>
              <p>
                Gitau Concrete Works was founded with a simple vision: to provide premium quality
                concrete paving solutions that last. What started as a small operation has grown
                into a trusted name in Kenya's construction industry.
              </p>
              <p>
                Over 15 years, we've completed 500+ projects ranging from residential driveways to
                municipal roads. Our commitment to quality, reliability, and customer satisfaction
                has earned us the trust of thousands of clients.
              </p>
              <p>
                We believe that concrete paving isn't just about durability—it's about creating
                beautiful spaces that enhance properties and communities. Every project we take on
                reflects our dedication to excellence.
              </p>
            </div>
            <div
              style={{
                background: "linear-gradient(135deg, #E0E7FF, #E0F2FE)",
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
                  color: "#1E3A8A",
                  marginBottom: "0.5rem",
                }}
              >
                15+ Years
              </p>
              <p style={{ color: "#6B7280" }}>of dedicated service in concrete paving</p>
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
              background: "#F3F4F6",
              padding: "2rem",
              borderRadius: "0.75rem",
              border: "2px solid #E5E7EB",
            }}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                marginBottom: "1rem",
                color: "#1E3A8A",
                fontWeight: "bold",
              }}
            >
              Our Mission
            </h3>
            <p style={{ lineHeight: "1.8", color: "#4B5563" }}>
              To deliver exceptional concrete paving solutions that exceed expectations, providing
              durability, beauty, and value to every client we serve. We are committed to
              innovation, quality, and sustainable practices in everything we do.
            </p>
          </div>
          <div
            style={{
              background: "#F3F4F6",
              padding: "2rem",
              borderRadius: "0.75rem",
              border: "2px solid #E5E7EB",
            }}
          >
            <h3
              style={{
                fontSize: "1.5rem",
                marginBottom: "1rem",
                color: "#1E3A8A",
                fontWeight: "bold",
              }}
            >
              Our Values
            </h3>
            <ul
              style={{
                lineHeight: "2",
                color: "#4B5563",
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
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2
              style={{
                fontSize: "2.5rem",
                marginBottom: "1rem",
                fontWeight: "bold",
                color: "#1E3A8A",
              }}
            >
              Meet Our Team
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                color: "#6B7280",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Experienced professionals dedicated to excellence
            </p>
          </div>

          <div
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
                  e.currentTarget.style.boxShadow = "0 8px 20px rgba(0, 0, 0, 0.12)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.08)";
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
                    color: "#1E3A8A",
                    marginBottom: "0.5rem",
                  }}
                >
                  {member.name}
                </h3>
                <div
                  style={{
                    fontSize: "0.9rem",
                    color: "#FF9D00",
                    fontWeight: "bold",
                    marginBottom: "1rem",
                  }}
                >
                  {member.role}
                </div>
                <p style={{ color: "#6B7280", lineHeight: "1.6", fontSize: "0.95rem" }}>
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
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
            e.currentTarget.style.background = "#B91C1C";
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
    </div>
  );
};
