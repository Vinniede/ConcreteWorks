import { Service } from "../../constants/services";
import { useNavigate } from "react-router-dom";

interface ServiceCardProps {
  service: Service;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service }) => {
  const navigate = useNavigate();

  return (
    <div className="service-card">
      <div className="service-card-image">
        <img src={service.image} alt={service.name} />
      </div>
      <div className="service-card-content">
        <h3>{service.name}</h3>
        <p className="service-description">{service.description}</p>

        <div className="service-features">
          <strong>What's Included:</strong>
          <ul>
            {service.features.slice(0, 3).map((feature, idx) => (
              <li key={idx}>{feature}</li>
            ))}
          </ul>
        </div>

        {service.areas && (
          <div className="service-areas">
            <strong>Suitable For:</strong>
            <p>{service.areas.join(" • ")}</p>
          </div>
        )}

        <button className="inquiry-btn" onClick={() => navigate("/contact")}>
          Request Service {"->"}
        </button>
      </div>
    </div>
  );
};


