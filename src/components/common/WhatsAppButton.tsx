import { useState } from 'react';

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ 
  phoneNumber = '+254722000000',
  message = 'Hi Gitau Concrete Works, I\'m interested in your cabro products'
}) => {
  const [showMenu, setShowMenu] = useState(false);

  const encodeMessage = (text: string) => {
    return encodeURIComponent(text);
  };

  const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\D/g, '')}?text=${encodeMessage(message)}`;

  const handleOrderClick = () => {
    window.open(whatsappUrl, '_blank');
  };

  const menuOptions = [
    { label: 'Order Now', action: handleOrderClick },
    { label: 'Get Quote', action: () => window.open(`${whatsappUrl}?text=${encodeMessage('I\'d like to get a quote for my project')}`, '_blank') },
    { label: 'Ask Questions', action: () => window.open(`${whatsappUrl}?text=${encodeMessage('I have some questions about your products')}`, '_blank') }
  ];

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 999,
      }}>
        {/* Menu Options */}
        {showMenu && (
          <div style={{
            position: 'absolute',
            bottom: '70px',
            right: 0,
            background: 'white',
            borderRadius: 'var(--radius-lg)',
            boxShadow: 'var(--shadow-xl)',
            overflow: 'hidden',
            minWidth: '180px',
            animation: 'slideUp 0.3s ease'
          }}>
            {menuOptions.map((option, idx) => (
              <button
                key={idx}
                onClick={() => {
                  option.action();
                  setShowMenu(false);
                }}
                style={{
                  display: 'block',
                  width: '100%',
                  padding: '1rem',
                  border: 'none',
                  background: idx === 0 ? 'var(--primary-blue)' : 'white',
                  color: idx === 0 ? 'white' : 'var(--text-primary)',
                  textAlign: 'left',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                  fontWeight: '600',
                  borderBottom: idx < menuOptions.length - 1 ? '1px solid var(--gray-border)' : 'none',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  if (idx !== 0) {
                    e.currentTarget.style.background = 'var(--primary-blue-lighter)';
                    e.currentTarget.style.color = 'var(--primary-blue)';
                  }
                }}
                onMouseLeave={(e) => {
                  if (idx !== 0) {
                    e.currentTarget.style.background = 'white';
                    e.currentTarget.style.color = 'var(--text-primary)';
                  }
                }}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}

        {/* Main Button */}
        <button
          onClick={() => setShowMenu(!showMenu)}
          style={{
            position: 'relative',
            width: '60px',
            height: '60px',
            borderRadius: '50%',
            background: '#25D366',
            border: 'none',
            cursor: 'pointer',
            boxShadow: 'var(--shadow-lg)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.8rem',
            transition: 'all 0.3s ease',
            animation: 'pulse 2s infinite'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'scale(1.1)';
            e.currentTarget.style.boxShadow = '0 8px 24px rgba(37, 211, 102, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = 'var(--shadow-lg)';
          }}
        >
          💬
        </button>
      </div>

      <style>{`
        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7);
          }
          50% {
            box-shadow: 0 0 0 10px rgba(37, 211, 102, 0);
          }
        }
      `}</style>
    </>
  );
};
