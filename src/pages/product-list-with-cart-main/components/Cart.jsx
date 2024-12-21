import React from "react";
import styles from "./cart.module.css";

import emptyCart from "../assets/images/illustration-empty-cart.svg";
import removeIcon from "../assets/images/icon-remove-item.svg";
import carbonIcon from "../assets/images/icon-carbon-neutral.svg";

export default function Cart({ cart = [], onClearProduct, onConfirmOrder }) {
  const itemCount = cart.reduce((total, item) => total + item.qty, 0);
  const total = cart.reduce((total, item) => total + item.total, 0);

  const CartItem = (item) => {
    return (
      <div className={styles.cartItem} key={item.name}>
        <div className={styles.itemInfor}>
          <p className={styles.name}>{item.name}</p>
          <p className={styles.qty}>{item.qty}x</p>
          <p className={styles.price}>@ {item.price.toFixed(2)}</p>
          <p className={styles.total}>${item.total.toFixed(2)}</p>
        </div>
        <img
          src={removeIcon}
          alt="remove"
          onClick={() => onClearProduct(item.name)}
        />
      </div>
    );
  };

  const EmptyCart = () => {
    return (
      <>
        <img className={styles.emptyCart} src={emptyCart} alt="" />
        <p className={styles.infor}>Your added items will appear here</p>
      </>
    );
  };

  const confirmCart = (total) => {
    return (
      <div className={styles.confirmCart}>
        <div className={styles.totalCart}>
          <p className={styles.totalTitle}>Order Total</p>
          <div className={styles.totalNumber}>${total.toFixed(2)}</div>
        </div>
        <p className={styles.carbonInfor}><img src={carbonIcon} alt="" />This is a <strong>carbon-neutral</strong> delivery</p>
        
        <button className={styles.confirmBtn}  onClick={() => onConfirmOrder()}>Confirm Order</button>
      </div>
    );
  };

  return (
    <div className={styles.cart}>
      <h2 className={styles.cartTitle}>Your cart ({itemCount}) </h2>
      {itemCount ? cart.map((item) => CartItem(item)) : EmptyCart()}
      {itemCount ? confirmCart(total):""}
    </div>
  );
}
