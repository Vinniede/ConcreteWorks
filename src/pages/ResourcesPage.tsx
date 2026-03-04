export const ResourcesPage: React.FC = () => {
  const resources = [
    {
      title: "Product Installation Guide",
      description: "Complete guide for proper installation of cabro paving blocks",
      icon: "📋",
      category: "Installation",
    },
    {
      title: "Maintenance Manual",
      description: "Best practices for maintaining your concrete paving for longevity",
      icon: "🔧",
      category: "Maintenance",
    },
    {
      title: "Design Catalog",
      description: "Browse all available paver designs and patterns available",
      icon: "🎨",
      category: "Design",
    },
    {
      title: "Technical Specifications",
      description: "Detailed specs for all products including dimensions and materials",
      icon: "📐",
      category: "Technical",
    },
    {
      title: "Installation Checklist",
      description: "Step-by-step checklist to ensure quality installation",
      icon: "✅",
      category: "Installation",
    },
    {
      title: "Cost Estimation Tool",
      description: "Calculate project costs based on area and product type",
      icon: "💰",
      category: "Pricing",
    },
  ];

  const faqItems = [
    {
      question: "How long do cabro pavers last?",
      answer: "With proper installation and maintenance, quality cabro pavers can last 15-20 years or more. Some installations have exceeded 25 years of service.",
    },
    {
      question: "What is the best climate for cabro installation?",
      answer: "Cabro pavers perform well in most climates. Avoid installation during heavy rains or extreme heat. The ideal conditions are moderate temperatures with low humidity.",
    },
    {
      question: "Can I install pavers on my existing driveway?",
      answer: "In most cases, yes. We can install over existing concrete or asphalt, though proper preparation is essential for longevity.",
    },
    {
      question: "How do I maintain my paved surface?",
      answer: "Regular cleaning, sealing every 1-2 years, and prompt repair of any damage will extend the lifespan significantly.",
    },
    {
      question: "What warranty do you provide?",
      answer: "We provide a 10-year durability guarantee on materials and workmanship. Longer warranties available for premium installations.",
    },
    {
      question: "Can you customize paver designs?",
      answer: "Absolutely! We offer custom design services tailored to your specific preferences and property requirements.",
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
          Resources & Downloads
        </h1>
        <p style={{ fontSize: "1.2rem", maxWidth: "700px", lineHeight: "1.6" }}>
          Everything you need to know about our products and services
        </p>
      </section>

      {/* RESOURCES SECTION */}
      <section
        style={{
          padding: "4rem 1rem",
          maxWidth: "1200px",
          margin: "0 auto",
          marginBottom: "4rem",
        }}
      >
        <div style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "2.5rem",
              marginBottom: "1rem",
              fontWeight: "bold",
              color: "#1E3A8A",
            }}
          >
            Available Resources
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "#6B7280",
              lineHeight: "1.6",
            }}
          >
            Download guides, datasheets, and technical documentation for our products
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "2rem",
          }}
        >
          {resources.map((resource, idx) => (
            <div
              key={idx}
              style={{
                background: "white",
                border: "2px solid #E5E7EB",
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
                e.currentTarget.style.borderColor = "#E5E7EB";
              }}
            >
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>
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
                  color: "#1E3A8A",
                  marginBottom: "0.75rem",
                  marginTop: "0.5rem",
                }}
              >
                {resource.title}
              </h3>
              <p
                style={{
                  color: "#6B7280",
                  fontSize: "0.95rem",
                  lineHeight: "1.6",
                  marginBottom: "1.5rem",
                }}
              >
                {resource.description}
              </p>
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
                }}
                onMouseEnter={(e) => {
                  const btn = e.currentTarget as HTMLButtonElement;
                  btn.style.background = "var(--accent-orange)";
                  btn.style.transform = "translateX(4px)";
                }}
                onMouseLeave={(e) => {
                  const btn = e.currentTarget as HTMLButtonElement;
                  btn.style.background = "var(--primary-blue)";
                  btn.style.transform = "translateX(0)";
                }}
              >
                Download →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ SECTION */}
      <section
        style={{
          padding: "4rem 1rem",
          background: "#F9FAFB",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
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
              Frequently Asked Questions
            </h2>
            <p
              style={{
                fontSize: "1.1rem",
                color: "#6B7280",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Find answers to common questions about our products and services
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {faqItems.map((item, idx) => (
              <details
                key={idx}
                style={{
                  background: "white",
                  border: "1px solid #E5E7EB",
                  borderRadius: "0.75rem",
                  padding: "1.5rem",
                  cursor: "pointer",
                }}
              >
                <summary
                  style={{
                    fontWeight: "bold",
                    fontSize: "1.05rem",
                    color: "#1E3A8A",
                    outline: "none",
                    userSelect: "none",
                  }}
                >
                  {item.question}
                </summary>
                <p
                  style={{
                    color: "#6B7280",
                    marginTop: "1rem",
                    lineHeight: "1.6",
                    fontSize: "0.95rem",
                  }}
                >
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section
        style={{
          background: "linear-gradient(135deg, var(--primary-blue), #0052A3)",
          color: "white",
          padding: "4rem 1rem",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontSize: "2.5rem", marginBottom: "1rem", fontWeight: "bold" }}>
          Need Help or Have Questions?
        </h2>
        <p style={{ fontSize: "1.1rem", marginBottom: "2rem", opacity: 0.95 }}>
          Our team is ready to assist you with any information or requests
        </p>
        <button
          style={{
            background: "var(--construction-red)",
            color: "white",
            padding: "1rem 2rem",
            border: "none",
            borderRadius: "var(--radius-lg)",
            fontWeight: "bold",
            fontSize: "1rem",
            cursor: "pointer",
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
          onClick={() => window.location.href = "/contact"}
        >
          Contact Us
        </button>
      </section>
    </div>
  );
};
