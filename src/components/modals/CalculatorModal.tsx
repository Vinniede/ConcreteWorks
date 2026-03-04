import { useState } from "react";

interface CalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CabroPrice {
  [key: string]: number;
}

export const CalculatorModal: React.FC<CalculatorModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [area, setArea] = useState("");
  const [pattern, setPattern] = useState("Uni Paver");
  const [installation, setInstallation] = useState("diy");
  const [estimate, setEstimate] = useState<any>(null);

  const cabroPrices: CabroPrice = {
    "Uni Paver": 900,
    "Quad Paver": 1100,
    Zigzag: 1200,
    Hexagon: 1300,
    Arrow: 1250,
    "T-shaped": 1350,
  };

  const installationCosts: CabroPrice = {
    diy: 0,
    professional: 200,
  };

  const calculateEstimate = () => {
    const areaNum = parseFloat(area);
    if (!areaNum || areaNum <= 0) {
      alert("Please enter a valid area");
      return;
    }

    const unitPrice = cabroPrices[pattern] || 900;
    const materialCost = areaNum * unitPrice;
    const installCost = areaNum * (installationCosts[installation] || 0);
    const deliveryFee = 1500;
    const totalCost = materialCost + installCost + deliveryFee;
    const paversNeeded = Math.ceil(areaNum * 55);

    setEstimate({
      area: areaNum,
      pattern,
      installation,
      unitPrice,
      materialCost,
      installCost,
      deliveryFee,
      totalCost,
      paversNeeded,
    });
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Modal Overlay */}
      <div
        onClick={onClose}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "rgba(0, 0, 0, 0.6)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1000,
        }}
      >
        {/* Modal Content */}
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            background: "white",
            borderRadius: "var(--radius-lg)",
            padding: "2rem",
            maxWidth: "600px",
            width: "90%",
            maxHeight: "90vh",
            overflow: "auto",
            boxShadow: "var(--shadow-xl)",
            position: "relative",
          }}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            style={{
              position: "absolute",
              top: "1rem",
              right: "1rem",
              background: "none",
              border: "none",
              fontSize: "1.5rem",
              cursor: "pointer",
              color: "var(--text-secondary)",
            }}
          >
            ✕
          </button>

          <h2
            style={{
              color: "var(--primary-blue)",
              marginBottom: "1.5rem",
              marginTop: 0,
            }}
          >
            💰 Cabro Cost Estimator
          </h2>

          {!estimate ? (
            <>
              {/* Input Section */}
              <div style={{ marginBottom: "1.5rem" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: "bold",
                    color: "var(--primary-blue)",
                  }}
                >
                  Project Area (m²)
                </label>
                <input
                  type="number"
                  placeholder="e.g., 120"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "2px solid var(--primary-blue)",
                    borderRadius: "var(--radius-md)",
                    fontSize: "1rem",
                    boxSizing: "border-box",
                  }}
                />
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: "bold",
                    color: "var(--primary-blue)",
                  }}
                >
                  Cabro Pattern
                </label>
                <select
                  value={pattern}
                  onChange={(e) => setPattern(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "2px solid var(--primary-blue)",
                    borderRadius: "var(--radius-md)",
                    fontSize: "1rem",
                    boxSizing: "border-box",
                  }}
                >
                  <option>Uni Paver</option>
                  <option>Quad Paver</option>
                  <option>Zigzag</option>
                  <option>Hexagon</option>
                  <option>Arrow</option>
                  <option>T-shaped</option>
                </select>
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <label
                  style={{
                    display: "block",
                    marginBottom: "0.5rem",
                    fontWeight: "bold",
                    color: "var(--primary-blue)",
                  }}
                >
                  Installation
                </label>
                <select
                  value={installation}
                  onChange={(e) => setInstallation(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "0.75rem",
                    border: "2px solid var(--primary-blue)",
                    borderRadius: "var(--radius-md)",
                    fontSize: "1rem",
                    boxSizing: "border-box",
                  }}
                >
                  <option value="diy">DIY Installation (No cost)</option>
                  <option value="professional">
                    Professional Installation (KES 200/m²)
                  </option>
                </select>
              </div>

              <button
                onClick={calculateEstimate}
                style={{
                  width: "100%",
                  padding: "1rem",
                  background: "var(--accent-orange)",
                  color: "white",
                  border: "none",
                  borderRadius: "var(--radius-md)",
                  fontSize: "1rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#EA580C";
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "var(--accent-orange)";
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                Calculate Estimate
              </button>
            </>
          ) : (
            <>
              {/* Results Section */}
              <div
                style={{
                  background: "var(--primary-blue-lighter)",
                  padding: "1.5rem",
                  borderRadius: "var(--radius-md)",
                  marginBottom: "1.5rem",
                }}
              >
                <h3
                  style={{
                    color: "var(--primary-blue)",
                    marginTop: 0,
                    marginBottom: "1rem",
                  }}
                >
                  Estimate Breakdown
                </h3>

                <div style={{ display: "grid", gap: "1rem" }}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      paddingBottom: "0.5rem",
                      borderBottom: "1px solid var(--gray-border)",
                    }}
                  >
                    <span>Project Area</span>
                    <strong>{estimate.area} m²</strong>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      paddingBottom: "0.5rem",
                      borderBottom: "1px solid var(--gray-border)",
                    }}
                  >
                    <span>Cabro Pattern</span>
                    <strong>{estimate.pattern}</strong>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      paddingBottom: "0.5rem",
                      borderBottom: "1px solid var(--gray-border)",
                    }}
                  >
                    <span>Price per m²</span>
                    <strong>KES {estimate.unitPrice.toLocaleString()}</strong>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      paddingBottom: "0.5rem",
                      borderBottom: "1px solid var(--gray-border)",
                    }}
                  >
                    <span>Pavers Needed (approx)</span>
                    <strong>
                      {estimate.paversNeeded.toLocaleString()} pieces
                    </strong>
                  </div>

                  <div
                    style={{
                      marginTop: "1rem",
                      paddingTop: "1rem",
                      borderTop: "2px solid var(--primary-blue)",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "0.5rem",
                      }}
                    >
                      <span>Material Cost</span>
                      <span>KES {estimate.materialCost.toLocaleString()}</span>
                    </div>
                    {estimate.installCost > 0 && (
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          marginBottom: "0.5rem",
                        }}
                      >
                        <span>Installation</span>
                        <span>KES {estimate.installCost.toLocaleString()}</span>
                      </div>
                    )}
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: "0.5rem",
                      }}
                    >
                      <span>Delivery to Nairobi</span>
                      <span>KES {estimate.deliveryFee.toLocaleString()}</span>
                    </div>

                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "1rem",
                        padding: "1rem",
                        background: "var(--primary-blue)",
                        color: "white",
                        borderRadius: "var(--radius-md)",
                        fontSize: "1.1rem",
                        fontWeight: "bold",
                      }}
                    >
                      <span>TOTAL ESTIMATE</span>
                      <span>KES {estimate.totalCost.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>

              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.85rem",
                  marginBottom: "1rem",
                }}
              >
                💡 This is an approximate estimate. Actual costs may vary based
                on location and project requirements.
              </p>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: "1rem",
                }}
              >
                <button
                  onClick={() => setEstimate(null)}
                  style={{
                    padding: "0.75rem",
                    background: "white",
                    color: "var(--primary-blue)",
                    border: "2px solid var(--primary-blue)",
                    borderRadius: "var(--radius-md)",
                    cursor: "pointer",
                    fontWeight: "bold",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background =
                      "var(--primary-blue-lighter)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "white";
                  }}
                >
                  Recalculate
                </button>
                <button
                  onClick={() => {
                    const message = `Hi, I need a quote for ${estimate.area}m² of ${estimate.pattern} cabro. Total estimate: KES ${estimate.totalCost.toLocaleString()}`;
                    window.open(
                      `https://wa.me/?text=${encodeURIComponent(message)}`,
                      "_blank",
                    );
                    onClose();
                  }}
                  style={{
                    padding: "0.75rem",
                    background: "#25D366",
                    color: "white",
                    border: "none",
                    borderRadius: "var(--radius-md)",
                    cursor: "pointer",
                    fontWeight: "bold",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                  }}
                >
                  Order on WhatsApp
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};
