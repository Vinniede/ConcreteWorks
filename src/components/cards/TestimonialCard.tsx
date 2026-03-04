import { Testimonial } from "../../constants/testimonials";

interface TestimonialCardProps {
  testimonial: Testimonial;
  compact?: boolean;
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, compact = false }) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <span key={i} style={{ color: i < rating ? '#FFD700' : '#D1D5DB', fontSize: '1.2rem' }}>
        ⭐
      </span>
    ));
  };

  return (
    <div
      style={{
        background: 'white',
        border: '1px solid #E5E7EB',
        borderRadius: '0.75rem',
        padding: compact ? '1.5rem' : '2rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
        transition: 'all 0.3s ease',
        height: '100%',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.15)';
        e.currentTarget.style.transform = 'translateY(-4px)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.08)';
        e.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {/* Star Rating */}
      <div style={{ display: 'flex', gap: '0.25rem' }}>
        {renderStars(testimonial.rating)}
      </div>

      {/* Quote Text */}
      <p
        style={{
          fontSize: compact ? '0.95rem' : '1rem',
          lineHeight: '1.6',
          color: '#374151',
          fontStyle: 'italic',
          margin: 0,
          flex: 1,
        }}
      >
        "{testimonial.text}"
      </p>

      {/* Author Info */}
      <div style={{ borderTop: '1px solid #E5E7EB', paddingTop: '1rem' }}>
        <div style={{ fontWeight: 'bold', fontSize: '0.95rem', color: '#1E3A8A' }}>
          {testimonial.name}
        </div>
        <div style={{ fontSize: '0.85rem', color: '#6B7280' }}>
          {testimonial.role}
          {testimonial.company && ` at ${testimonial.company}`}
        </div>
      </div>
    </div>
  );
};
