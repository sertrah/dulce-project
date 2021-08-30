import React from "react";
import PropTypes from "prop-types";
import style from "../../../styles/Menu.module.scss";

const MenuOptions = ({ products }) => {
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
          <img
            src="https://www.superama.com.mx/views/micrositio/recetas/images/masbuscadas/omelette/Web_fotoreceta.jpg"
            alt="{product.name}"
          />
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
