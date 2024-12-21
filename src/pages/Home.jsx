import React from "react";
import styles from "./styles.module.css";
// import { Link } from 'react-router-dom'
import { HashLink as Link } from "react-router-hash-link";

import ntfPreviewCard from "./nft-preview-card-component-main/design/desktop-preview.jpg";
import productListWithCard from "./product-list-with-cart-main/preview.jpg";

export default function Home() {
  const pages = [
    {
      name: "NFT preview card",
      link: "/ntf-preview-card",
      preview: ntfPreviewCard,
    },
    {
      name: "Product list with card",
      link: "/product-list-with-card",
      preview: productListWithCard,
    },
  ];

  return (
    <div className={styles.wrapper}>
      <h1>Frontend Mentor Projects</h1>

      <div className={styles.container}>
        {pages.map((page) => (
          <Link to={page.link} key={page.name} className={styles.challengeCard}>
            <img
              src={page.preview}
              alt={`${page.name} preview`}
              className={styles.cardImg}
            />
            <p className={styles.cardTitle}>{page.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
