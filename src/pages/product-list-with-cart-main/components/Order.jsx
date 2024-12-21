import React from "react";
import styles from "./order.module.css";

import confirmIcon from "../assets/images/icon-order-confirmed.svg";

export default function Order({ cart = [],onStartNewOrder }) {
  const total = cart.reduce((total, item) => total + item.total, 0);
  return (
    <div className={styles.modal}>
      <div className={styles.order}>
        <img src={confirmIcon} alt="confirm" />
        <h2 className={styles.title}>Order Confirmed</h2>
        <p className={styles.text}>We hope you enjoy your food!</p>
        {cart.map((item) => (
          <div className={styles.item} key={item.name}>
            <div className={styles.itemInfor}>
              <img src={item.img.thumbnail} alt="thumbnail" />
              <p className={styles.itemName}>{item.name}</p>
              <p className={styles.qty}>{item.qty}x</p>
              <p className={styles.price}>@ ${item.price.toFixed(2)}</p>
            </div>
            <p className={styles.itemTotal}>${item.total.toFixed(2)}</p>
          </div>
        ))}
        <div className={styles.orderTotal}>
          <p className={styles.totalTitle}>Order Total</p>
          <div className={styles.totalNumber}>${total.toFixed(2)}</div>
        </div>

        <button className={styles.startNewBtn} onClick={()=> onStartNewOrder()}>Start New Order</button>
      </div>
    </div>
  );
}
