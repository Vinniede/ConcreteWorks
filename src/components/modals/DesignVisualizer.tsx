import { useState } from "react";
import { cabroDesigns } from "../../constants/designs";

interface DesignVisualizerProps {
  isOpen: boolean;
  onClose: () => void;
}

const cabroColors = [
  { name: "Red Terracotta", value: "#C1272D" },
  { name: "Black", value: "#1A1A1A" },
  { name: "Grey", value: "#808080" },
  { name: "Brown", value: "#8B4513" },
  { name: "Yellow", value: "#FFD700" },
  { name: "Cream", value: "#F5F5DC" },
];

export const DesignVisualizer: React.FC<DesignVisualizerProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedDesign, setSelectedDesign] = useState(cabroDesigns[0]);
  const [selectedColor, setSelectedColor] = useState(cabroColors[0]);

  if (!isOpen) return null;

  return (
    <>
      <div className="dv-overlay" onClick={onClose}>
        <div className="dv-modal" onClick={(e) => e.stopPropagation()}>
          <button className="dv-close" onClick={onClose} aria-label="Close visualizer">
            X
          </button>

          <h2>Cabro Design Visualizer</h2>

          <div className="dv-grid">
            <section>
              <h3>Preview</h3>
              <div className="dv-preview" style={{ background: selectedColor.value }}>
                {selectedDesign.image ? (
                  <img src={selectedDesign.image} alt={selectedDesign.name} />
                ) : (
                  <div className="dv-preview-fallback">{selectedDesign.name}</div>
                )}
              </div>

              <div className="dv-preview-meta">
                <p>
                  <strong>Design:</strong> {selectedDesign.name}
                </p>
                <p>
                  <strong>Color:</strong> {selectedColor.name}
                </p>
                <p>
                  <strong>Difficulty:</strong> {selectedDesign.difficulty}
                </p>
              </div>
            </section>

            <section>
              <h3>Design Patterns</h3>
              <div className="dv-design-grid">
                {cabroDesigns.map((design) => (
                  <button
                    key={design.id}
                    className={`dv-design-btn ${selectedDesign.id === design.id ? "dv-design-btn--active" : ""}`}
                    onClick={() => setSelectedDesign(design)}
                  >
                    {design.name}
                  </button>
                ))}
              </div>

              <h3>Colors</h3>
              <div className="dv-color-grid">
                {cabroColors.map((color) => (
                  <div key={color.name} className="dv-color-item">
                    <button
                      onClick={() => setSelectedColor(color)}
                      className={`dv-color-btn ${selectedColor.name === color.name ? "dv-color-btn--active" : ""}`}
                      style={{ background: color.value }}
                      aria-label={color.name}
                    />
                    <p>{color.name}</p>
                  </div>
                ))}
              </div>

              <button
                className="dv-whatsapp"
                onClick={() => {
                  const message = `Hi, I'm interested in the ${selectedDesign.name} design in ${selectedColor.name} color. Can you provide a quote?`;
                  window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank");
                  onClose();
                }}
              >
                Get Quote for This Design
              </button>
            </section>
          </div>
        </div>
      </div>

      <style>{`
        .dv-overlay {
          position: fixed;
          inset: 0;
          background: rgba(2, 6, 23, 0.62);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 1000;
          padding: 1rem;
        }

        .dv-modal {
          position: relative;
          width: min(920px, 100%);
          max-height: 92vh;
          overflow: auto;
          background: #fff;
          border-radius: 14px;
          border: 1px solid #dbeafe;
          box-shadow: 0 20px 50px rgba(15, 23, 42, 0.35);
          padding: 1rem;
        }

        .dv-close {
          position: absolute;
          top: 0.6rem;
          right: 0.6rem;
          border: none;
          background: #f1f5f9;
          color: #0f172a;
          width: 30px !important;
          height: 30px !important;
          min-width: 30px !important;
          min-height: 30px !important;
          border-radius: 999px;
          font-size: 0.84rem;
          font-weight: 700;
          line-height: 1;
          display: inline-flex;
          align-items: center;
          justify-content: center;
        }

        .dv-modal h2 {
          margin: 0 0 0.9rem;
          color: #1e3a8a;
          padding-right: 2.1rem;
          font-size: clamp(1.05rem, 2.4vw, 1.45rem);
        }

        .dv-grid {
          display: grid !important;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }

        .dv-grid h3 {
          margin: 0 0 0.65rem;
          color: #1e3a8a;
          font-size: 1rem;
        }

        .dv-preview {
          width: 100%;
          aspect-ratio: 1;
          border-radius: 12px;
          overflow: hidden;
          border: 2px solid #1e3a8a;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .dv-preview img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .dv-preview-fallback {
          color: #fff;
          font-size: 1.2rem;
          font-weight: 700;
          text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.45);
          text-align: center;
          padding: 1rem;
        }

        .dv-preview-meta {
          margin-top: 0.8rem;
        }

        .dv-preview-meta p {
          margin: 0 0 0.3rem;
          font-size: 0.86rem;
          color: #475569;
          line-height: 1.4;
        }

        .dv-design-grid {
          display: grid !important;
          grid-template-columns: 1fr 1fr;
          gap: 0.55rem;
          margin-bottom: 1rem;
        }

        .dv-design-btn {
          width: 100% !important;
          border: 1px solid #cbd5e1;
          background: #fff;
          color: #1e3a8a;
          border-radius: 10px;
          padding: 0.58rem 0.6rem;
          font-weight: 700;
          font-size: 0.8rem;
          text-align: center;
        }

        .dv-design-btn--active {
          border-color: #ea580c;
          background: #ea580c;
          color: #fff;
        }

        .dv-color-grid {
          display: grid !important;
          grid-template-columns: repeat(3, 1fr);
          gap: 0.55rem;
        }

        .dv-color-item {
          text-align: center;
        }

        .dv-color-btn {
          width: 100% !important;
          aspect-ratio: 1;
          border-radius: 10px;
          border: 2px solid #cbd5e1;
        }

        .dv-color-btn--active {
          border-color: #1e3a8a;
        }

        .dv-color-item p {
          margin: 0.35rem 0 0;
          color: #64748b;
          font-size: 0.72rem;
          line-height: 1.35;
        }

        .dv-whatsapp {
          margin-top: 0.9rem;
          width: 100% !important;
          border: none;
          border-radius: 10px;
          padding: 0.72rem 0.8rem;
          background: #25d366;
          color: #fff;
          font-size: 0.9rem;
          font-weight: 700;
        }

        @media (max-width: 760px) {
          .dv-grid {
            grid-template-columns: 1fr;
          }

          .dv-modal {
            padding: 0.9rem;
          }
        }
      `}</style>
    </>
  );
};