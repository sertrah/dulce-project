import React from "react";
import PropTypes from "prop-types";

const MenuOptions = ({ products }) => {
  return (
    <div className="menuOption">
      {products.map((product, index) => (
        <div className="menuOptionContent" key={`menuOption-${product.name}-${index}`}>
          <div>
            <h4>{product.name}</h4>
            <h4>
              ${product.price}
              <span>{product.decimalPrice}</span>
            </h4>
          </div>
          <p>{product.description}</p>
        </div>
      ))}
    </div>
  );
};
MenuOptions.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.string.isRequired,
      decimalPrice: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default MenuOptions;
