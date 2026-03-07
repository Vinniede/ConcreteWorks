import { Link } from "react-router-dom";
import { useState } from "react";
import { productCategories, allProducts } from "../constants/products";
import { cabroDesigns } from "../constants/designs";
import { projects } from "../constants/projects";
import { testimonials } from "../constants/testimonials";
import { CalculatorModal } from "../components/modals/CalculatorModal";
import { DesignVisualizer } from "../components/modals/DesignVisualizer";
import { TestimonialCard } from "../components/cards/TestimonialCard";

export const HomePage: React.FC = () => {
  const [showCalculator, setShowCalculator] = useState(false);
  const [showDesignVisualizer, setShowDesignVisualizer] = useState(false);

  // Get featured products (first 4)
  const featuredProducts = allProducts.slice(0, 4);

  // Get 4 design patterns
  const designShowcase = cabroDesigns.slice(0, 4);

  // Get 4 projects
  const projectShowcase = projects.slice(0, 4);

  return (
    <div className="home-page">
      {/* HERO SECTION */}
      <section
        className="home-hero"
        style={{
          position: "relative",
          color: "white",
          padding: "1.5rem 1rem",
          textAlign: "center",
          minHeight: "450px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "1.5rem",
          overflow: "hidden",
        }}
      >
        {/* Video Background */}
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
          <source src="/Videos/hero-home.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay for Text Readability */}
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

        {/* Content Wrapper */}
        <div
          style={{
            position: "relative",
            zIndex: 3,
            maxWidth: "700px",
            textAlign: "center",
          }}
        >
          <div style={{ marginBottom: "1.5rem" }}>
            <h1
              style={{
                fontSize: "clamp(1.5rem, 5vw, 3.5rem)",
                marginBottom: "0.5rem",
                fontWeight: "bold",
                color: "var(--color-highlight)",
                textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)",
                lineHeight: "1.1",
              }}
            >
              Gitau Concrete Works
            </h1>
            <p
              style={{
                fontSize: "clamp(1.1rem, 3vw, 1.6rem)",
                marginBottom: "0.5rem",
                color: "white",
                fontWeight: "300",
                textShadow: "1px 1px 4px rgba(0, 0, 0, 0.8)",
                letterSpacing: "0.05em",
              }}
            >
              Building Foundations, Creating Futures
            </p>
            <div
              style={{
                height: "2px",
                width: "60px",
                background:
                  "linear-gradient(90deg, var(--accent-orange), var(--accent-yellow))",
                margin: "0 auto 0.8rem",
              }}
            />
            <p
              style={{
                fontSize: "clamp(0.85rem, 2vw, 1.05rem)",
                marginBottom: "0",
                color: "var(--gray-medium)",
                textShadow: "1px 1px 3px rgba(0, 0, 0, 0.8)",
                fontWeight: "300",
                lineHeight: "1.4",
              }}
            >
              Premium quality paving blocks, cobblestones, and kerb stones for
              durability and excellence
            </p>
          </div>

          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link
              to="/products"
              style={{
                background: "var(--accent-orange)",
                color: "white",
                padding: "clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2.5rem)",
                textDecoration: "none",
                borderRadius: "var(--radius-lg)",
                fontWeight: "bold",
                fontSize: "clamp(0.9rem, 2vw, 1rem)",
                border: "2px solid var(--accent-orange)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                boxShadow: "0 4px 15px rgba(249, 115, 22, 0.4)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--color-highlight)";
                e.currentTarget.style.border = "2px solid var(--color-highlight)";
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow =
                  "0 6px 20px rgba(249, 115, 22, 0.6)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "var(--accent-orange)";
                e.currentTarget.style.border = "2px solid var(--accent-orange)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 4px 15px rgba(249, 115, 22, 0.4)";
              }}
            >
              Explore Products
            </Link>

            <Link
              to="/contact"
              style={{
                background: "transparent",
                color: "var(--color-highlight)",
                padding: "clamp(0.75rem, 2vw, 1rem) clamp(1.5rem, 4vw, 2.5rem)",
                textDecoration: "none",
                borderRadius: "var(--radius-lg)",
                fontWeight: "bold",
                fontSize: "clamp(0.9rem, 2vw, 1rem)",
                border: "2px solid var(--color-highlight)",
                cursor: "pointer",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "var(--color-highlight)";
                e.currentTarget.style.color = "white";
                e.currentTarget.style.transform = "translateY(-3px)";
                e.currentTarget.style.boxShadow =
                  "0 6px 20px rgba(251, 191, 36, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "var(--color-highlight)";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* PRODUCT CATEGORIES */}
      <section
        className="home-product-categories"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "4rem 1rem",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "clamp(1.5rem, 5vw, 2.5rem)",
            marginBottom: "3rem",
            color: "var(--primary-blue)",
            fontWeight: "bold",
          }}
        >
          Product Categories
        </h2>

        <div
          className="home-product-categories-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "clamp(1rem, 2vw, 2rem)",
          }}
        >
          {productCategories.map((category) => (
            <Link
              key={category.id}
              to={`/category/${category.categoryKey}`}
              style={{
                textDecoration: "none",
                color: "inherit",
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                boxShadow: "var(--shadow-md)",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "var(--shadow-xl)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "var(--shadow-md)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div
                style={{
                  height: "200px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Video Background */}
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
                  playsInline
                >
                  <source
                    src={
                      category.categoryKey === "cabro"
                        ? "/Videos/Carbropavingblocks.mp4"
                        : category.categoryKey === "cobblestone"
                          ? "/Videos/Cobblestones.mp4"
                          : "/Videos/Kerbstones.mp4"
                    }
                    type="video/mp4"
                  />
                </video>

                {/* Overlay - Reduced opacity for clearer video */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background:
                      "linear-gradient(135deg, rgba(0, 102, 204, 0.45), rgba(220, 38, 38, 0.45))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "white",
                    zIndex: 2,
                  }}
                >
                  <h3 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>
                    {category.name}
                  </h3>
                </div>
              </div>
              <div style={{ padding: "1.5rem", background: "white" }}>
                <p style={{ color: "var(--text-secondary)", margin: 0 }}>
                  {category.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section
        className="home-featured-products"
        style={{
          background: "var(--primary-blue-lighter)",
          padding: "4rem 1rem",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "2.5rem",
              marginBottom: "3rem",
              color: "var(--primary-blue)",
              fontWeight: "bold",
            }}
          >
            Featured Products
          </h2>

          <div
            className="home-featured-products-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
            }}
          >
            {featuredProducts.map((product) => (
              <Link
                key={product.id}
                to={`/product/${product.id}`}
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-md)",
                  background: "white",
                  transition: "all 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "var(--shadow-xl)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "var(--shadow-md)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <div
                  style={{
                    padding: "1.5rem",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h3
                    style={{
                      color: "var(--primary-blue)",
                      marginBottom: "0.5rem",
                      marginTop: 0,
                    }}
                  >
                    {product.name}
                  </h3>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "0.9rem",
                      flex: 1,
                      marginBottom: "1rem",
                      margin: 0,
                    }}
                  >
                    {product.description}
                  </p>
                  <button
                    style={{
                      background: "var(--primary-blue)",
                      color: "white",
                      border: "none",
                      padding: "0.75rem 1rem",
                      borderRadius: "var(--radius-md)",
                      cursor: "pointer",
                      fontWeight: "bold",
                      transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background =
                        "var(--primary-blue-light)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "var(--primary-blue)";
                    }}
                  >
                    View Details
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CABRO DESIGN IDEAS */}
      <section
        className="home-design-ideas"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "4rem 1rem",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            marginBottom: "3rem",
            color: "var(--primary-blue)",
            fontWeight: "bold",
          }}
        >
          Cabro Design Ideas
        </h2>

        <div
          className="home-design-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
            marginBottom: "3rem",
          }}
        >
          {designShowcase.map((design) => (
            <div
              key={design.id}
              style={{
                borderRadius: "var(--radius-lg)",
                overflow: "hidden",
                boxShadow: "var(--shadow-md)",
                transition: "all 0.3s ease",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "var(--shadow-xl)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "var(--shadow-md)";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <img
                src={design.image}
                alt={design.name}
                style={{
                  width: "100%",
                  height: "200px",
                  objectFit: "cover",
                }}
              />
              <div style={{ padding: "1rem", background: "white" }}>
                <h3
                  style={{
                    color: "var(--primary-blue)",
                    margin: 0,
                    marginBottom: "0.5rem",
                  }}
                >
                  {design.name}
                </h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "0.85rem",
                    margin: 0,
                  }}
                >
                  {design.difficulty}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div
          className="home-design-actions"
          style={{
            textAlign: "center",
            display: "flex",
            gap: "1rem",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <button
            onClick={() => setShowDesignVisualizer(true)}
            style={{
              background: "var(--accent-orange)",
              color: "white",
              padding: "1rem 2rem",
              border: "none",
              borderRadius: "var(--radius-lg)",
              fontWeight: "bold",
              cursor: "pointer",
              transition: "all 0.3s ease",
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
            🎨 Design Visualizer
          </button>
          <Link
            to="/designs"
            style={{
              background: "var(--primary-blue)",
              color: "white",
              padding: "1rem 2rem",
              textDecoration: "none",
              borderRadius: "var(--radius-lg)",
              fontWeight: "bold",
              display: "inline-block",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--primary-blue-light)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--primary-blue)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            View All Designs
          </Link>
        </div>
      </section>

      {/* PROJECT GALLERY */}
      <section
        className="home-project-gallery"
        style={{
          background: "var(--primary-blue-lighter)",
          padding: "4rem 1rem",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "2.5rem",
              marginBottom: "3rem",
              color: "var(--primary-blue)",
              fontWeight: "bold",
            }}
          >
            Project Gallery
          </h2>

          <div
            className="home-project-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
            }}
          >
            {projectShowcase.map((project) => (
              <Link
                key={project.id}
                to="/projects"
                style={{
                  textDecoration: "none",
                  color: "inherit",
                  borderRadius: "var(--radius-lg)",
                  overflow: "hidden",
                  boxShadow: "var(--shadow-md)",
                  background: "white",
                  transition: "all 0.3s ease",
                  display: "flex",
                  flexDirection: "column",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "var(--shadow-xl)";
                  e.currentTarget.style.transform = "translateY(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "var(--shadow-md)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <img
                  src={project.image}
                  alt={project.name}
                  style={{
                    width: "100%",
                    height: "200px",
                    objectFit: "cover",
                  }}
                />
                <div
                  style={{
                    padding: "1.5rem",
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <h3
                    style={{
                      color: "var(--primary-blue)",
                      marginBottom: "0.5rem",
                      marginTop: 0,
                    }}
                  >
                    {project.name}
                  </h3>
                  <p
                    style={{
                      color: "var(--text-secondary)",
                      fontSize: "0.9rem",
                      marginBottom: "0.5rem",
                      margin: 0,
                    }}
                  >
                    📍 {project.location}
                  </p>
                  <span
                    style={{
                      display: "inline-block",
                      background: "var(--accent-orange)",
                      color: "white",
                      padding: "0.25rem 0.75rem",
                      borderRadius: "var(--radius-md)",
                      fontSize: "0.8rem",
                      fontWeight: "bold",
                      width: "fit-content",
                      marginBottom: "1rem",
                    }}
                  >
                    {project.type}
                  </span>
                  <button
                    style={{
                      background: "var(--primary-blue)",
                      color: "white",
                      border: "none",
                      padding: "0.75rem 1rem",
                      borderRadius: "var(--radius-md)",
                      cursor: "pointer",
                      fontWeight: "bold",
                      transition: "all 0.3s ease",
                      marginTop: "auto",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background =
                        "var(--primary-blue-light)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "var(--primary-blue)";
                    }}
                  >
                    View Details
                  </button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CABRO CALCULATOR MODAL */}
      <section
        className="home-calculator-section"
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "4rem 1rem",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            marginBottom: "3rem",
            color: "var(--primary-blue)",
            fontWeight: "bold",
          }}
        >
          💰 Quick Estimate Calculator
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
          Get an instant estimate for your cabro paving project. Our advanced
          calculator includes material costs, installation options, and delivery
          fees.
        </p>

        <button
          onClick={() => setShowCalculator(true)}
          style={{
            padding: "1.2rem 3rem",
            fontSize: "1.1rem",
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
            e.currentTarget.style.transform = "translateY(-3px)";
            e.currentTarget.style.boxShadow = "var(--shadow-xl)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "var(--accent-orange)";
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "var(--shadow-lg)";
          }}
        >
          Open Calculator
        </button>
      </section>

      {/* WHY CHOOSE US */}
      <section
        className="home-why-choose"
        style={{
          background: "var(--primary-blue-lighter)",
          padding: "4rem 1rem",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "2.5rem",
              marginBottom: "3rem",
              color: "var(--primary-blue)",
              fontWeight: "bold",
            }}
          >
            Why Choose Gitau Concrete Works
          </h2>

          <div
            className="home-why-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "2rem",
            }}
          >
            {[
              {
                icon: "✓",
                title: "Quality Materials",
                desc: "Premium grade cabro blocks and kerb stones",
              },
              {
                icon: "✓",
                title: "Professional Installation",
                desc: "Expert installation by trained professionals",
              },
              {
                icon: "✓",
                title: "Fast Delivery",
                desc: "Quick delivery to your location in Kenya",
              },
              {
                icon: "✓",
                title: "Competitive Prices",
                desc: "Best prices without compromising quality",
              },
            ].map((benefit, idx) => (
              <div
                key={idx}
                style={{
                  padding: "2rem",
                  background: "white",
                  borderRadius: "var(--radius-lg)",
                  boxShadow: "var(--shadow-md)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    fontSize: "2.5rem",
                    color: "var(--construction-red)",
                    marginBottom: "1rem",
                  }}
                >
                  {benefit.icon}
                </div>
                <h3
                  style={{
                    color: "var(--primary-blue)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {benefit.title}
                </h3>
                <p style={{ color: "var(--text-secondary)", margin: 0 }}>
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section
        className="home-testimonials"
        style={{
          padding: "4rem 1rem",
          maxWidth: "1200px",
          margin: "0 auto",
          background:
            "linear-gradient(180deg, rgba(239, 246, 255, 0.7) 0%, rgba(255, 255, 255, 1) 100%)",
          borderRadius: "1rem",
          border: "1px solid var(--primary-blue-lighter)",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <div
            style={{
              display: "inline-block",
              padding: "0.35rem 0.8rem",
              borderRadius: "999px",
              background: "var(--primary-blue-lighter)",
              color: "var(--color-brand-strong)",
              fontSize: "0.8rem",
              fontWeight: 700,
              marginBottom: "0.8rem",
            }}
          >
            Testimonials
          </div>
          <h2
            style={{
              fontSize: "clamp(1.7rem, 4vw, 2.4rem)",
              marginBottom: "0.8rem",
              fontWeight: "bold",
              color: "var(--color-brand-strong)",
            }}
          >
            What Our Clients Say
          </h2>
          <p
            style={{
              fontSize: "1rem",
              color: "var(--color-text-muted)",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            Trusted by residential, commercial, and municipal clients across Kenya
          </p>
        </div>

        <div
          className="home-testimonials-grid"
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1.5rem",
            marginBottom: "2rem",
            justifyContent: "center",
          }}
        >
          {testimonials.slice(0, 3).map((testimonial) => (
            <div key={testimonial.id} style={{ flex: "1 1 300px", maxWidth: "360px" }}>
              <TestimonialCard testimonial={testimonial} />
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center" }}>
          <Link
            to="/case-studies"
            style={{
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "0.98rem",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              padding: "0.75rem 1.4rem",
              borderRadius: "0.65rem",
              border: "1px solid var(--color-brand-strong)",
              background: "var(--color-brand-strong)",
              color: "var(--text-light)",
              transition: "all 0.25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--primary-blue-light)";
              e.currentTarget.style.borderColor = "var(--primary-blue-light)";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--color-brand-strong)";
              e.currentTarget.style.borderColor = "var(--color-brand-strong)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            View Case Studies
          </Link>
        </div>
      </section>

      {/* STATS SECTION */}
      <section
        className="home-stats"
        style={{
          background: "linear-gradient(135deg, var(--primary-blue), var(--primary-blue))",
          color: "white",
          padding: "4rem 1rem",
        }}
      >
        <div
          className="home-stats-grid"
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
            textAlign: "center",
          }}
        >
          <div>
            <div
              style={{
                fontSize: "3rem",
                fontWeight: "bold",
                color: "var(--color-highlight)",
                marginBottom: "0.5rem",
              }}
            >
              15+
            </div>
            <div style={{ fontSize: "1.1rem", opacity: 0.95 }}>
              Years of Experience
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: "3rem",
                fontWeight: "bold",
                color: "var(--color-highlight)",
                marginBottom: "0.5rem",
              }}
            >
              500+
            </div>
            <div style={{ fontSize: "1.1rem", opacity: 0.95 }}>
              Projects Completed
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: "3rem",
                fontWeight: "bold",
                color: "var(--color-highlight)",
                marginBottom: "0.5rem",
              }}
            >
              1000+
            </div>
            <div style={{ fontSize: "1.1rem", opacity: 0.95 }}>
              Satisfied Clients
            </div>
          </div>
          <div>
            <div
              style={{
                fontSize: "3rem",
                fontWeight: "bold",
                color: "var(--color-highlight)",
                marginBottom: "0.5rem",
              }}
            >
              100%
            </div>
            <div style={{ fontSize: "1.1rem", opacity: 0.95 }}>
              Quality Guaranteed
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section
        className="home-why-choose-alt"
        style={{
          padding: "4rem 1rem",
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
            Why Choose Gitau Concrete Works?
          </h2>
          <p
            style={{
              fontSize: "1.1rem",
              color: "var(--color-text-muted)",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            We're committed to delivering excellence in every project
          </p>
        </div>

        <div
          className="home-why-alt-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          {[
            {
              icon: "⭐",
              title: "Premium Quality",
              description: "Only the highest grade materials and expert craftsmanship",
            },
            {
              icon: "⚡",
              title: "Fast Completion",
              description: "Efficient execution without compromising quality standards",
            },
            {
              icon: "🛡️",
              title: "Durability Guarantee",
              description: "Long-lasting results backed by industry-leading warranties",
            },
            {
              icon: "👥",
              title: "Expert Team",
              description: "Experienced professionals with decades of combined expertise",
            },
            {
              icon: "💰",
              title: "Competitive Pricing",
              description: "Best value for money without hidden costs",
            },
            {
              icon: "🎯",
              title: "Customized Solutions",
              description: "Tailored designs and specifications for your unique needs",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              style={{
                padding: "2rem",
                background: "var(--color-surface-muted)",
                borderRadius: "0.75rem",
                border: "1px solid var(--color-border)",
                textAlign: "center",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.1)";
                e.currentTarget.style.transform = "translateY(-4px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "none";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>
                {item.icon}
              </div>
              <h3
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  color: "var(--color-brand-strong)",
                  marginBottom: "0.5rem",
                }}
              >
                {item.title}
              </h3>
              <p
                style={{
                  color: "var(--color-text-muted)",
                  fontSize: "0.95rem",
                  lineHeight: "1.6",
                  margin: 0,
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CALL TO ACTION */}
      <section
        className="home-final-cta"
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
          Need Cabro for Your Project?
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            marginBottom: "2rem",
            opacity: 0.95,
          }}
        >
          Get a professional quote from our team today
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
          Request Quote Now
        </Link>
      </section>

      <style>{`
        .home-page section {
          width: 100%;
        }

        .home-product-categories-grid,
        .home-featured-products-grid,
        .home-design-grid,
        .home-project-grid,
        .home-why-grid,
        .home-stats-grid,
        .home-why-alt-grid {
          display: grid !important;
        }

        .home-design-actions,
        .home-testimonials-grid {
          display: flex !important;
          flex-direction: row !important;
        }

        .home-page h2 {
          line-height: 1.2;
        }

        @media (max-width: 1024px) {
          .home-hero {
            min-height: 400px !important;
            padding: 2.2rem 1rem !important;
          }

          .home-page section {
            padding-left: 0.9rem !important;
            padding-right: 0.9rem !important;
          }

          .home-product-categories-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
          }

          .home-featured-products-grid,
          .home-design-grid,
          .home-project-grid,
          .home-why-grid,
          .home-why-alt-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 1.25rem !important;
          }

          .home-stats-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 1.2rem !important;
          }
        }

        @media (max-width: 767px) {
          .home-hero {
            min-height: 350px !important;
            padding: 2rem 0.85rem !important;
          }

          .home-page section {
            padding-top: 2.3rem !important;
            padding-bottom: 2.3rem !important;
            padding-left: 0.75rem !important;
            padding-right: 0.75rem !important;
          }

          .home-product-categories-grid,
          .home-featured-products-grid,
          .home-design-grid,
          .home-project-grid,
          .home-why-grid,
          .home-stats-grid,
          .home-why-alt-grid {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
          }

          .home-design-actions {
            flex-direction: column !important;
            align-items: stretch !important;
          }

          .home-design-actions a,
          .home-design-actions button {
            width: 100% !important;
            text-align: center !important;
          }

          .home-testimonials-grid > div {
            max-width: 100% !important;
            flex-basis: 100% !important;
          }

          .home-stats h2,
          .home-why-choose h2,
          .home-why-choose-alt h2,
          .home-final-cta h2,
          .home-calculator-section h2 {
            font-size: 1.55rem !important;
          }
        }

        @media (max-width: 479px) {
          .home-hero {
            min-height: 320px !important;
          }

          .home-page section p {
            line-height: 1.4 !important;
          }

          .home-product-categories-grid > a div[style*="height: 200px"],
          .home-featured-products-grid img,
          .home-design-grid img,
          .home-project-grid img {
            height: 180px !important;
          }

          .home-stats-grid div[style*="fontSize: \"3rem\""] {
            font-size: 2.1rem !important;
          }
        }
      `}</style>

      {/* Modal Components */}
      <CalculatorModal
        isOpen={showCalculator}
        onClose={() => setShowCalculator(false)}
      />
      <DesignVisualizer
        isOpen={showDesignVisualizer}
        onClose={() => setShowDesignVisualizer(false)}
      />
    </div>
  );
};





