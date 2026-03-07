import { useState } from "react";

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div className="contact-page">
      <section className="contact-hero">
        <div className="contact-shell">
          <p className="contact-kicker">Contact Us</p>
          <h1>Talk to Gitau Concrete Works</h1>
          <p className="contact-hero-text">
            Reach out for quotes, site visits, and professional guidance on paving,
            kerb, and installation projects.
          </p>
          <div className="contact-hero-chips">
            <span>Fast response</span>
            <span>Transparent quotes</span>
            <span>Experienced team</span>
          </div>
        </div>
      </section>

      <section className="contact-main contact-shell">
        <div className="contact-grid">
          <aside className="contact-info-panel">
            <h2>Get In Touch</h2>

            <div className="contact-info-card">
              <h3>Location</h3>
              <p>Nairobi, Kenya</p>
              <p>East Africa</p>
            </div>

            <div className="contact-info-card">
              <h3>Phone</h3>
              <p>+254 (0) XXX XXX XXX</p>
              <p>Mon - Fri: 8:00 AM - 6:00 PM</p>
            </div>

            <div className="contact-info-card">
              <h3>Email</h3>
              <p>info@gitauconcrete.co.ke</p>
              <p>quotes@gitauconcrete.co.ke</p>
            </div>

            <div className="contact-highlight">
              <strong>Quick response:</strong> Most quote requests are answered within
              24 hours.
            </div>
          </aside>

          <div className="contact-form-panel">
            <h2>Send Us a Message</h2>

            {submitted && (
              <div className="contact-success">
                Thank you. Your message has been sent successfully.
              </div>
            )}

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="contact-row">
                <div className="contact-field">
                  <label htmlFor="name">Name</label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="contact-row">
                <div className="contact-field">
                  <label htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+254 XXX XXX XXX"
                  />
                </div>

                <div className="contact-field">
                  <label htmlFor="subject">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                  >
                    <option value="">Select a subject...</option>
                    <option value="quote">Request a Quote</option>
                    <option value="inquiry">General Inquiry</option>
                    <option value="service">Service Request</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div className="contact-field">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  placeholder="Tell us about your project requirements..."
                />
              </div>

              <button type="submit" className="contact-submit">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="contact-why">
        <div className="contact-shell">
          <h2>Why Contact Us?</h2>
          <div className="contact-why-grid">
            <article>
              <h3>Expert Advice</h3>
              <p>Get practical recommendations based on your project and budget.</p>
            </article>
            <article>
              <h3>Free Quotes</h3>
              <p>Clear pricing guidance with no hidden costs.</p>
            </article>
            <article>
              <h3>Quick Response</h3>
              <p>Our team responds quickly to keep your planning on schedule.</p>
            </article>
          </div>
        </div>
      </section>

      <style>{`
        .contact-page {
          background: var(--color-surface-muted);
        }

        .contact-shell {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .contact-hero {
          background: linear-gradient(130deg, var(--color-brand-strong) 0%, var(--color-brand-base) 100%);
          color: var(--text-light);
          padding: 3.4rem 0 3rem;
        }

        .contact-kicker {
          margin: 0;
          display: inline-block;
          background: rgba(255, 255, 255, 0.14);
          border: 1px solid rgba(255, 255, 255, 0.3);
          color: var(--primary-blue-lighter);
          border-radius: 999px;
          padding: 0.32rem 0.75rem;
          font-size: 0.78rem;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }

        .contact-hero h1 {
          margin: 0.9rem 0 0.65rem;
          font-size: clamp(1.65rem, 4.2vw, 2.8rem);
          color: var(--text-light);
        }

        .contact-hero-text {
          margin: 0;
          max-width: 760px;
          color: rgba(255, 255, 255, 0.92);
          line-height: 1.6;
          font-size: clamp(0.92rem, 1.8vw, 1.12rem);
        }

        .contact-hero-chips {
          margin-top: 1rem;
          display: flex !important;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .contact-hero-chips span {
          background: rgba(255, 255, 255, 0.12);
          border: 1px solid rgba(255, 255, 255, 0.22);
          padding: 0.34rem 0.68rem;
          border-radius: 999px;
          font-size: 0.8rem;
          font-weight: 600;
        }

        .contact-main {
          margin-top: -1.6rem;
          margin-bottom: 3rem;
        }

        .contact-grid {
          display: grid !important;
          grid-template-columns: 0.95fr 1.25fr;
          gap: 1.2rem;
          align-items: start;
        }

        .contact-info-panel,
        .contact-form-panel {
          background: var(--text-light);
          border: 1px solid var(--color-border);
          border-radius: 1rem;
          box-shadow: 0 10px 24px rgba(15, 23, 42, 0.08);
          padding: 1.2rem;
        }

        .contact-info-panel h2,
        .contact-form-panel h2,
        .contact-why h2 {
          margin: 0 0 1rem;
          color: var(--color-brand-strong);
          font-size: clamp(1.15rem, 2.5vw, 1.45rem);
        }

        .contact-info-card {
          background: var(--color-surface-muted);
          border: 1px solid var(--color-border);
          border-radius: 0.75rem;
          padding: 0.85rem 0.9rem;
          margin-bottom: 0.75rem;
        }

        .contact-info-card h3 {
          margin: 0 0 0.35rem;
          color: var(--color-brand-base);
          font-size: 0.94rem;
        }

        .contact-info-card p {
          margin: 0;
          color: var(--color-text-muted);
          font-size: 0.86rem;
          line-height: 1.45;
        }

        .contact-highlight {
          background: var(--primary-blue-lighter);
          border: 1px solid var(--primary-blue-lighter);
          border-left: 4px solid var(--color-brand-base);
          border-radius: 0.75rem;
          padding: 0.8rem 0.85rem;
          color: var(--text-secondary);
          font-size: 0.86rem;
          line-height: 1.45;
        }

        .contact-success {
          background: var(--color-highlight-soft);
          color: var(--color-brand-strong);
          border: 1px solid var(--color-highlight);
          border-radius: 0.7rem;
          padding: 0.75rem 0.85rem;
          margin-bottom: 0.95rem;
          font-size: 0.88rem;
          font-weight: 600;
        }

        .contact-form {
          display: flex !important;
          flex-direction: column !important;
          gap: 0.85rem;
        }

        .contact-row {
          display: grid !important;
          grid-template-columns: 1fr 1fr;
          gap: 0.75rem;
        }

        .contact-field label {
          display: block;
          margin-bottom: 0.35rem;
          font-weight: 600;
          color: var(--text-primary);
          font-size: 0.86rem;
        }

        .contact-field input,
        .contact-field select,
        .contact-field textarea {
          width: 100%;
          border: 1px solid var(--color-border);
          border-radius: 0.65rem;
          padding: 0.68rem 0.75rem;
          font-size: 0.92rem;
          background: var(--text-light);
          color: var(--text-primary);
        }

        .contact-field textarea {
          resize: vertical;
          min-height: 130px;
        }

        .contact-submit {
          background: var(--gradient-action);
          color: var(--text-light);
          border: none;
          border-radius: 0.7rem;
          padding: 0.78rem 1rem;
          font-size: 0.92rem;
          font-weight: 700;
          cursor: pointer;
          margin-top: 0.3rem;
          width: auto !important;
          min-width: 170px;
          align-self: flex-start;
        }

        .contact-submit:hover {
          transform: translateY(-1px);
          box-shadow: 0 10px 20px rgba(249, 115, 22, 0.25);
        }

        .contact-why {
          background: var(--primary-blue-lighter);
          border-top: 1px solid var(--primary-blue-lighter);
          padding: 2.1rem 0 2.35rem;
        }

        .contact-why-grid {
          display: grid !important;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 0.8rem;
        }

        .contact-why-grid article {
          background: var(--text-light);
          border: 1px solid var(--primary-blue-lighter);
          border-radius: 0.8rem;
          padding: 0.9rem;
        }

        .contact-why-grid h3 {
          margin: 0 0 0.35rem;
          color: var(--color-brand-strong);
          font-size: 0.92rem;
        }

        .contact-why-grid p {
          margin: 0;
          color: var(--color-text-muted);
          font-size: 0.84rem;
          line-height: 1.45;
        }

        @media (max-width: 1024px) {
          .contact-grid {
            grid-template-columns: 1fr 1.15fr;
          }

          .contact-why-grid {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 767px) {
          .contact-main {
            margin-top: -1rem;
          }

          .contact-grid {
            grid-template-columns: 1fr;
          }

          .contact-row {
            grid-template-columns: 1fr;
          }

          .contact-submit {
            width: 100% !important;
            min-width: 0;
          }

          .contact-why-grid {
            grid-template-columns: 1fr;
          }

          .contact-info-panel,
          .contact-form-panel {
            padding: 1rem;
          }
        }

        @media (max-width: 479px) {
          .contact-shell {
            padding-left: 0.75rem;
            padding-right: 0.75rem;
          }

          .contact-hero {
            padding: 2.55rem 0 2.2rem;
          }

          .contact-info-card,
          .contact-highlight,
          .contact-why-grid article {
            padding: 0.75rem;
          }

          .contact-field input,
          .contact-field select,
          .contact-field textarea {
            padding: 0.62rem 0.68rem;
          }
        }
      `}</style>
    </div>
  );
};



