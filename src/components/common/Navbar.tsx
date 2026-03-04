import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { productCategories } from '../../constants/products';

// Gradient animation style
const gradientAnimationStyle = `
  @keyframes gradientShift {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  .gradient-text {
    background: linear-gradient(90deg, #FF6B6B, #FFA500, #FFD700, #FF6B6B);
    background-size: 200% 200%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: gradientShift 4s ease infinite;
  }
`;

// Add style tag to document
if (typeof document !== 'undefined' && !document.getElementById('gradient-animation')) {
  const styleTag = document.createElement('style');
  styleTag.id = 'gradient-animation';
  styleTag.textContent = gradientAnimationStyle;
  document.head.appendChild(styleTag);
}

export const Navbar: React.FC = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const location = useLocation();

  // Helper to determine if link is active
  const isActive = (path: string) => location.pathname === path;
  const isProductsActive = location.pathname.startsWith('/products') || location.pathname.startsWith('/category');

  // Get active link style
  const getNavLinkStyle = (isCurrentPage: boolean) => ({
    color: isCurrentPage ? '#FFD700' : 'white',
    textDecoration: 'none',
    fontWeight: '600',
    transition: 'color 0.3s ease',
    paddingBottom: '0.5rem',
    borderBottom: isCurrentPage ? '2px solid #FFD700' : '2px solid transparent'
  });

  return (
    <nav style={{
      background: '#1E3A8A',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
      position: 'sticky',
      top: 0,
      zIndex: 100
    }}>
      <div style={{
        width: '100%',
        padding: 'clamp(0.5rem, 2vw, 0.75rem) clamp(0.5rem, 3vw, 1rem)',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 'clamp(0.3rem, 1vw, 1rem)',
        minHeight: '0',
        flexWrap: 'nowrap',
        overflow: 'visible'
      }}>
        {/* LEFT: Logo + Company Name */}
        <Link to="/" style={{
          fontSize: 'clamp(0.9rem, 2.5vw, 1.3rem)',
          fontWeight: 'bold',
          textDecoration: 'none',
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(0.2rem, 1.5vw, 0.5rem)',
          flex: '0 0 auto',
          whiteSpace: 'nowrap',
          minWidth: '0'
        }}>
          <span style={{ fontSize: 'clamp(1rem, 2.5vw, 1.6rem)', flexShrink: 0 }}>🏗️</span>
          <span className="gradient-text company-name" style={{ 
            fontWeight: 'bold', 
            fontSize: 'clamp(0.75rem, 2vw, 1.1rem)',
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap'
          }}>
            Gitau Concrete Works
          </span>
        </Link>

        {/* CENTER + RIGHT: Desktop Nav + Hamburger */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'clamp(0.3rem, 1vw, 1rem)',
          marginLeft: 'auto',
          flexShrink: 0,
          whiteSpace: 'nowrap'
        }}>
          {/* Hamburger Button - Mobile Only */}
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className="hamburger-btn"
            style={{
              background: 'none',
              border: 'none',
              color: 'white',
              fontSize: 'clamp(1.2rem, 4vw, 1.5rem)',
              cursor: 'pointer',
              padding: 'clamp(0.3rem, 1vw, 0.5rem)',
              zIndex: 101,
              flexShrink: 0,
              display: 'none',
              lineHeight: '1',
              minWidth: 'auto'
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = '#FFD700'; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = 'white'; }}
          >
            {showMobileMenu ? '✕' : '☰'}
          </button>

          {/* Desktop Navigation Links */}
          <div className="desktop-nav" style={{
            gap: 'clamp(1rem, 2vw, 2rem)',
            alignItems: 'center',
            justifyContent: 'flex-end',
            display: 'flex'
          }}>
            <Link to="/" style={getNavLinkStyle(isActive('/'))}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#FFD700'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = isActive('/') ? '#FFD700' : 'white'; }}
            >
              Home
            </Link>

            {/* Products with Dropdown */}
            <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
              <Link
                to="/products"
                style={getNavLinkStyle(isProductsActive)}
                onMouseEnter={(e) => {
                  setShowDropdown(true);
                  e.currentTarget.style.color = '#FFD700';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = isProductsActive ? '#FFD700' : 'white';
                }}
              >
                Products
              </Link>
              
              <button
                onMouseEnter={() => setShowDropdown(true)}
                onMouseLeave={() => setShowDropdown(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontWeight: '600',
                  cursor: 'pointer',
                  fontSize: '0.8rem',
                  padding: '0.5rem 0.5rem 0.5rem 0.25rem',
                  color: isProductsActive ? '#FFD700' : 'white',
                  transition: 'color 0.3s ease'
                }}
              >
                ▼
              </button>

              {/* Dropdown Menu */}
              {showDropdown && (
                <div
                  onMouseEnter={() => setShowDropdown(true)}
                  onMouseLeave={() => setShowDropdown(false)}
                  style={{
                    position: 'absolute',
                    top: '100%',
                    left: 0,
                    background: 'white',
                    border: '1px solid #E5E7EB',
                    borderRadius: '0.375rem',
                    boxShadow: '0 10px 25px rgba(0, 0, 0, 0.1)',
                    minWidth: '200px',
                    marginTop: '0.5rem',
                    zIndex: 1000
                  }}
                >
                  <Link
                    to="/products"
                    style={{
                      display: 'block',
                      padding: '1rem',
                      color: '#1F2937',
                      textDecoration: 'none',
                      borderBottom: '1px solid #E5E7EB',
                      fontWeight: '600',
                      background: 'white',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => { e.currentTarget.style.background = '#E0E7FF'; e.currentTarget.style.color = '#1E3A8A'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#1F2937'; }}
                  >
                    All Products
                  </Link>

                  {productCategories.map(category => (
                    <Link
                      key={category.id}
                      to={`/category/${category.categoryKey}`}
                      style={{
                        display: 'block',
                        padding: '1rem',
                        color: '#1F2937',
                        textDecoration: 'none',
                        borderBottom: '1px solid #E5E7EB',
                        background: 'white',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => { e.currentTarget.style.background = '#E0E7FF'; e.currentTarget.style.color = '#1E3A8A'; }}
                      onMouseLeave={(e) => { e.currentTarget.style.background = 'white'; e.currentTarget.style.color = '#1F2937'; }}
                    >
                      {category.icon} {category.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/designs" style={getNavLinkStyle(isActive('/designs'))}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#FFD700'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = isActive('/designs') ? '#FFD700' : 'white'; }}
            >
              Designs
            </Link>

            <Link to="/projects" style={getNavLinkStyle(isActive('/projects'))}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#FFD700'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = isActive('/projects') ? '#FFD700' : 'white'; }}
            >
              Projects
            </Link>

            <Link to="/services" style={getNavLinkStyle(isActive('/services'))}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#FFD700'; }}
              onMouseLeave={(e) => { e.currentTarget.style.color = isActive('/services') ? '#FFD700' : 'white'; }}
            >
              Services
            </Link>

            <Link to="/contact" style={{
              background: isActive('/contact') ? '#FFB700' : '#FF9D00',
              color: 'white',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.375rem',
              textDecoration: 'none',
              fontWeight: '600',
              transition: 'background 0.3s ease'
            }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#FFB700'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = isActive('/contact') ? '#FFB700' : '#FF9D00'; }}
            >
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Slide-out Panel */}
      {showMobileMenu && (
        <>
          {/* Backdrop overlay - close menu when clicked */}
          <div
            onClick={() => setShowMobileMenu(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              background: 'rgba(0, 0, 0, 0.5)',
              zIndex: 99,
              animation: 'fadeIn 0.3s ease'
            }}
          />
          
          {/* Menu Panel */}
          <div style={{
            position: 'fixed',
            top: 0,
            right: 0,
            height: '100vh',
            width: 'min(80vw, 300px)',
            background: '#1E3A8A',
            borderLeft: '2px solid #FFD700',
            display: 'flex',
            flexDirection: 'column',
            overflowY: 'auto',
            zIndex: 100,
            animation: 'slideIn 0.3s ease',
            paddingTop: '60px'
          }}>
            <Link 
              to="/"
              onClick={() => setShowMobileMenu(false)}
              style={{
                padding: '1rem',
              color: isActive('/') ? '#FFD700' : 'white',
              textDecoration: 'none',
              fontWeight: '600',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              background: isActive('/') ? 'rgba(255, 215, 0, 0.1)' : 'transparent'
            }}
            >
              Home
            </Link>

            <Link 
              to="/products"
              onClick={() => setShowMobileMenu(false)}
              style={{
                padding: '1rem',
                color: isProductsActive ? '#FFD700' : 'white',
              textDecoration: 'none',
              fontWeight: '600',
              borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
              background: isProductsActive ? 'rgba(255, 215, 0, 0.1)' : 'transparent'
              }}
            >
              All Products
            </Link>

            {productCategories.map(category => (
              <Link 
                key={category.id}
                to={`/category/${category.categoryKey}`}
                onClick={() => setShowMobileMenu(false)}
                style={{
                  padding: '0.75rem 1rem 0.75rem 2rem',
                  color: 'white',
                  textDecoration: 'none',
                  fontWeight: '500',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                  fontSize: '0.9rem'
                }}
              >
                {category.icon} {category.name}
              </Link>
            ))}

            <Link 
              to="/designs"
              onClick={() => setShowMobileMenu(false)}
              style={{
                padding: '1rem',
                color: isActive('/designs') ? '#FFD700' : 'white',
                textDecoration: 'none',
                fontWeight: '600',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                background: isActive('/designs') ? 'rgba(255, 215, 0, 0.1)' : 'transparent'
              }}
            >
              Designs
            </Link>

            <Link 
              to="/projects"
              onClick={() => setShowMobileMenu(false)}
              style={{
                padding: '1rem',
                color: isActive('/projects') ? '#FFD700' : 'white',
                textDecoration: 'none',
                fontWeight: '600',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                background: isActive('/projects') ? 'rgba(255, 215, 0, 0.1)' : 'transparent'
              }}
            >
              Projects
            </Link>

            <Link 
              to="/services"
              onClick={() => setShowMobileMenu(false)}
              style={{
                padding: '1rem',
                color: isActive('/services') ? '#FFD700' : 'white',
                textDecoration: 'none',
                fontWeight: '600',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                background: isActive('/services') ? 'rgba(255, 215, 0, 0.1)' : 'transparent'
              }}
            >
              Services
            </Link>

            <Link 
              to="/contact"
              onClick={() => setShowMobileMenu(false)}
              style={{
                padding: '1rem',
                background: '#FF9D00',
                color: 'white',
                textDecoration: 'none',
                fontWeight: '600',
                borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                margin: '0.5rem'
              }}
            >
              Contact
            </Link>
            </div>
          </>
        )}

      {/* CSS for Responsive */}
      <style>{`
        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @media (max-width: 1023px) {
          .hamburger-btn {
            display: block !important;
          }
          .desktop-nav {
            display: none !important;
          }
        }
        
        @media (min-width: 1024px) {
          .hamburger-btn {
            display: none !important;
          }
          .desktop-nav {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
};
