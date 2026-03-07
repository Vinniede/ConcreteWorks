import { useMemo, useState } from "react";
import { Testimonial } from "../../constants/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
  compact?: boolean;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({
  testimonial,
  compact = false,
}) => {
  const [hasImageError, setHasImageError] = useState(false);

  const initials = useMemo(() => {
    const parts = testimonial.name.trim().split(" ").filter(Boolean);
    if (parts.length === 0) return "CL";
    if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
    return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
  }, [testimonial.name]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <span
        key={i}
        style={{
          color: i < rating ? "var(--color-highlight-strong)" : "var(--gray-medium)",
          fontSize: compact ? "1rem" : "1.1rem",
        }}
      >
        ⭐
      </span>
    ));
  };

  return (
    <div
      style={{
        background: "var(--text-light)",
        border: "1px solid var(--color-border)",
        borderRadius: "0.9rem",
        padding: compact ? "1.2rem" : "1.5rem",
        display: "flex",
        flexDirection: "column",
        gap: "0.9rem",
        boxShadow: "0 4px 14px rgba(15, 23, 42, 0.08)",
        transition: "all 0.25s ease",
        height: "100%",
        position: "relative",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "0 12px 24px rgba(15, 23, 42, 0.14)";
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.borderColor = "var(--primary-blue-lighter)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "0 4px 14px rgba(15, 23, 42, 0.08)";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.borderColor = "var(--color-border)";
      }}
    >
      <div
        style={{
          display: "inline-flex",
          flexDirection: "row",
          flexWrap: "nowrap",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "0.2rem",
          whiteSpace: "nowrap",
          width: "fit-content",
        }}
      >
        {renderStars(testimonial.rating)}
      </div>

      <p
        style={{
          fontSize: compact ? "0.9rem" : "0.98rem",
          lineHeight: "1.58",
          color: "var(--text-secondary)",
          fontStyle: "italic",
          margin: 0,
          flex: 1,
        }}
      >
        "{testimonial.text}"
      </p>

      <div
        style={{
          borderTop: "1px solid var(--color-border)",
          paddingTop: "0.8rem",
          display: "flex",
          alignItems: "center",
          gap: "0.7rem",
        }}
      >
        {testimonial.image && !hasImageError ? (
          <img
            src={testimonial.image}
            alt={`${testimonial.name} avatar`}
            onError={() => setHasImageError(true)}
            style={{
              width: compact ? "36px" : "42px",
              height: compact ? "36px" : "42px",
              borderRadius: "50%",
              objectFit: "cover",
              border: "2px solid var(--primary-blue-lighter)",
              flexShrink: 0,
            }}
          />
        ) : (
          <div
            style={{
              width: compact ? "36px" : "42px",
              height: compact ? "36px" : "42px",
              borderRadius: "50%",
              background: "linear-gradient(135deg, var(--color-brand-strong), var(--color-brand-base))",
              color: "var(--text-light)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 700,
              fontSize: compact ? "0.75rem" : "0.82rem",
              flexShrink: 0,
            }}
          >
            {initials}
          </div>
        )}

        <div style={{ minWidth: 0 }}>
          <div
            style={{
              fontWeight: 700,
              fontSize: compact ? "0.88rem" : "0.94rem",
              color: "var(--color-brand-strong)",
            }}
          >
            {testimonial.name}
          </div>
          <div style={{ fontSize: compact ? "0.78rem" : "0.83rem", color: "var(--text-tertiary)" }}>
            {testimonial.role}
            {testimonial.company && ` at ${testimonial.company}`}
          </div>
        </div>
      </div>
    </div>
  );
};



