import { Link } from "react-router-dom";
import { TestimonialCard } from "../components/cards/TestimonialCard";
import {
  caseStudyVideos,
  installationProofs,
  trustMetrics,
} from "../constants/caseStudies";
import { testimonials } from "../constants/testimonials";

export const CaseStudiesPage: React.FC = () => {
  const featuredTestimonials = testimonials.slice(0, 6);

  return (
    <div className="case-studies-page">
      <section className="cs-hero">
        <h1>Case Studies and Verified Client Stories</h1>
        <p>
          Real installation evidence, certified client interviews, and project
          outcomes from residential, commercial, and municipal work.
        </p>
      </section>

      <section className="cs-section cs-trust-wrap">
        <div className="cs-trust-grid">
          {trustMetrics.map((metric) => (
            <div key={metric.label} className="cs-trust-card">
              <div className="cs-trust-value">{metric.value}</div>
              <div className="cs-trust-label">{metric.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="cs-section">
        <header className="cs-header">
          <h2>Certified Client Interviews</h2>
          <p>Embedded videos from clients and project stakeholders.</p>
        </header>

        <div className="cs-video-grid">
          {caseStudyVideos.map((video) => (
            <article key={video.id} className="cs-video-card">
              <div className="cs-video-frame">
                <iframe
                  title={video.title}
                  src={`https://www.youtube.com/embed/${video.youtubeId}`}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              <div className="cs-video-body">
                <h3>{video.title}</h3>
                <p className="cs-meta">
                  {video.clientName} | {video.role} | {video.location}
                </p>
                <p className="cs-summary">{video.summary}</p>

                <div className="cs-chip-wrap">
                  {video.highlights.map((item) => (
                    <span key={item} className="cs-chip">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cs-section">
        <header className="cs-header">
          <h2>Installation Evidence by Area</h2>
          <p>Completed areas, materials used, and measurable outcome notes.</p>
        </header>

        <div className="cs-proof-grid">
          {installationProofs.map((proof) => (
            <article key={proof.id} className="cs-proof-card">
              <img src={proof.image} alt={proof.title} className="cs-proof-image" />
              <div className="cs-proof-body">
                <h3>{proof.title}</h3>
                <p className="cs-meta">
                  {proof.location} | {proof.completedOn}
                </p>
                <p>
                  <strong>Area:</strong> {proof.areaServed}
                </p>
                <p>
                  <strong>Materials:</strong> {proof.materials}
                </p>
                <p>
                  <strong>Outcome:</strong> {proof.outcome}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cs-section">
        <header className="cs-header cs-header-center">
          <h2>What Our Clients Say</h2>
          <p>
            Testimonials captured from completed projects and post-install
            follow-ups.
          </p>
        </header>

        <div className="cs-testimonial-wrap">
          {featuredTestimonials.map((testimonial) => (
            <div key={testimonial.id} className="cs-testimonial-item">
              <TestimonialCard testimonial={testimonial} compact />
            </div>
          ))}
        </div>
      </section>

      <section className="cs-section cs-cta-wrap">
        <div className="cs-cta">
          <div className="cs-cta-text">
            <h3>Need a Verified Site Visit or Similar Project Reference?</h3>
            <p>
              We can share related completed work and plan your project scope.
            </p>
          </div>

          <div className="cs-cta-actions">
            <Link to="/contact" className="cs-btn cs-btn-primary">
              Request Site Visit
            </Link>
            <Link to="/projects" className="cs-btn cs-btn-secondary">
              Explore Projects
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        .case-studies-page {
          width: 100%;
        }

        .cs-section {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem 3rem;
        }

        .cs-hero {
          background: linear-gradient(135deg, var(--color-brand-strong), var(--color-brand-base));
          color: var(--text-light);
          text-align: center;
          padding: 3.4rem 1rem;
        }

        .cs-hero h1 {
          margin: 0 0 0.8rem;
          font-size: clamp(1.7rem, 5vw, 3rem);
          color: var(--text-light);
        }

        .cs-hero p {
          margin: 0 auto;
          max-width: 780px;
          color: rgba(255, 255, 255, 0.92);
          font-size: clamp(0.92rem, 2vw, 1.12rem);
          line-height: 1.6;
        }

        .cs-trust-wrap {
          padding-top: 2rem;
          padding-bottom: 2.2rem;
        }

        .cs-trust-grid {
          display: grid !important;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 0.9rem;
        }

        .cs-trust-card {
          background: var(--color-surface-muted);
          border: 1px solid var(--color-border);
          border-radius: 0.8rem;
          padding: 0.9rem;
          text-align: center;
        }

        .cs-trust-value {
          color: var(--color-brand-strong);
          font-size: 1.4rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 0.2rem;
        }

        .cs-trust-label {
          color: var(--color-text-muted);
          font-size: 0.82rem;
          font-weight: 600;
          line-height: 1.35;
        }

        .cs-header {
          margin-bottom: 1.2rem;
        }

        .cs-header h2 {
          margin: 0;
          color: var(--color-brand-strong);
          font-size: clamp(1.25rem, 3vw, 2rem);
        }

        .cs-header p {
          margin: 0.45rem 0 0;
          color: var(--text-tertiary);
          font-size: 0.95rem;
        }

        .cs-header-center {
          text-align: center;
        }

        .cs-header-center p {
          max-width: 680px;
          margin-left: auto;
          margin-right: auto;
        }

        .cs-video-grid {
          display: grid !important;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 1.25rem;
        }

        .cs-video-card {
          background: var(--text-light);
          border-radius: 0.95rem;
          border: 1px solid var(--color-border);
          overflow: hidden;
          box-shadow: 0 8px 22px rgba(15, 23, 42, 0.08);
          display: flex;
          flex-direction: column;
        }

        .cs-video-frame {
          position: relative;
          padding-top: 56.25%;
          background: var(--text-primary);
        }

        .cs-video-frame iframe {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          border: none;
        }

        .cs-video-body {
          padding: 0.95rem;
        }

        .cs-video-body h3,
        .cs-proof-body h3 {
          margin: 0 0 0.35rem;
          color: var(--text-primary);
          font-size: 1rem;
        }

        .cs-meta {
          margin: 0 0 0.5rem;
          color: var(--text-tertiary);
          font-size: 0.84rem;
          line-height: 1.4;
        }

        .cs-summary {
          margin: 0 0 0.65rem;
          color: var(--text-secondary);
          font-size: 0.9rem;
          line-height: 1.45;
        }

        .cs-chip-wrap {
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .cs-chip {
          background: var(--primary-blue-lighter);
          color: var(--color-brand-strong);
          border: 1px solid var(--primary-blue-lighter);
          border-radius: 999px;
          padding: 0.22rem 0.55rem;
          font-size: 0.75rem;
          font-weight: 600;
        }

        .cs-proof-grid {
          display: grid !important;
          grid-template-columns: repeat(4, minmax(0, 1fr));
          gap: 1rem;
        }

        .cs-proof-card {
          background: var(--text-light);
          border: 1px solid var(--color-border);
          border-radius: 0.9rem;
          overflow: hidden;
          box-shadow: 0 8px 20px rgba(15, 23, 42, 0.06);
        }

        .cs-proof-image {
          width: 100%;
          height: 170px;
          object-fit: cover;
          display: block;
        }

        .cs-proof-body {
          padding: 0.9rem;
        }

        .cs-proof-body p {
          margin: 0 0 0.35rem;
          color: var(--text-secondary);
          font-size: 0.84rem;
          line-height: 1.5;
        }

        .cs-proof-body p:last-child {
          margin-bottom: 0;
        }

        .cs-testimonial-wrap {
          display: flex !important;
          flex-wrap: wrap !important;
          gap: 1rem;
          justify-content: center;
        }

        .cs-testimonial-item {
          flex: 1 1 300px;
          max-width: 360px;
        }

        .cs-cta-wrap {
          margin-bottom: 3rem;
          padding-bottom: 0;
        }

        .cs-cta {
          background: var(--pre-footer-bg);
          color: var(--text-primary);
          border: 1px solid var(--color-border);
          border-radius: 1rem;
          padding: 1.4rem;
          display: flex !important;
          flex-wrap: wrap;
          gap: 0.85rem;
          align-items: center;
          justify-content: space-between;
        }

        .cs-cta-text h3 {
          margin: 0 0 0.3rem;
          color: var(--text-primary);
          font-size: 1.1rem;
        }

        .cs-cta-text p {
          margin: 0;
          color: var(--text-secondary);
          font-size: 0.92rem;
        }

        .cs-cta-actions {
          display: flex !important;
          gap: 0.7rem;
          flex-wrap: wrap;
        }

        .cs-btn {
          text-decoration: none;
          font-weight: 700;
          border-radius: 0.65rem;
          padding: 0.68rem 1rem;
          font-size: 0.9rem;
        }

        .cs-btn-primary {
          background: var(--text-light);
          color: var(--color-brand-strong);
          border: 1px solid var(--text-light);
        }

        .cs-btn-secondary {
          background: var(--text-light);
          color: var(--color-brand-strong);
          border: 1px solid var(--color-brand-strong);
        }

        @media (max-width: 1199px) {
          .cs-video-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .cs-proof-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }

        @media (max-width: 900px) {
          .cs-trust-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .cs-proof-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }

          .cs-cta {
            flex-direction: column !important;
            align-items: flex-start;
          }
        }

        @media (max-width: 640px) {
          .cs-section {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
            padding-bottom: 2.25rem;
          }

          .cs-hero {
            padding: 2.5rem 0.75rem;
          }

          .cs-video-grid,
          .cs-proof-grid,
          .cs-trust-grid {
            grid-template-columns: 1fr;
          }

          .cs-video-body,
          .cs-proof-body {
            padding: 0.8rem;
          }

          .cs-testimonial-item {
            flex-basis: 100%;
            max-width: 100%;
          }

          .cs-btn {
            width: 100%;
            text-align: center;
          }

          .cs-cta-actions {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};



