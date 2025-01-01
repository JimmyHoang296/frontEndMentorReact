import React, { useEffect, useState } from "react";
import styles from "./styles.module.css";

import markAvatar from "./assets/images/avatar-mark-webber.webp";
import angelaAvatar from "./assets/images/avatar-angela-gray.webp";
import jacobAvatar from "./assets/images/avatar-jacob-thompson.webp";
import rizkyAvatar from "./assets/images/avatar-rizky-hasanuddin.webp";
import kimberyAvatar from "./assets/images/avatar-kimberly-smith.webp";
import nathanAvatar from "./assets/images/avatar-nathan-peterson.webp";
import annaAvatar from "./assets/images/avatar-anna-kim.webp";
import chessPic from "./assets/images/image-chess.webp";
const data = [
  {
    id: 1,
    user: { name: "Mark Webber", avatar: markAvatar },
    type: "react post",
    post: "My first tournament today!",
    isRead: false,
    time: "1m ago",
    message: "",
    postpic: "",
  },
  {
    id: 2,
    user: { name: "Angela Gray", avatar: angelaAvatar },
    type: "follow",
    post: "",
    isRead: false,
    time: "5m ago",
    message: "",
    postpic: "",
  },
  {
    id: 3,
    user: { name: "Jacob Thompson", avatar: jacobAvatar },
    type: "joint group",
    post: "Chess Club",
    isRead: false,
    time: "1day ago",
    message: "",
    postpic: "",
  },
  {
    id: 4,
    user: { name: "Rizky Hasanuddin", avatar: rizkyAvatar },
    type: "private message",
    post: "",
    isRead: true,
    time: "5days ago",
    message:
      "Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
    postpic: "",
  },
  {
    id: 5,
    user: { name: "Kimberly Smith", avatar: kimberyAvatar },
    type: "comment picture",
    post: "",
    isRead: true,
    time: "1week ago",
    message: "",
    postpic: chessPic,
  },
  {
    id: 6,
    user: { name: "Nathan Peterson", avatar: nathanAvatar },
    type: "react post",
    post: "5 end-game strategies to increase your win rate",
    isRead: true,
    time: "2weeks ago",
    message: "",
    postpic: "",
  },
  {
    id: 7,
    user: { name: "Anna Kim", avatar: annaAvatar },
    type: "left group",
    post: "Chess Club",
    isRead: true,
    time: "2weeks ago",
    message: "",
    postpic: "",
  },
];

const notifyType = {
  "react post": " reacted to your recent post ",
  follow: " followed you ",
  "joint group": " has joined your group ",
  "left group": " left the group ",
  "comment picture": " commented on your picture ",
  "private message": " sent you a private message ",
};

export default function NotificationPage() {
  var [notify, setNotify] = useState();
  var [unreadCount, setUnreadCount] = useState();

  useEffect(() => {
    setNotify(data);
    const count = data.filter((item) => !item.isRead).length;
    setUnreadCount(count);
  }, []);
  useEffect(() => {
    const count = notify?.filter((item) => !item.isRead).length;
    setUnreadCount(count);
  }, [notify]);

  const handleAllRead = () => {
    var newNotify = [...notify];
    newNotify = newNotify.map((item) => {
      return { ...item, isRead: true };
    });
    setNotify(newNotify)
  };

  const handleRead = (id) => {
    var newNotify = [...notify];
    newNotify = newNotify.map((item) => {
      if (item.id === id) {
        return { ...item, isRead: true };
      } else {
        return item;
      }
    });
    setNotify(newNotify);
  };

  const Notification = ({ props }) => {
    const { id, user, type, post, isRead, time, message, postpic } = props;
    return (
      <div
        onClick={() => {
          handleRead(id);
        }}
        className={
          isRead
            ? styles.notification
            : `${styles.notification} ${styles.unread}`
        }
      >
        <img src={user.avatar} className={styles.avatar} alt="user avatar" />
        <div className={styles.content}>
          <p className={styles.text}>
            <span
              onClick={() => {
                handleRead(id);
              }}
              className={styles.userName}
            >
              {user.name}{" "}
            </span>
            {notifyType[type]}
            {post && (
              <span
                href="."
                onClick={() => {
                  handleRead(id);
                }}
                className={styles.postName}
              >
                {" "}
                {post}
              </span>
            )}
            {!isRead && <span className={styles.dot}></span>}
          </p>
          <p className={styles.time}>{time}</p>
          {message && <p className={styles.message}>{message}</p>}
        </div>
        {postpic && <img src={postpic} className={styles.postPic} alt="" />}
      </div>
    );
  };

  return (
    <div className={styles.main}>
      <div className={styles.notificationPage}>
        <div className={styles.header}>
          <p className={styles.title}>
            Notifications{" "}
            <span className={styles.unreadCount}>{unreadCount}</span>
          </p>
          <button
            className={styles.markAllRead}
            onClick={() => {
              handleAllRead();
            }}
          >
            Mark all as read
          </button>
        </div>
        <div className={styles.notifyContainer}>
          {notify?.map((item) => (
            <Notification key={item.id} props={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
