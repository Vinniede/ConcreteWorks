import { Link } from 'react-router-dom';
import { useState } from 'react';
import { productCategories, cabroPavingBlocks, cobblestones, kerbStones, ProductType } from '../constants/products';
import { CalculatorModal } from '../components/modals/CalculatorModal';

export const ProductsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'cabro' | 'cobblestone' | 'kerbstone'>('all');
  const [showCalculator, setShowCalculator] = useState(false);

  // Merge all products
  const allProducts: ProductType[] = [...cabroPavingBlocks, ...cobblestones, ...kerbStones];

  // Filter products based on selected category
  const filteredProducts = selectedCategory === 'all'
    ? allProducts
    : allProducts.filter(product => product.category === selectedCategory);

  // Get category name for display
  const getCategoryName = () => {
    if (selectedCategory === 'all') return 'All Products';
    const category = productCategories.find(cat => cat.categoryKey === selectedCategory);
    return category?.name || 'All Products';
  };

  return (
    <div>
      {/* Hero Section */}
      <div style={{
        position: 'relative',
        color: 'white',
        padding: '4rem 1rem',
        textAlign: 'center',
        marginBottom: '3rem',
        minHeight: '300px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}>
        {/* Video Background */}
        <video
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 1
          }}
          autoPlay
          muted
          loop
        >
          <source src="/Videos/Carbropavingblocks.mp4" type="video/mp4" />
        </video>

        {/* Dark Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.5)',
          zIndex: 2
        }} />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 3 }}>
          <h1 style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)', marginBottom: '1rem' }}>Our Products</h1>
          <p style={{ fontSize: 'clamp(0.95rem, 3vw, 1.2rem)', opacity: 0.95 }}>
            High-quality paving solutions for all your construction needs
          </p>
        </div>
      </div>

      {/* Main Products Section */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 clamp(0.5rem, 2vw, 1rem)' }}>
        {/* Filter Section with Buttons */}
        <div style={{
          marginBottom: '3rem',
          padding: 'clamp(1rem, 3vw, 2rem)',
          textAlign: 'center'
        }}>
          <h3 style={{
            marginTop: 0,
            marginBottom: '1.5rem',
            color: 'var(--primary-blue)',
            fontSize: 'clamp(1rem, 3vw, 1.2rem)'
          }}>
            Filter by Category
          </h3>
          <div style={{
            display: 'flex',
            gap: 'clamp(0.5rem, 2vw, 1rem)',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            {[
              { label: `All Products (${allProducts.length})`, value: 'all' },
              { label: `Cabro Blocks (${cabroPavingBlocks.length})`, value: 'cabro' },
              { label: `Cobblestones (${cobblestones.length})`, value: 'cobblestone' },
              { label: `Kerb Stones (${kerbStones.length})`, value: 'kerbstone' }
            ].map(option => (
              <button
                key={option.value}
                onClick={() => setSelectedCategory(option.value as any)}
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: 'var(--radius-md)',
                  border: selectedCategory === option.value ? '2px solid var(--accent-orange)' : '2px solid var(--primary-blue)',
                  background: selectedCategory === option.value ? 'var(--accent-orange)' : 'white',
                  color: selectedCategory === option.value ? 'white' : 'var(--primary-blue)',
                  fontWeight: '600',
                  fontSize: '1rem',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  if (selectedCategory !== option.value) {
                    e.currentTarget.style.borderColor = 'var(--accent-orange)';
                    e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (selectedCategory !== option.value) {
                    e.currentTarget.style.borderColor = 'var(--primary-blue)';
                    e.currentTarget.style.boxShadow = 'none';
                  }
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Results Info */}
        <div style={{
          marginBottom: '2rem',
          padding: '1rem',
          background: 'var(--primary-blue-lighter)',
          borderRadius: 'var(--radius-md)',
          borderLeft: '4px solid var(--primary-blue)'
        }}>
          <p style={{
            margin: 0,
            color: 'var(--primary-blue)',
            fontWeight: '600',
            fontSize: '1.05rem'
          }}>
            📦 Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''} in {getCategoryName()}
          </p>
        </div>

        {/* Products Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: '2rem',
          marginBottom: '4rem'
        }}>
          {filteredProducts.map(product => (
            <Link
              key={product.id}
              to={`/product/${product.id}`}
              style={{ textDecoration: 'none', color: 'inherit' }}
            >
              <div
                style={{
                  background: 'white',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  boxShadow: 'var(--shadow-md)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = 'var(--shadow-xl)';
                  e.currentTarget.style.transform = 'translateY(-6px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'var(--shadow-md)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Product Image */}
                <div style={{
                  position: 'relative',
                  overflow: 'hidden',
                  height: '220px',
                  background: 'var(--bg-secondary)'
                }}>
                  <img
                    src={product.image}
                    alt={product.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.08)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />
                  {/* Category Badge */}
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    right: '1rem',
                    background: 'var(--accent-orange)',
                    color: 'white',
                    padding: '0.5rem 1rem',
                    borderRadius: 'var(--radius-md)',
                    fontSize: '0.8rem',
                    fontWeight: '600'
                  }}>
                    {productCategories.find(cat => cat.categoryKey === product.category)?.name || 'Product'}
                  </div>
                </div>

                {/* Product Content */}
                <div style={{
                  padding: '1.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flex: 1
                }}>
                  <h3 style={{
                    color: 'var(--primary-blue)',
                    margin: '0 0 0.75rem 0',
                    fontSize: '1.3rem',
                    fontWeight: 'bold'
                  }}>
                    {product.name}
                  </h3>

                  <p style={{
                    color: 'var(--text-secondary)',
                    fontSize: '0.95rem',
                    margin: '0 0 1rem 0',
                    flex: 1,
                    lineHeight: '1.5'
                  }}>
                    {product.description}
                  </p>

                  {/* Features Preview */}
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '0.5rem',
                    marginBottom: '1rem'
                  }}>
                    {product.features.slice(0, 2).map((feature, idx) => (
                      <span
                        key={idx}
                        style={{
                          background: 'var(--primary-blue-lighter)',
                          color: 'var(--primary-blue)',
                          padding: '0.3rem 0.7rem',
                          borderRadius: 'var(--radius-sm)',
                          fontSize: '0.75rem',
                          fontWeight: '600'
                        }}
                      >
                        ✓ {feature}
                      </span>
                    ))}
                  </div>

                  {/* View Details Button */}
                  <button
                    style={{
                      background: 'var(--primary-blue)',
                      color: 'white',
                      border: 'none',
                      padding: '0.75rem 1rem',
                      borderRadius: 'var(--radius-md)',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'background 0.3s ease',
                      width: '100%'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#003D99';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'var(--primary-blue)';
                    }}
                  >
                    View Details →
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div style={{
            textAlign: 'center',
            padding: '3rem 1rem',
            color: 'var(--text-secondary)'
          }}>
            <p style={{ fontSize: '1.2rem', marginBottom: '1rem' }}>No products found</p>
            <button
              onClick={() => setSelectedCategory('all')}
              style={{
                background: 'var(--primary-blue)',
                color: 'white',
                border: 'none',
                padding: '0.75rem 1.5rem',
                borderRadius: 'var(--radius-md)',
                fontWeight: '600',
                cursor: 'pointer'
              }}
            >
              View All Products
            </button>
          </div>
        )}
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
          💰 Calculate Your Project Cost
        </h2>
        <p style={{
          fontSize: '1.1rem',
          color: 'var(--text-secondary)',
          marginBottom: '2rem',
          maxWidth: '600px',
          margin: '0 auto 2rem'
        }}>
          Use our calculator to estimate material costs, installation fees, and delivery charges for your specific project.
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
        <h2 style={{ marginBottom: '1rem' }}>Ready to Build Your Foundation?</h2>
        <p style={{ maxWidth: '600px', margin: '0 auto 2rem', fontSize: '1.1rem', opacity: 0.95 }}>
          Contact us today for a custom quote on your paving project. Our experts are ready to help.
        </p>
        <Link to="/contact">
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
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--accent-dark)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--accent-orange)';
          }}
          >
            Get Your Quote Now
          </button>
        </Link>
      </div>

      {/* Calculator Modal */}
      <CalculatorModal isOpen={showCalculator} onClose={() => setShowCalculator(false)} />
    </div>
  );
};
