import React from "react";
import PropTypes from "prop-types";
import style from "../../../styles/Menu.module.scss";

const MenuOptions = ({ products, onOpenDialog }) => {
  return (
    <div className={style.menuOption}>
      {products.map((product, index) => (
        <div className={style.menuOptionContent} key={`menuOption-${product.name}-${index}`}>
          <div className={style.menuTitle}>
            <h4>{product.name}</h4>

            <p className={style.menuDescription}>{product.description}</p>
            <h4>
              ${product.price}
              <span>{product.decimalPrice}</span>
            </h4>
          </div>
          <div
            style={{
              backgroundImage: `url(${product?.img})`,
              width: " 150px",
              height: "120px",
              borderRadius: "6%",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            onClick={onOpenDialog}
          >
          </div>
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
    })
  ).isRequired,
};

export default MenuOptions;
