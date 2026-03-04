import { useState } from 'react';
import { cabroDesigns } from '../../constants/designs';

interface DesignVisualizerProps {
  isOpen: boolean;
  onClose: () => void;
}

const cabroColors = [
  { name: 'Red Terracotta', value: '#C1272D' },
  { name: 'Black', value: '#1A1A1A' },
  { name: 'Grey', value: '#808080' },
  { name: 'Brown', value: '#8B4513' },
  { name: 'Yellow', value: '#FFD700' },
  { name: 'Cream', value: '#F5F5DC' }
];

export const DesignVisualizer: React.FC<DesignVisualizerProps> = ({ isOpen, onClose }) => {
  const [selectedDesign, setSelectedDesign] = useState(cabroDesigns[0]);
  const [selectedColor, setSelectedColor] = useState(cabroColors[0]);

  if (!isOpen) return null;

  return (
    <>
      {/* Modal Overlay */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.6)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}
      >
        {/* Modal Content */}
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            background: 'white',
            borderRadius: 'var(--radius-lg)',
            padding: '2rem',
            maxWidth: '800px',
            width: '90%',
            maxHeight: '90vh',
            overflow: 'auto',
            boxShadow: 'var(--shadow-xl)',
            position: 'relative'
          }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '1rem',
              right: '1rem',
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              color: 'var(--text-secondary)'
            }}
          >
            ✕
          </button>

          <h2 style={{ color: 'var(--primary-blue)', marginBottom: '1.5rem', marginTop: 0 }}>
            🎨 Cabro Design Visualizer
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
            {/* Preview Section */}
            <div>
              <h3 style={{ color: 'var(--primary-blue)', marginBottom: '1rem' }}>Preview</h3>
              <div
                style={{
                  width: '100%',
                  aspectRatio: '1',
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  border: '3px solid var(--primary-blue)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: selectedColor.value
                }}
              >
                {selectedDesign.image ? (
                  <img
                    src={selectedDesign.image}
                    alt={selectedDesign.name}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover'
                    }}
                  />
                ) : (
                  <div style={{
                    textAlign: 'center',
                    color: 'white',
                    fontSize: '1.5rem',
                    fontWeight: 'bold',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                  }}>
                    {selectedDesign.name}
                  </div>
                )}
              </div>

              <div style={{ marginTop: '1rem' }}>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                  <strong>Design:</strong> {selectedDesign.name}
                </p>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
                  <strong>Color:</strong> {selectedColor.name}
                </p>
                <p style={{ color: 'var(--accent-orange)', marginBottom: 0 }}>
                  <strong>Difficulty:</strong> {selectedDesign.difficulty}
                </p>
              </div>
            </div>

            {/* Options Section */}
            <div>
              <h3 style={{ color: 'var(--primary-blue)', marginBottom: '1rem' }}>Design Patterns</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '2rem' }}>
                {cabroDesigns.map((design) => (
                  <button
                    key={design.id}
                    onClick={() => setSelectedDesign(design)}
                    style={{
                      padding: '0.75rem',
                      border: selectedDesign.id === design.id ? '2px solid var(--accent-orange)' : '2px solid var(--gray-border)',
                      background: selectedDesign.id === design.id ? 'var(--accent-orange)' : 'white',
                      color: selectedDesign.id === design.id ? 'white' : 'var(--primary-blue)',
                      borderRadius: 'var(--radius-md)',
                      cursor: 'pointer',
                      fontWeight: 'bold',
                      transition: 'all 0.3s ease',
                      fontSize: '0.85rem'
                    }}
                    onMouseEnter={(e) => {
                      if (selectedDesign.id !== design.id) {
                        e.currentTarget.style.borderColor = 'var(--primary-blue)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (selectedDesign.id !== design.id) {
                        e.currentTarget.style.borderColor = 'var(--gray-border)';
                      }
                    }}
                  >
                    {design.name}
                  </button>
                ))}
              </div>

              <h3 style={{ color: 'var(--primary-blue)', marginBottom: '1rem' }}>Colors</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.75rem' }}>
                {cabroColors.map((color) => (
                  <div key={color.name} style={{ textAlign: 'center' }}>
                    <button
                      onClick={() => setSelectedColor(color)}
                      style={{
                        width: '100%',
                        aspectRatio: '1',
                        background: color.value,
                        border: selectedColor.name === color.name ? '3px solid var(--primary-blue)' : '2px solid var(--gray-border)',
                        borderRadius: 'var(--radius-md)',
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                      }}
                    />
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)', marginTop: '0.5rem', marginBottom: 0 }}>
                      {color.name}
                    </p>
                  </div>
                ))}
              </div>

              <button
                onClick={() => {
                  const message = `Hi, I'm interested in the ${selectedDesign.name} design in ${selectedColor.name} color. Can you provide a quote?`;
                  window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
                  onClose();
                }}
                style={{
                  width: '100%',
                  padding: '1rem',
                  marginTop: '2rem',
                  background: '#25D366',
                  color: 'white',
                  border: 'none',
                  borderRadius: 'var(--radius-md)',
                  cursor: 'pointer',
                  fontWeight: 'bold',
                  fontSize: '1rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                Get Quote for This Design
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
