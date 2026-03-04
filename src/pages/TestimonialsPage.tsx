import { testimonials } from "../constants/testimonials";
import { TestimonialCard } from "../components/cards/TestimonialCard";

export const TestimonialsPage: React.FC = () => {
  const residential = testimonials.filter((t) => t.projectType === "residential");
  const commercial = testimonials.filter((t) => t.projectType === "commercial");
  const municipal = testimonials.filter((t) => t.projectType === "municipal");

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
          Client Testimonials
        </h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "700px", lineHeight: "1.6" }}>
          Hear from our satisfied clients across residential, commercial, and municipal projects
        </p>
      </section>

      {/* ALL TESTIMONIALS SECTION */}
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
              fontSize: "2rem",
              marginBottom: "2rem",
              fontWeight: "bold",
              color: "#1E3A8A",
            }}
          >
            ⭐ Residential Projects
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {residential.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "2rem",
              fontWeight: "bold",
              color: "#1E3A8A",
            }}
          >
            🏢 Commercial Projects
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {commercial.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>

        <div style={{ marginBottom: "4rem" }}>
          <h2
            style={{
              fontSize: "2rem",
              marginBottom: "2rem",
              fontWeight: "bold",
              color: "#1E3A8A",
            }}
          >
            🛣️ Municipal Projects
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
            {municipal.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>

        {/* TRUST BADGES */}
        <div
          style={{
            background: "#F9FAFB",
            borderRadius: "0.75rem",
            padding: "3rem",
            textAlign: "center",
            border: "2px solid #E5E7EB",
            marginTop: "4rem",
          }}
        >
          <h3
            style={{
              fontSize: "1.8rem",
              marginBottom: "2rem",
              fontWeight: "bold",
              color: "#1E3A8A",
            }}
          >
            Why Our Clients Trust Us
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "2rem",
              marginTop: "2rem",
            }}
          >
            {[
              { icon: "✅", label: "100% Satisfaction Rate", value: "5 Star Reviews" },
              { icon: "⏱️", label: "On-Time Delivery", value: "Always On Schedule" },
              { icon: "🎯", label: "Quality Assurance", value: "Zero Defect Policy" },
              { icon: "👥", label: "Expert Team", value: "15+ Years Experience" },
            ].map((badge, idx) => (
              <div key={idx}>
                <div style={{ fontSize: "2.5rem", marginBottom: "0.5rem" }}>
                  {badge.icon}
                </div>
                <div style={{ fontWeight: "bold", color: "#1E3A8A", marginBottom: "0.25rem" }}>
                  {badge.label}
                </div>
                <div style={{ color: "#6B7280", fontSize: "0.9rem" }}>
                  {badge.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
