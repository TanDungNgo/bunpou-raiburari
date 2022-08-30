import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard } from "@fortawesome/free-regular-svg-icons";
import {
  faComments,
  faSignIn,
  faEllipsisVertical,
  faLanguage,
  faGear,
  faSignOut,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import config from "~/config";
import Button from "~/components/Button/Button";
import Menu from "~/components/Popper/Menu/Menu";
import { UploadIcon } from "~/components/Icons/Icons";
import Image from "~/components/Image/Image";
import Search from "../Search/Search";
import { logout } from "~/services/loginService";

const cx = classNames.bind(styles);

const MENU_ITEMS = [
  {
    icon: <FontAwesomeIcon icon={faLanguage} />,
    title: "English",
    children: {
      title: "Languages",
      data: [
        {
          code: "en",
          title: "English",
        },
        {
          code: "vi",
          title: "Tiếng Việt",
        },
        {
          code: "ja",
          title: "日本語",
        },
      ],
    },
  },
  {
    icon: <FontAwesomeIcon icon={faComments} />,
    title: "Feedback and help",
    to: "/feedback",
  },
];

function Header() {
  // const currentUser = useSelector((state) => state.auth.login.currentUser);
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {}, []);

  // Handle logic
  const handleMenuChange = (menuItem) => {};

  const handleLogout = () => {
    console.log("alo");
    logout();
  };

  const userMenu = [
    {
      icon: <FontAwesomeIcon icon={faIdCard} />,
      title: "View profile",
      to: "/profile",
    },
    {
      icon: <FontAwesomeIcon icon={faGear} />,
      title: "Setting",
      to: "/setting",
    },
    ...MENU_ITEMS,
    {
      icon: <FontAwesomeIcon icon={faSignOut} />,
      title: "Log out",
      separate: true,
      onClick: handleLogout,
    },
  ];

  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <Link to={config.routes.home}>
          <img className={cx("logo")} src="/img/logo2.png" alt="logo" />
        </Link>
        <Search />
        <div className={cx("actions")}>
          {currentUser ? (
            <>
              {/* <Tippy delay={[0, 200]} content="Upload" placement="bottom">
                <button className={cx("action-btn")}>
                  <UploadIcon />
                </button>
              </Tippy> */}
              <Tippy delay={[0, 200]} content="Username" placement="bottom">
                <p>
                  <span>Hi, {currentUser.username} </span>
                </p>
              </Tippy>
            </>
          ) : (
            <>
              <Button
                primary
                leftIcon={<FontAwesomeIcon icon={faSignIn} />}
                to="/login"
              >
                Log in
              </Button>
            </>
          )}
          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <div>
                <Image
                  src={currentUser.avatar}
                  className={cx("user-avatar")}
                  alt="avatar"
                  fallback="img/user.png"
                />
              </div>
            ) : (
              <button className={cx("more-btn")}>
                <FontAwesomeIcon icon={faEllipsisVertical} />
              </button>
            )}
          </Menu>
        </div>
      </div>
    </header>
  );
}
export default Header;
