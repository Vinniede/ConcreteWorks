import { useMemo, useState } from "react";

interface CalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type Scenario = "product_only" | "product_install" | "full";
type Category = "cabro" | "cobblestone" | "kerbstone";

interface PatternRate {
  pattern: string;
  pricePerM2: number;
  unitsPerM2: number;
}

interface LineItem {
  id: number;
  category: Category;
  pattern: string;
  area: string;
}

const patternCatalog: Record<Category, PatternRate[]> = {
  cabro: [
    { pattern: "Uni Paver", pricePerM2: 900, unitsPerM2: 50 },
    { pattern: "Quad Paver", pricePerM2: 1100, unitsPerM2: 46 },
    { pattern: "Zigzag", pricePerM2: 1200, unitsPerM2: 44 },
    { pattern: "Hexagon", pricePerM2: 1300, unitsPerM2: 38 },
    { pattern: "Arrow", pricePerM2: 1250, unitsPerM2: 42 },
    { pattern: "T-shaped", pricePerM2: 1350, unitsPerM2: 40 },
  ],
  cobblestone: [
    { pattern: "Square Cobbles", pricePerM2: 1500, unitsPerM2: 52 },
    { pattern: "Natural Stone Cobbles", pricePerM2: 1650, unitsPerM2: 50 },
    { pattern: "Decorative Cobble Sets", pricePerM2: 1800, unitsPerM2: 48 },
  ],
  kerbstone: [
    { pattern: "Straight Kerbs", pricePerM2: 1400, unitsPerM2: 12 },
    { pattern: "Radius Kerbs", pricePerM2: 1500, unitsPerM2: 12 },
    { pattern: "Sloped Kerbs", pricePerM2: 1550, unitsPerM2: 12 },
    { pattern: "Road Divider Kerbs", pricePerM2: 1700, unitsPerM2: 10 },
  ],
};

const designAdjustments: Record<string, number> = {
  None: 0,
  Standard: 0.08,
  Premium: 0.15,
};

const installationRatePerM2 = 220;

const categoryLabel: Record<Category, string> = {
  cabro: "Cabro",
  cobblestone: "Cobblestone",
  kerbstone: "Kerb Stone",
};

