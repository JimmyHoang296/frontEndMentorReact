import React from "react";
import styles from "./styles.module.css";
// import { Link } from 'react-router-dom'
import { HashLink as Link } from "react-router-hash-link";

import ntfPreviewCard from "./nft-preview-card-component-main/design/desktop-preview.jpg";
import productListWithCart from "./product-list-with-cart-main/preview.jpg";
import ageCalculator from './age-calculator-app-main/design/desktop-preview.jpg'
import mortgageCalculator from './mortgage-repayment-calculator-main/preview.jpg'
import notificationsPage from './notifications-page-main/design/desktop-preview.jpg'
import introSection from './intro-section-with-dropdown-navigation-main/design/desktop-preview.jpg'

export default function Home() {
  const pages = [
    {
      name: "NFT preview card",
      link: "/ntf-preview-card",
      preview: ntfPreviewCard,
    },
    {
      name: "Product list with cart",
      link: "/product-list-with-cart",
      preview: productListWithCart,
    },
    {
      name: "Age calculator",
      link: "/age-calculator",
      preview: ageCalculator,
    },
    {
      name: "Mortgage calculator",
      link: "/mortgage-calculator",
      preview: mortgageCalculator,
    },
    {
      name: "Notifications page",
      link: "/notifications-page",
      preview: notificationsPage
    },
    {
      name: "Intro section",
      link: "/intro-section",
      preview: introSection
    }
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
