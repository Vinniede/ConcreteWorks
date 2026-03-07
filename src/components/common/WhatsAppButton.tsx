import { useEffect, useRef, useState } from "react";

interface WhatsAppButtonProps {
  phoneNumber?: string;
  message?: string;
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  phoneNumber = "+254722000000",
  message = "Hi Gitau Concrete Works, I'm interested in your cabro products",
}) => {
  const [showMenu, setShowMenu] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const encodeMessage = (text: string) => encodeURIComponent(text);
  const cleanPhone = phoneNumber.replace(/\D/g, "");

  const buildWhatsAppUrl = (customMessage: string) =>
    `https://wa.me/${cleanPhone}?text=${encodeMessage(customMessage)}`;

  const menuOptions = [
    { label: "Order Now", message },
    { label: "Get Quote", message: "I'd like to get a quote for my project" },
    { label: "Ask Questions", message: "I have some questions about your products" },
  ];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!containerRef.current) {
        return;
      }

      if (!containerRef.current.contains(event.target as Node)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <div className="wa-float" ref={containerRef}>
        {showMenu && (
          <div className="wa-menu" role="menu" aria-label="WhatsApp actions" id="wa-menu">
            {menuOptions.map((option, idx) => (
              <button
                key={option.label}
                onClick={() => {
                  window.open(buildWhatsAppUrl(option.message), "_blank");
                  setShowMenu(false);
                }}
                className={`wa-menu__item ${idx === 0 ? "wa-menu__item--primary" : ""}`}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}

        <button
          onClick={() => setShowMenu((prev) => !prev)}
          className="wa-main"
          aria-label={showMenu ? "Close WhatsApp menu" : "Open WhatsApp menu"}
          aria-expanded={showMenu}
          aria-controls="wa-menu"
        >
          <svg viewBox="0 0 32 32" role="img" aria-hidden="true" className="wa-main__icon">
            <path
              fill="currentColor"
              d="M16.01 3.2c-7.04 0-12.74 5.7-12.74 12.73 0 2.23.58 4.42 1.68 6.34L3.2 28.8l6.7-1.73a12.7 12.7 0 0 0 6.1 1.56h.01c7.03 0 12.74-5.7 12.74-12.73A12.74 12.74 0 0 0 16.01 3.2Zm0 23.27h-.01a10.5 10.5 0 0 1-5.35-1.46l-.38-.22-3.98 1.02 1.06-3.88-.24-.4a10.56 10.56 0 1 1 8.9 4.94Zm5.79-7.88c-.32-.16-1.9-.94-2.2-1.05-.29-.1-.5-.16-.72.16-.2.32-.8 1.05-.98 1.27-.18.2-.36.24-.68.08-.32-.16-1.35-.5-2.57-1.6-.95-.85-1.6-1.9-1.79-2.22-.18-.32-.02-.5.14-.66.14-.14.32-.36.48-.54.16-.18.22-.32.32-.54.1-.22.05-.4-.02-.56-.08-.16-.72-1.74-1-2.39-.26-.62-.52-.54-.72-.55l-.62-.02c-.22 0-.56.08-.86.4-.29.32-1.12 1.1-1.12 2.67s1.15 3.1 1.3 3.31c.16.22 2.24 3.42 5.43 4.8.76.33 1.36.53 1.83.68.77.24 1.48.2 2.04.12.62-.1 1.9-.78 2.16-1.54.27-.76.27-1.42.19-1.54-.08-.12-.29-.2-.62-.36Z"
            />
          </svg>
        </button>
      </div>

      <style>{`
        .wa-float {
          position: fixed;
          right: clamp(0.75rem, 2vw, 1.5rem);
          bottom: clamp(0.75rem, 2vw, 1.5rem);
          z-index: 999;
        }

        .wa-main {
          width: clamp(52px, 8vw, 62px);
          height: clamp(52px, 8vw, 62px);
          min-width: clamp(52px, 8vw, 62px);
          min-height: clamp(52px, 8vw, 62px);
          max-width: clamp(52px, 8vw, 62px);
          max-height: clamp(52px, 8vw, 62px);
          aspect-ratio: 1 / 1;
          flex: 0 0 auto;
          border: none;
          border-radius: 50%;
          background: radial-gradient(circle at 30% 30%, #42e885 0%, #25d366 65%, #1fa855 100%);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 8px 22px rgba(37, 211, 102, 0.45);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
          animation: waPulse 2s infinite;
        }

        .wa-main:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 10px 28px rgba(37, 211, 102, 0.5);
        }

        .wa-main__icon {
          width: clamp(26px, 4.2vw, 32px);
          height: clamp(26px, 4.2vw, 32px);
        }

        .wa-menu {
          position: absolute;
          right: 0;
          bottom: calc(100% + 0.65rem);
          min-width: clamp(150px, 34vw, 190px);
          background: #ffffff;
          border-radius: 12px;
          border: 1px solid #e5e7eb;
          overflow: hidden;
          box-shadow: 0 14px 32px rgba(15, 23, 42, 0.2);
          animation: waSlideUp 0.2s ease;
        }

        .wa-menu__item {
          display: block;
          width: 100%;
          border: none;
          background: #ffffff;
          color: #111827;
          text-align: left;
          font-size: clamp(0.82rem, 2.4vw, 0.92rem);
          font-weight: 600;
          padding: 0.75rem 0.85rem;
          border-bottom: 1px solid #eef2f7;
        }

        .wa-menu__item:last-child {
          border-bottom: none;
        }

        .wa-menu__item:hover {
          background: #ecfdf3;
          color: #0f8b42;
        }

        .wa-menu__item--primary {
          background: #25d366;
          color: #ffffff;
        }

        .wa-menu__item--primary:hover {
          background: #1fb75a;
          color: #ffffff;
        }

        @media (max-width: 480px) {
          .wa-float .wa-main {
            width: 54px !important;
            height: 54px !important;
            min-width: 54px !important;
            min-height: 54px !important;
            max-width: 54px !important;
            max-height: 54px !important;
            aspect-ratio: 1 / 1 !important;
            border-radius: 50% !important;
          }

          .wa-menu {
            min-width: 148px;
          }

          .wa-menu__item {
            padding: 0.68rem 0.75rem;
          }
        }

        @media (min-width: 1024px) {
          .wa-float {
            right: 1.8rem;
            bottom: 1.8rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .wa-main {
            animation: none;
          }

          .wa-menu {
            animation: none;
          }
        }

        @keyframes waSlideUp {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes waPulse {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.45);
          }
          70% {
            box-shadow: 0 0 0 12px rgba(37, 211, 102, 0);
          }
        }
      `}</style>
    </>
  );
};
