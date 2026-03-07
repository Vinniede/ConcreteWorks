import { Design } from "../../constants/designs";
import { useNavigate } from "react-router-dom";

interface DesignCardProps {
  design: Design;
}

export const DesignCard: React.FC<DesignCardProps> = ({ design }) => {
  const navigate = useNavigate();

  const difficultyStyle = {
    easy: {
      background: "var(--color-brand-base)",
      color: "var(--text-light)",
    },
    medium: {
      background: "var(--color-highlight)",
      color: "var(--text-primary)",
    },
    hard: {
      background: "var(--color-danger)",
      color: "var(--text-light)",
    },
  } as const;

  return (
    <div className="design-card">
      <div className="design-card-image">
        <img src={design.image} alt={design.name} />
        <div
          className="design-badge"
          style={difficultyStyle[design.difficulty]}
        >
          {design.difficulty.charAt(0).toUpperCase() +
            design.difficulty.slice(1)}
        </div>
      </div>
      <div className="design-card-content">
        <div className="design-category">{design.category}</div>
        <h3>{design.name}</h3>
        <p className="design-description">{design.description}</p>

        <div className="design-best-for">
          <strong>Best For:</strong>
          <div className="tags">
            {design.bestFor.map((area, idx) => (
              <span key={idx} className="tag">
                {area}
              </span>
            ))}
          </div>
        </div>

        <button className="view-design-btn" onClick={() => navigate("/contact")}>
          View Details {"->"}
        </button>
      </div>
    </div>
  );
};