export const CalculatorModal: React.FC<CalculatorModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [scenario, setScenario] = useState<Scenario>("product_only");
  const [designLevel, setDesignLevel] = useState("Standard");
  const [estimateReady, setEstimateReady] = useState(false);
  const [items, setItems] = useState<LineItem[]>([
    { id: 1, category: "cabro", pattern: "Uni Paver", area: "" },
  ]);

  const addItem = () => {
    const id = Date.now();
    setItems((prev) => [
      ...prev,
      { id, category: "cabro", pattern: patternCatalog.cabro[0].pattern, area: "" },
    ]);
  };

  const removeItem = (id: number) => {
    setItems((prev) => (prev.length > 1 ? prev.filter((item) => item.id !== id) : prev));
  };

  const updateItem = (id: number, field: keyof LineItem, value: string) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;

        if (field === "category") {
          const category = value as Category;
          return {
            ...item,
            category,
            pattern: patternCatalog[category][0].pattern,
          };
        }

        return {
          ...item,
          [field]: value,
        };
      }),
    );
  };

  const estimate = useMemo(() => {
    const rows = items
      .map((item) => {
        const areaNum = Number(item.area);
        if (!areaNum || areaNum <= 0) return null;

        const pattern = patternCatalog[item.category].find((p) => p.pattern === item.pattern);
        if (!pattern) return null;

        const unitsRequired = Math.ceil(areaNum * pattern.unitsPerM2);
        const productCost = areaNum * pattern.pricePerM2;

        return {
          ...item,
          areaNum,
          unitsRequired,
          productCost,
          pricePerM2: pattern.pricePerM2,
        };
      })
      .filter(Boolean) as Array<{
      id: number;
      category: Category;
      pattern: string;
      areaNum: number;
      unitsRequired: number;
      productCost: number;
      pricePerM2: number;
    }>;

    if (rows.length === 0) {
      return null;
    }

    const totalArea = rows.reduce((sum, row) => sum + row.areaNum, 0);
    const totalUnits = rows.reduce((sum, row) => sum + row.unitsRequired, 0);
    const totalProductCost = rows.reduce((sum, row) => sum + row.productCost, 0);

    const hasInstallation = scenario === "product_install" || scenario === "full";
    const installationCost = hasInstallation ? totalArea * installationRatePerM2 : 0;

    const designPercent = scenario === "full" ? designAdjustments[designLevel] ?? 0 : 0;
    const designAdjustmentCost = totalProductCost * designPercent;

    const totalEstimate = totalProductCost + installationCost + designAdjustmentCost;

    return {
      rows,
      totalArea,
      totalUnits,
      totalProductCost,
      installationCost,
      designAdjustmentCost,
      totalEstimate,
      hasInstallation,
      designPercent,
    };
  }, [items, scenario, designLevel]);

  const handleCalculate = () => {
    if (!estimate) {
      alert("Please add at least one valid area size greater than 0.");
      return;
    }

    setEstimateReady(true);
  };

  const resetToEdit = () => setEstimateReady(false);

  const handleWhatsApp = () => {
    if (!estimate) return;

    const scenarioLabel =
      scenario === "product_only"
        ? "Product only"
        : scenario === "product_install"
          ? "Product + Installation"
          : "Product + Design + Installation";

    const lines = estimate.rows
      .map(
        (row, idx) =>
          `${idx + 1}. ${categoryLabel[row.category]} - ${row.pattern} | ${row.areaNum} m2 | ${row.unitsRequired} units`,
      )
      .join("\n");

    const message = [
      "Hi, I need a quote with the following details:",
      `Scenario: ${scenarioLabel}`,
      `Total Area: ${estimate.totalArea} m2`,
      lines,
      `Estimated total: KES ${estimate.totalEstimate.toLocaleString()}`,
    ].join("\n");

    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, "_blank");
    onClose();
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="calc-overlay" onClick={onClose}>
        <div className="calc-modal" onClick={(e) => e.stopPropagation()}>
          <button className="calc-close" onClick={onClose} aria-label="Close calculator">
            X
          </button>

          <h2>Cabro, Cobble and Kerb Project Calculator</h2>

          {!estimateReady ? (
            <div className="calc-form">
              <div className="calc-field">
                <label>Scenario</label>
                <select
                  value={scenario}
                  onChange={(e) => setScenario(e.target.value as Scenario)}
                >
                  <option value="product_only">Product only (buy cabros/cobbles/kerbs)</option>
                  <option value="product_install">Product + installation service</option>
                  <option value="full">Product + design pattern + installation</option>
                </select>
              </div>

              {scenario === "full" && (
                <div className="calc-field">
                  <label>Design/pattern adjustment</label>
                  <select value={designLevel} onChange={(e) => setDesignLevel(e.target.value)}>
                    <option value="None">None (0%)</option>
                    <option value="Standard">Standard (8%)</option>
                    <option value="Premium">Premium (15%)</option>
                  </select>
                </div>
              )}

              <div className="calc-lines-header">
                <strong>Products and areas</strong>
                <button type="button" className="calc-add" onClick={addItem}>
                  + Add Product Area
                </button>
              </div>

              {items.map((item) => (
                <div key={item.id} className="calc-line-card">
                  <div className="calc-grid-three">
                    <div className="calc-field">
                      <label>Category</label>
                      <select
                        value={item.category}
                        onChange={(e) => updateItem(item.id, "category", e.target.value)}
                      >
                        <option value="cabro">Cabro</option>
                        <option value="cobblestone">Cobblestone</option>
                        <option value="kerbstone">Kerb Stone</option>
                      </select>
                    </div>

                    <div className="calc-field">
                      <label>Pattern</label>
                      <select
                        value={item.pattern}
                        onChange={(e) => updateItem(item.id, "pattern", e.target.value)}
                      >
                        {patternCatalog[item.category].map((opt) => (
                          <option key={opt.pattern} value={opt.pattern}>
                            {opt.pattern}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="calc-field">
                      <label>Area size (m2)</label>
                      <input
                        type="number"
                        min="1"
                        placeholder="e.g. 120"
                        value={item.area}
                        onChange={(e) => updateItem(item.id, "area", e.target.value)}
                      />
                    </div>
                  </div>

                  <button
                    type="button"
                    className="calc-remove"
                    onClick={() => removeItem(item.id)}
                    disabled={items.length === 1}
                  >
                    Remove
                  </button>
                </div>
              ))}

              <button className="calc-primary" onClick={handleCalculate}>
                Calculate Estimate
              </button>
            </div>
          ) : (
            <div className="calc-results">
              {estimate && (
                <>
                  {estimate.rows.map((row, idx) => (
                    <div key={row.id} className="calc-result-card">
                      <h4>
                        Item {idx + 1}: {categoryLabel[row.category]} - {row.pattern}
                      </h4>
                      <div className="calc-row">
                        <span>Area size</span>
                        <strong>{row.areaNum} m2</strong>
                      </div>
                      <div className="calc-row">
                        <span>Number of blocks required</span>
                        <strong>{row.unitsRequired.toLocaleString()} units</strong>
                      </div>
                      <div className="calc-row">
                        <span>Product cost</span>
                        <strong>KES {row.productCost.toLocaleString()}</strong>
                      </div>
                    </div>
                  ))}

                  <div className="calc-total-block">
                    <div className="calc-row">
                      <span>Total area size</span>
                      <strong>{estimate.totalArea} m2</strong>
                    </div>
                    <div className="calc-row">
                      <span>Total number of blocks required</span>
                      <strong>{estimate.totalUnits.toLocaleString()} units</strong>
                    </div>
                    <div className="calc-row">
                      <span>Total product cost</span>
                      <strong>KES {estimate.totalProductCost.toLocaleString()}</strong>
                    </div>
                    <div className="calc-row">
                      <span>Installation cost</span>
                      <strong>
                        {estimate.hasInstallation
                          ? `KES ${estimate.installationCost.toLocaleString()}`
                          : "Not selected"}
                      </strong>
                    </div>
                    <div className="calc-row">
                      <span>Design/pattern adjustments</span>
                      <strong>
                        {estimate.designAdjustmentCost > 0
                          ? `KES ${estimate.designAdjustmentCost.toLocaleString()} (${Math.round(
                              estimate.designPercent * 100,
                            )}%)`
                          : "Not selected"}
                      </strong>
                    </div>
                  </div>

                  <div className="calc-total">
                    <span>Total project estimate</span>
                    <strong>KES {estimate.totalEstimate.toLocaleString()}</strong>
                  </div>
                </>
              )}

              <p className="calc-note">
                This estimate is approximate and may change based on site condition,
                transport, and final design scope.
              </p>

              <div className="calc-actions">
                <button className="calc-secondary" onClick={resetToEdit}>
                  Recalculate
                </button>
                <button className="calc-whatsapp" onClick={handleWhatsApp}>
                  Continue on WhatsApp
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        .calc-overlay {
          position: fixed;
          inset: 0;
          background: rgba(2, 6, 23, 0.62);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1rem;
          z-index: 1000;
        }

        .calc-modal {
          position: relative;
          width: min(780px, 100%);
          max-height: 92vh;
          overflow: auto;
          background: #fff;
          border-radius: 14px;
          border: 1px solid #dbeafe;
          box-shadow: 0 20px 50px rgba(15, 23, 42, 0.35);
          padding: 1.1rem;
        }

        .calc-close {
          position: absolute;
          top: 0.65rem;
          right: 0.65rem;
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

        .calc-modal h2 {
          margin: 0 0 0.95rem;
          color: #1e3a8a;
          font-size: clamp(1.05rem, 2.4vw, 1.45rem);
          padding-right: 2.2rem;
        }

        .calc-form,
        .calc-results {
          display: flex !important;
          flex-direction: column !important;
          gap: 0.75rem;
        }

        .calc-lines-header {
          display: flex !important;
          justify-content: space-between;
          align-items: center;
          gap: 0.7rem;
          margin-top: 0.15rem;
          color: #0f172a;
        }

        .calc-line-card,
        .calc-result-card,
        .calc-total-block {
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          padding: 0.72rem;
        }

        .calc-result-card h4 {
          margin: 0 0 0.55rem;
          color: #1e3a8a;
          font-size: 0.92rem;
        }

        .calc-grid-three {
          display: grid !important;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 0.65rem;
        }

        .calc-field label {
          display: block;
          margin-bottom: 0.26rem;
          font-weight: 600;
          color: #0f172a;
          font-size: 0.82rem;
        }

        .calc-field input,
        .calc-field select {
          width: 100%;
          border: 1px solid #cbd5e1;
          border-radius: 10px;
          padding: 0.58rem 0.68rem;
          font-size: 0.9rem;
          background: #fff;
        }

        .calc-add,
        .calc-remove,
        .calc-primary,
        .calc-secondary,
        .calc-whatsapp {
          border: none;
          border-radius: 10px;
          padding: 0.62rem 0.86rem;
          font-size: 0.85rem;
          font-weight: 700;
          cursor: pointer;
        }

        .calc-add {
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          color: #1e3a8a;
          width: auto !important;
        }

        .calc-remove {
          background: #fee2e2;
          border: 1px solid #fecaca;
          color: #b91c1c;
          margin-top: 0.62rem;
          width: auto !important;
        }

        .calc-remove:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .calc-primary {
          background: #ea580c;
          color: #fff;
        }

        .calc-row {
          display: flex !important;
          align-items: center;
          justify-content: space-between;
          gap: 0.8rem;
          border-bottom: 1px solid #e2e8f0;
          padding: 0.4rem 0;
          color: #334155;
          font-size: 0.88rem;
        }

        .calc-row:last-child {
          border-bottom: none;
        }

        .calc-total {
          margin-top: 0.15rem;
          background: #1e3a8a;
          color: #fff;
          border-radius: 10px;
          padding: 0.72rem;
          display: flex !important;
          justify-content: space-between;
          align-items: center;
          font-size: 0.95rem;
          font-weight: 700;
        }

        .calc-note {
          margin: 0.2rem 0 0;
          color: #64748b;
          font-size: 0.8rem;
          line-height: 1.45;
        }

        .calc-actions {
          display: grid !important;
          grid-template-columns: 1fr 1fr;
          gap: 0.62rem;
        }

        .calc-secondary {
          background: #eff6ff;
          color: #1e3a8a;
          border: 1px solid #bfdbfe;
        }

        .calc-whatsapp {
          background: #25d366;
          color: #fff;
        }

        @media (max-width: 760px) {
          .calc-grid-three,
          .calc-actions {
            grid-template-columns: 1fr;
          }

          .calc-add,
          .calc-remove {
            width: 100% !important;
          }
        }
      `}</style>
    </>
  );
};