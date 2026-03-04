import { useState } from 'react';
import { services } from '../constants/services';
import { ServiceCard } from '../components/cards/ServiceCard';
import { CalculatorModal } from '../components/modals/CalculatorModal';

export const ServicesPage: React.FC = () => {
  const [showCalculator, setShowCalculator] = useState(false);
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
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Services</h1>
        <p style={{ fontSize: '1.2rem', opacity: 0.95 }}>
          Professional paving and installation services for all your needs
        </p>
      </div>

      {/* Services Grid */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {services.map(service => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>

        {/* Why Choose Us */}
        <div style={{
          background: 'var(--bg-secondary)',
          padding: '3rem 2rem',
          borderRadius: 'var(--radius-lg)',
          marginBottom: '3rem'
        }}>
          <h2 style={{ marginBottom: '2rem', textAlign: 'center' }}>Why Choose Our Services?</h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '2rem'
          }}>
            <div>
              <h4 style={{ color: 'var(--accent-orange)', marginBottom: '0.5rem' }}>✓ Professional Team</h4>
              <p style={{ color: 'var(--text-secondary)' }}>Experienced professionals with years of expertise</p>
            </div>
            <div>
              <h4 style={{ color: 'var(--accent-orange)', marginBottom: '0.5rem' }}>✓ Quality Materials</h4>
              <p style={{ color: 'var(--text-secondary)' }}>Premium cabro and stone materials</p>
            </div>
            <div>
              <h4 style={{ color: 'var(--accent-orange)', marginBottom: '0.5rem' }}>✓ On-Time Delivery</h4>
              <p style={{ color: 'var(--text-secondary)' }}>Projects completed on schedule</p>
            </div>
            <div>
              <h4 style={{ color: 'var(--accent-orange)', marginBottom: '0.5rem' }}>✓ Warranty Coverage</h4>
              <p style={{ color: 'var(--text-secondary)' }}>10+ year durability guarantee</p>
            </div>
          </div>
        </div>
      </div>

      {/* CALCULATOR SECTION */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '4rem 1rem',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '2.5rem',
          marginBottom: '1.5rem',
          color: 'var(--primary-blue)',
          fontWeight: 'bold'
        }}>
          💰 Estimate Your Service Costs
        </h2>
        <p style={{
          fontSize: '1.1rem',
          color: 'var(--text-secondary)',
          marginBottom: '2rem',
          maxWidth: '600px',
          margin: '0 auto 2rem'
        }}>
          Get an instant estimate for your paving and installation project. Calculate material, labor, and delivery costs.
        </p>
        <button
          onClick={() => setShowCalculator(true)}
          style={{
            padding: '1rem 3rem',
            fontSize: '1rem',
            fontWeight: 'bold',
            background: 'var(--accent-orange)',
            color: 'white',
            border: 'none',
            borderRadius: 'var(--radius-lg)',
            cursor: 'pointer',
            transition: 'all 0.3s ease',
            boxShadow: 'var(--shadow-lg)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = '#EA580C';
            e.currentTarget.style.transform = 'translateY(-2px)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--accent-orange)';
            e.currentTarget.style.transform = 'translateY(0)';
          }}
        >
          Open Calculator
        </button>
      </div>

      {/* CTA Section */}
      <div style={{
        background: 'linear-gradient(135deg, var(--primary-blue), var(--primary-blue-light))',
        color: 'white',
        padding: '4rem 1rem',
        textAlign: 'center'
      }}>
        <h2 style={{ marginBottom: '1rem' }}>Ready for Professional Concrete Solutions?</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1.1rem', opacity: 0.95 }}>
          Contact us today for a free consultation and quote on your project.
        </p>
        <button style={{
          background: 'var(--accent-orange)',
          color: 'white',
          border: 'none',
          padding: '1rem 2rem',
          fontSize: '1.1rem',
          fontWeight: '600',
          borderRadius: 'var(--radius-md)',
          cursor: 'pointer',
          transition: 'background var(--transition-base)'
        }}
        onMouseEnter={(e) => { e.currentTarget.style.background = 'var(--accent-dark)'; }}
        onMouseLeave={(e) => { e.currentTarget.style.background = 'var(--accent-orange)'; }}
        >
          Get Free Consultation
        </button>
      </div>

      {/* Calculator Modal */}
      <CalculatorModal isOpen={showCalculator} onClose={() => setShowCalculator(false)} />
    </div>
  );
};
