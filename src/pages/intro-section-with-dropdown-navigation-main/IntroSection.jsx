import React, { useState } from "react";
import styles from "./styles.module.css";

import heroDesktop from "./images/image-hero-desktop.png";
import heroMobile from "./images/image-hero-mobile.png";
import databiz from "./images/client-databiz.svg";
import audiophile from "./images/client-audiophile.svg";
import meet from "./images/client-meet.svg";
import maker from "./images/client-maker.svg";
import menuIcon from "./images/icon-menu.svg";
import closeIcon from "./images/icon-close-menu.svg";
import logo from "./images/logo.svg";
import todoIcon from "./images/icon-todo.svg";
import calendarIcon from "./images/icon-calendar.svg";
import reminderIcon from "./images/icon-reminders.svg";
import planingIcon from "./images/icon-planning.svg";
import upIcon from "./images/icon-arrow-up.svg";
import downIcon from "./images/icon-arrow-down.svg";

const partnerList = [
  { name: "databiz", logo: databiz },
  { name: "audiophile", logo: audiophile },
  { name: "meet", logo: meet },
  { name: "maker", logo: maker },
];

export default function IntroSection() {
  const [navList, setNavList] = useState([
    {
      name: "Features",
      showChild: false,
      child: [
        { name: "Todo list", icon: todoIcon },
        { name: "Calendar", icon: calendarIcon },
        { name: "Reminders", icon: reminderIcon },
        { name: "Planning", icon: planingIcon },
      ],
    },
    {
      name: "Company",
      showChild: false,
      child: [{ name: "History" }, { name: "Our team" }, { name: "Blog" }],
    },
    { name: "Careers" },
    { name: "About" },
  ]);
  const [showMenu, setShowMenu] = useState(false);

  const handleChildNav = (itemName) => {
    setNavList(
      navList.map((item) =>
        item.name === itemName
          ? { ...item, showChild: !item.showChild }
          : { ...item, showChild: false }
      )
    );
  };
  const NavItem = ({ item }) => {
    return (
      <li className={styles.navItem}>
        <p
          className={styles.link}
          onClick={() => {
            if (item.child) handleChildNav(item.name);
          }}
        >
          <p>
            {item.name}
            {item.child &&
              (item.showChild ? (
                <img src={upIcon} alt="show child nav" />
              ) : (
                <img src={downIcon} alt="hide child nav" />
              ))}
          </p>
          {item.child && item.showChild && (
            <div className={styles.childNavs}>
              {item.child.map((child) => {
                return (
                  <p
                    className={`${styles.childNav} ${styles.link}`}
                    key={child.name}
                  >
                    {" "}
                    {child.icon && (
                      <img
                        src={child.icon}
                        alt=""
                        className={styles.childIcon}
                      />
                    )}{" "}
                    <p>{child.name}</p>
                  </p>
                );
              })}
            </div>
          )}
        </p>
      </li>
    );
  };
  return (
    <div className={styles.body}>
      <div className={styles.main}>
        <nav className={styles.navBar}>
          <a href="#">
            <img src={logo} alt="" className={styles.logo} />
          </a>
          {showMenu && <div className={styles.modal}></div>}
          <div
            className={`${styles.navContainer} ${
              showMenu ? styles.active : ""
            }`}
          >
            <div className={styles.mobile}>
              <button
                onClick={() => {
                  setShowMenu(false);
                }}
                className={`${styles.closeBtn}`}
              >
                {showMenu && <img src={closeIcon} alt="" />}
              </button>
            </div>
            <ul className={styles.navList}>
              {navList.map((nav) => (
                <NavItem key={nav.name} item={nav} />
              ))}
            </ul>
            <div className={styles.actionBtns}>
              <button className={styles.loginBtn}>Login</button>
              <button className={styles.registerBtn}>Register</button>
            </div>
          </div>
          <div className={styles.mobile}>
            <button
              onClick={() => {
                setShowMenu(true);
              }}
            >
              {!showMenu && <img src={menuIcon} alt="menu" />}
            </button>
            <button
              onClick={() => {
                setShowMenu(false);
              }}
            >
              {showMenu && (
                <img src={closeIcon} alt="" className={`${styles.closeBtn}`} />
              )}
            </button>
          </div>
        </nav>
        <section className={styles.heroSection}>
          <img
            src={heroMobile}
            alt=""
            className={`${styles.heroImg} ${styles.mobile}`}
          />
          <div className={styles.heroContent}>
            <h1 className={styles.hero}>Make remote work</h1>
            <p className={styles.heroText}>
              Get your team in sync, nomatter your location. Stremline
              processes, create team rituals, and watch productivity soar.
            </p>
            <button className={styles.learnMore}>Learn more</button>

            <div className={styles.partnerList}>
              {partnerList.map((partner) => (
                <img
                  src={partner.logo}
                  alt={partner.name}
                  key={partner.name}
                  className={styles.partner}
                />
              ))}
            </div>
          </div>
          <img
            src={heroDesktop}
            alt="hero"
            className={`${styles.heroImg} ${styles.desktop}`}
          ></img>
        </section>
      </div>
    </div>
  );
}
