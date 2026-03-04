export const Footer: React.FC = () => {
  return (
    <footer style={{
      background: '#374151',
      color: 'white',
      padding: '1.5rem 1rem 0.75rem'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 'clamp(1rem, 3vw, 2rem)',
        marginBottom: '1.5rem',
        flexWrap: 'wrap'
      }}>
        {/* LEFT: Company Info */}
        <div style={{ flex: 1, minWidth: '200px' }}>
          <h3 style={{ marginBottom: '0.75rem', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: 'clamp(0.8rem, 2vw, 0.95rem)', margin: '0 0 0.75rem 0' }}>
            🏗️ Gitau Concrete Works
          </h3>
          <p style={{ opacity: 0.9, lineHeight: 1.5, fontSize: 'clamp(0.7rem, 1.5vw, 0.8rem)', margin: 0 }}>
            Quality paving solutions across Kenya. Building Foundations, Creating Futures.
          </p>
        </div>

        {/* CENTER: Contact Info */}
        <div style={{ flex: 1, textAlign: 'center', minWidth: '200px' }}>
          <h4 style={{ marginBottom: '0.75rem', fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', margin: '0 0 0.75rem 0' }}>Contact</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', opacity: 0.9, fontSize: 'clamp(0.65rem, 1.5vw, 0.8rem)' }}>
            <div>
              <div style={{ fontWeight: '600' }}>📍 Location</div>
              <p style={{ margin: 0, fontSize: 'clamp(0.6rem, 1.5vw, 0.75rem)' }}>Nairobi, Kenya</p>
            </div>
            <div>
              <div style={{ fontWeight: '600' }}>📞 Phone</div>
              <p style={{ margin: 0, fontSize: 'clamp(0.6rem, 1.5vw, 0.75rem)' }}>+254 (0) XXX XXX XXX</p>
            </div>
            <div>
              <div style={{ fontWeight: '600' }}>📧 Email</div>
              <p style={{ margin: 0, fontSize: 'clamp(0.6rem, 1.5vw, 0.75rem)' }}>info@cabroworks.co.ke</p>
            </div>
          </div>
        </div>

        {/* RIGHT: Social Links */}
        <div style={{ flex: 1, textAlign: 'right', minWidth: '200px' }}>
          <h4 style={{ marginBottom: '0.75rem', fontSize: 'clamp(0.8rem, 2vw, 0.9rem)', margin: '0 0 0.75rem 0' }}>Follow Us</h4>
          <div style={{ display: 'flex', gap: 'clamp(0.5rem, 1.5vw, 0.75rem)', justifyContent: 'center' }}>
            <a href="#" style={{ width: 'clamp(30px, 5vw, 35px)', height: 'clamp(30px, 5vw, 35px)', background: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textDecoration: 'none', transition: 'background var(--transition-base)', fontSize: '0.8rem' }} onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.3)'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.2)'; }}>f</a>
            <a href="#" style={{ width: 'clamp(30px, 5vw, 35px)', height: 'clamp(30px, 5vw, 35px)', background: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textDecoration: 'none', transition: 'background var(--transition-base)', fontSize: '0.8rem' }} onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.3)'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.2)'; }}>📸</a>
            <a href="#" style={{ width: 'clamp(30px, 5vw, 35px)', height: 'clamp(30px, 5vw, 35px)', background: 'rgba(255,255,255,0.2)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textDecoration: 'none', transition: 'background var(--transition-base)', fontSize: '0.8rem' }} onMouseEnter={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.3)'; }} onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.2)'; }}>𝕏</a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.2)',
        paddingTop: '0.75rem',
        textAlign: 'center',
        opacity: 0.8,
        fontSize: '0.75rem'
      }}>
        <p style={{ margin: 0 }}>
          © 2024 Gitau Concrete Works. All rights reserved.
        </p>
      </div>
    </footer>
  );
};
