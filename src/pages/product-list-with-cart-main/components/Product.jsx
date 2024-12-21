import React from "react";
import styles from "./product.module.css";

import cartIcon from "../assets/images/icon-add-to-cart.svg";
import incrementIcon from "../assets/images/icon-increment-quantity.svg";
import decrementIcon from "../assets/images/icon-decrement-quantity.svg";

export default function Product({
  product,
  cart,
  onIncreaseProduct,
  onDecreaseProduct,
}) {
  const qty = cart.find(item => item.name === product.name)?.qty
  const activeStyle = {
    border: qty? '1px solid hsl(14, 86%, 42%)':'none'
  }
  return (
    <div className={styles.productCard} key={product.name}>
      <div className={styles.imgContainer} style={activeStyle}>
        <img src={product.img.desktop} alt="" className={styles.desktop}  />
        <img src={product.img.mobile} alt="" className={styles.mobile}  />
        <img src={product.img.tablet} alt="" className={styles.tablet}  />
      </div>
      {!qty ? (
        <button
          className={styles.addToCart}
          onClick={() => onIncreaseProduct(product)}
        >
          <img src={cartIcon} alt="" />
          Add to Cart
        </button>
      ) : (
        <div className={styles.addProduct}>
          <button
            className={styles.decrease}
            onClick={() => onDecreaseProduct(product)}
          >
            <img src={decrementIcon} alt="" />
          </button>
          <p className={styles.productQty}>{qty}</p>
          <button
            className={styles.increase}
            onClick={() => onIncreaseProduct(product)}
          >
            <img src={incrementIcon} alt="" />
          </button>
        </div>
      )}

      <p className={styles.productType}>{product.type}</p>
      <p className={styles.productName}>{product.name}</p>
      <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
    </div>
  );
}
