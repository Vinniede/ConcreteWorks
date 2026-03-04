import { Design } from "../../constants/designs";

interface DesignCardProps {
  design: Design;
}

export const DesignCard: React.FC<DesignCardProps> = ({ design }) => {
  const difficultyColor = {
    easy: "#10B981",
    medium: "#F59E0B",
    hard: "#EF4444",
  };

  return (
    <div className="design-card">
      <div className="design-card-image">
        <img src={design.image} alt={design.name} />
        <div
          className="design-badge"
          style={{ background: difficultyColor[design.difficulty] }}
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

        <button className="view-design-btn">View Details →</button>
      </div>
    </div>
  );
};
