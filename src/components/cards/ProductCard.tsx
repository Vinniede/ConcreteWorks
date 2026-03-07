import { Link } from "react-router-dom";
import { ProductType } from "../../constants/products";

interface ProductCardProps {
  product: ProductType;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="product-card">
        <div className="product-card-image">
          <img src={product.image} alt={product.name} />
        </div>
        <div className="product-card-content">
          <h3>{product.name}</h3>
          <p className="product-description">{product.description}</p>
          <div className="product-use-cases">
            <strong>Used for:</strong>
            <ul>
              {product.useCases.slice(0, 2).map((useCase, idx) => (
                <li key={idx}>{useCase}</li>
              ))}
            </ul>
          </div>
          <button className="view-details-btn">View Details {"->"}</button>
        </div>
      </div>
    </Link>
  );
};


