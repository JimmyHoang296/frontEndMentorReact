import React, { useState } from "react";
import styles from "./styles.module.css";

import Product from "./components/Product";
import Cart from "./components/Cart";
import Order from "./components/Order";

import waffleImgDesktop from "./assets/images/image-waffle-desktop.jpg";
import waffleImgMobile from "./assets/images/image-waffle-mobile.jpg";
import waffleImgTablet from "./assets/images/image-waffle-tablet.jpg";
import waffleImgThumbnail from "./assets/images/image-waffle-thumbnail.jpg";
import cremeBruleeImgDesktop from "./assets/images/image-creme-brulee-desktop.jpg";
import cremeBruleeImgMobile from "./assets/images/image-creme-brulee-mobile.jpg";
import cremeBruleeImgTablet from "./assets/images/image-creme-brulee-tablet.jpg";
import cremeBruleeImgThumbnail from "./assets/images/image-creme-brulee-thumbnail.jpg";
import macaronImgDesktop from "./assets/images/image-macaron-desktop.jpg";
import macaronImgMobile from "./assets/images/image-macaron-mobile.jpg";
import macaronImgTablet from "./assets/images/image-macaron-tablet.jpg";
import macaronImgThumbnail from "./assets/images/image-macaron-thumbnail.jpg";
import tiramisuImgDesktop from "./assets/images/image-tiramisu-desktop.jpg";
import tiramisuImgMobile from "./assets/images/image-tiramisu-mobile.jpg";
import tiramisuImgTablet from "./assets/images/image-tiramisu-tablet.jpg";
import tiramisuImgThumbnail from "./assets/images/image-tiramisu-thumbnail.jpg";
import baklavaImgDesktop from "./assets/images/image-baklava-desktop.jpg";
import baklavaImgMobile from "./assets/images/image-baklava-mobile.jpg";
import baklavaImgTablet from "./assets/images/image-baklava-tablet.jpg";
import baklavaImgThumbnail from "./assets/images/image-baklava-thumbnail.jpg";
import meringueImgDesktop from "./assets/images/image-meringue-desktop.jpg";
import meringueImgMobile from "./assets/images/image-meringue-mobile.jpg";
import meringueImgTablet from "./assets/images/image-meringue-tablet.jpg";
import meringueImgThumbnail from "./assets/images/image-meringue-thumbnail.jpg";
import cakeImgDesktop from "./assets/images/image-cake-desktop.jpg";
import cakeImgMobile from "./assets/images/image-cake-mobile.jpg";
import cakeImgTablet from "./assets/images/image-cake-tablet.jpg";
import cakeImgThumbnail from "./assets/images/image-cake-thumbnail.jpg";
import brownieImgDesktop from "./assets/images/image-brownie-desktop.jpg";
import brownieImgMobile from "./assets/images/image-brownie-mobile.jpg";
import brownieImgTablet from "./assets/images/image-brownie-tablet.jpg";
import brownieImgThumbnail from "./assets/images/image-brownie-thumbnail.jpg";
import pannaCottaImgDesktop from "./assets/images/image-panna-cotta-desktop.jpg";
import pannaCottaImgMobile from "./assets/images/image-panna-cotta-mobile.jpg";
import pannaCottaImgTablet from "./assets/images/image-panna-cotta-tablet.jpg";
import pannaCottaImgThumbnail from "./assets/images/image-panna-cotta-thumbnail.jpg";

