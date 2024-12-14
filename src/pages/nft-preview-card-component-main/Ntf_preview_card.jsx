import React from "react";

import cardImg from "./images/image-equilibrium.jpg";
import coinIcon from "./images/icon-ethereum.svg";
import coinDate from "./images/icon-clock.svg";
import userAvatar from "./images/image-avatar.png";
import viewIcon from "./images/icon-view.svg";

import styles from "./style.module.css";

export default function NtfPreviewCard() {
  return (
    <div>
      <main className={styles.main}>
        <div className={styles.card}>
          <div className={styles.cardImgContainer}>
            <img src={cardImg} alt="card image" className={styles.cardImg} />
            <div className={styles.viewIcon}>
              <img src={viewIcon} alt="view icon" />
            </div>
          </div>

          <h1 className={styles.cardHeader}>Equilibrium #3429</h1>
          <p className={styles.cardInfor}>
            Our Equilibrium collection promotes balance and calm.
          </p>
          <div className={styles.cardCoin}>
            <p className={styles.coin}>
              <img src={coinIcon} alt="coin icon" />
              0.041 ETH
            </p>
            <p className={styles.date}>
              <img src={coinDate} alt="remain time" />3 days left
            </p>
          </div>
          <div className={styles.cardUser}>
            <img
              src={userAvatar}
              className={styles.userAvatar}
              alt="userAvatar"
            />
            <p className={styles.usersInfor}>
              Creation of <span className={styles.bold}>Jules Wyvern</span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
