import { useState } from 'react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would send the form data to your backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <div>
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(135deg, var(--primary-blue), var(--primary-blue-light))',
        color: 'white',
        padding: '4rem 1rem',
        textAlign: 'center',
        marginBottom: '3rem'
      }}>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Contact Gitau Concrete Works</h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.95 }}>
          Building Foundations, Creating Futures - Get in touch for quotes and project discussions
        </p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem', marginBottom: '3rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '3rem'
        }}>
          {/* Contact Information */}
          <div>
            <h2 style={{ marginBottom: '2rem', color: 'var(--primary-blue)' }}>Get In Touch</h2>
            
            <div style={{
              background: 'var(--bg-secondary)',
              padding: '1.5rem',
              borderRadius: 'var(--radius-lg)',
              marginBottom: '1.5rem'
            }}>
              <h4 style={{ color: 'var(--primary-blue)', marginBottom: '0.5rem' }}>📍 Address</h4>
              <p style={{ color: 'var(--text-secondary)' }}>
                Nairobi, Kenya<br />
                East Africa
              </p>
            </div>

            <div style={{
              background: 'var(--bg-secondary)',
              padding: '1.5rem',
              borderRadius: 'var(--radius-lg)',
              marginBottom: '1.5rem'
            }}>
              <h4 style={{ color: 'var(--primary-blue)', marginBottom: '0.5rem' }}>📞 Phone</h4>
              <p style={{ color: 'var(--text-secondary)' }}>
                +254 (0) XXX XXX XXX<br />
                Available Mon-Fri: 8AM - 6PM
              </p>
            </div>

            <div style={{
              background: 'var(--bg-secondary)',
              padding: '1.5rem',
              borderRadius: 'var(--radius-lg)',
              marginBottom: '1.5rem'
            }}>
              <h4 style={{ color: 'var(--primary-blue)', marginBottom: '0.5rem' }}>📧 Email</h4>
              <p style={{ color: 'var(--text-secondary)' }}>
                info@gitauconcrete.co.ke<br />
                quotes@gitauconcrete.co.ke
              </p>
            </div>

            <div style={{
              background: 'var(--accent-light)',
              padding: '1.5rem',
              borderRadius: 'var(--radius-lg)',
              borderLeft: '4px solid var(--accent-orange)'
            }}>
              <h4 style={{ color: 'var(--primary-blue)', marginBottom: '0.5rem' }}>💡 Quick Response</h4>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                We typically respond to quotes within 24 hours. For urgent matters, please call directly.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 style={{ marginBottom: '2rem', color: 'var(--primary-blue)' }}>Send us a Message</h2>
            
            {submitted && (
              <div style={{
                background: '#D1FAE5',
                color: '#065F46',
                padding: '1rem',
                borderRadius: 'var(--radius-md)',
                marginBottom: '1.5rem',
                border: '1px solid #6EE7B7'
              }}>
                ✅ Thank you! Your message has been sent successfully.
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid var(--gray-border)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '1rem',
                    fontFamily: 'inherit'
                  }}
                  placeholder="Your name"
                />
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid var(--gray-border)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '1rem',
                    fontFamily: 'inherit'
                  }}
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid var(--gray-border)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '1rem',
                    fontFamily: 'inherit'
                  }}
                  placeholder="+254 XXX XXX XXX"
                />
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>Subject</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid var(--gray-border)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '1rem',
                    fontFamily: 'inherit',
                    background: 'white'
                  }}
                >
                  <option value="">Select a subject...</option>
                  <option value="quote">Request a Quote</option>
                  <option value="inquiry">General Inquiry</option>
                  <option value="service">Service Request</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  style={{
                    width: '100%',
                    padding: '0.75rem',
                    border: '1px solid var(--gray-border)',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '1rem',
                    fontFamily: 'inherit',
                    resize: 'vertical'
                  }}
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                style={{
                  background: 'var(--accent-orange)',
                  color: 'white',
                  border: 'none',
                  padding: '1rem',
                  borderRadius: 'var(--radius-md)',
                  fontWeight: '600',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'background var(--transition-base)',
                  marginTop: '1rem'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--accent-dark)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--accent-orange)'; }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map or Additional Info Section */}
      <div style={{
        background: 'var(--bg-secondary)',
        padding: '3rem 1rem',
        textAlign: 'center'
      }}>
        <h2 style={{ marginBottom: '1.5rem', color: 'var(--primary-blue)' }}>Why Contact Us?</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '2rem',
          maxWidth: '1000px',
          margin: '0 auto'
        }}>
          <div>
            <h4 style={{ color: 'var(--accent-orange)', marginBottom: '0.5rem' }}>🎯 Expert Advice</h4>
            <p style={{ color: 'var(--text-secondary)' }}>Get professional guidance on your project</p>
          </div>
          <div>
            <h4 style={{ color: 'var(--accent-orange)', marginBottom: '0.5rem' }}>💰 Free Quotes</h4>
            <p style={{ color: 'var(--text-secondary)' }}>Transparent pricing with no hidden costs</p>
          </div>
          <div>
            <h4 style={{ color: 'var(--accent-orange)', marginBottom: '0.5rem' }}>⚡ Quick Response</h4>
            <p style={{ color: 'var(--text-secondary)' }}>We respond to inquiries within 24 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
};