export default function ProductListWithCard() {
  const products = [
    {
      name: "Waffle with Berries",
      type: "Waffle",
      price: 6.5,
      img: {
        desktop: waffleImgDesktop,
        mobile: waffleImgMobile,
        tablet: waffleImgTablet,
        thumbnail: waffleImgThumbnail,
      },
    },
    {
      name: "Vanilla Bean Crème Brûlée",
      type: "Crème Brûlée",
      price: 7.0,
      img: {
        desktop: cremeBruleeImgDesktop,
        mobile: cremeBruleeImgMobile,
        tablet: cremeBruleeImgTablet,
        thumbnail: cremeBruleeImgThumbnail,
      },
    },
    {
      name: "Macaron Mix of Five",
      type: "Macaron",
      price: 8.0,
      img: {
        desktop: macaronImgDesktop,
        mobile: macaronImgMobile,
        tablet: macaronImgTablet,
        thumbnail: macaronImgThumbnail,
      },
    },
    {
      name: "Classic Tiramisu",
      type: "Tiramisu",
      price: 5.5,
      img: {
        desktop: tiramisuImgDesktop,
        mobile: tiramisuImgMobile,
        tablet: tiramisuImgTablet,
        thumbnail: tiramisuImgThumbnail,
      },
    },
    {
      name: "Pistachio Baklava",
      type: "Baklava",
      price: 4.0,
      img: {
        desktop: baklavaImgDesktop,
        mobile: baklavaImgMobile,
        tablet: baklavaImgTablet,
        thumbnail: baklavaImgThumbnail,
      },
    },
    {
      name: "Lemon Meringue Pie",
      type: "Pie",
      price: 5.0,
      img: {
        desktop: meringueImgDesktop,
        mobile: meringueImgMobile,
        tablet: meringueImgTablet,
        thumbnail: meringueImgThumbnail,
      },
    },
    {
      name: "Red Velvet Cake",
      type: "Cake",
      price: 4.5,
      img: {
        desktop: cakeImgDesktop,
        mobile: cakeImgMobile,
        tablet: cakeImgTablet,
        thumbnail: cakeImgThumbnail,
      },
    },
    {
      name: "Salted Caramel Brownie",
      type: "Brownie",
      price: 4.5,
      img: {
        desktop: brownieImgDesktop,
        mobile: brownieImgMobile,
        tablet: brownieImgTablet,
        thumbnail: brownieImgThumbnail,
      },
    },
    {
      name: "Vanilla Panna Cotta",
      type: "Panna Cotta",
      price: 6.5,
      img: {
        desktop: pannaCottaImgDesktop,
        mobile: pannaCottaImgMobile,
        tablet: pannaCottaImgTablet,
        thumbnail: pannaCottaImgThumbnail,
      },
    },
  ];

  const [cart, setCart] = useState([]);
  const [isConfirm, setIsConfirm] = useState(false);

  const increaseProduct = (product) => {
    var prevCart = [...cart];
    const isProductInCart = prevCart.find((item) => item.name === product.name);
    var newCart = [];
    if (isProductInCart) {
      newCart = prevCart.map((item) =>
        item.name === product.name
          ? { ...item, qty: item.qty + 1, total: (item.qty + 1) * item.price }
          : item
      );
    } else {
      newCart = [...prevCart, { ...product, qty: 1, total: product.price }];
    }
    setCart(newCart);
  };

  const decreaseProduct = (product) => {
    const prevCart = [...cart];
    const productQty = prevCart.find((item) => item.name === product.name).qty;
    var newCart = [];
    if (productQty === 1) {
      newCart = prevCart.filter((item) => item.name !== product.name);
    } else {
      newCart = prevCart.map((item) =>
        item.name === product.name
          ? { ...item, qty: item.qty - 1, total: (item.qty - 1) * item.price }
          : item
      );
    }
    setCart(newCart);
  };

  const clearProduct = (productName) => {
    setCart((cart) => cart.filter((item) => item.name !== productName));
  };

  const confirmOrder = () => {
    setIsConfirm(true);
  };

  const startNewOrder = () => {
    setIsConfirm(false);
    setCart([]);
  };

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <div className={styles.menu}>
          <h1 className={styles.title}>Desserts</h1>
          {products.map((product, id) => (
            <Product
              key={id}
              product={product}
              cart={cart}
              onIncreaseProduct={increaseProduct}
              onDecreaseProduct={decreaseProduct}
            />
          ))}
        </div>

        {/* cart */}
        <Cart
          products={products}
          cart={cart}
          onClearProduct={clearProduct}
          onConfirmOrder={confirmOrder}
        />

        {isConfirm && <Order cart={cart} onStartNewOrder={startNewOrder} />}
      </div>
    </main>
  );
}
