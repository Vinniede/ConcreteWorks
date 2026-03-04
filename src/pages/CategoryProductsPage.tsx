import { useParams } from 'react-router-dom';
import { productCategories, getProductsByCategory, ProductType } from '../constants/products';
import { ProductCard } from '../components/cards/ProductCard';

export const CategoryProductsPage: React.FC = () => {
  const { categoryKey } = useParams<{ categoryKey: string }>();
  
  const category = productCategories.find(cat => cat.categoryKey === categoryKey);
  const products: ProductType[] = categoryKey ? getProductsByCategory(categoryKey) : [];

  // Map category keys to video files
  const getCategoryVideo = () => {
    switch(categoryKey) {
      case 'cabro':
        return '/Videos/Carbropavingblocks.mp4';
      case 'cobblestone':
        return '/Videos/Cobblestones.mp4';
      case 'kerbstone':
        return '/Videos/Kerbstones.mp4';
      default:
        return '/Videos/Carbropavingblocks.mp4';
    }
  };

  if (!category) {
    return (
      <div style={{ padding: '3rem 1rem', textAlign: 'center' }}>
        <h1>Category Not Found</h1>
        <p>The product category you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div>
      {/* Category Hero Section */}
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
          <source src={getCategoryVideo()} type="video/mp4" />
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
          <h1 style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{category.name}</h1>
          <p style={{ fontSize: '1.2rem', opacity: 0.95 }}>{category.description}</p>
        </div>
      </div>

      {/* Products Grid */}
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1rem' }}>
        <div className="products-grid">
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Info Section */}
      <div style={{
        background: 'var(--bg-secondary)',
        padding: '3rem 1rem',
        margin: '3rem 0 0 0',
        textAlign: 'center'
      }}>
        <h2>Need More Information?</h2>
        <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', maxWidth: '600px', margin: '1rem auto' }}>
          Contact us for detailed specifications, pricing, and custom quotes for your specific project needs.
        </p>
        <button className="cta-button" style={{ marginTop: '1.5rem', alignSelf: 'center', display: 'inline-block' }}>
          Request Quote
        </button>
      </div>
    </div>
  );
};
