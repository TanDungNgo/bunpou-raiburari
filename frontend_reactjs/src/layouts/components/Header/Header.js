import { useEffect, useState } from "react";
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
import HeadlessTippy from "@tippyjs/react/headless";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import config from "~/config";
import Button from "~/components/Button/Button";
import Menu from "~/components/Popper/Menu/Menu";
import { UploadIcon } from "~/components/Icons/Icons";
import Image from "~/components/Image/Image";
import { Link } from "react-router-dom";
import Search from "../Search/Search";
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

const currentUser = true;
function Header() {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {}, []);

  // Handle logic
  const handleMenuChange = (menuItem) => {};

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
      to: "/login",
      separate: true,
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
              <Tippy delay={[0, 200]} content="Upload" placement="bottom">
                <button className={cx("action-btn")}>
                  {/* <FontAwesomeIcon icon={faCloudUpload} /> */}
                  <UploadIcon />
                </button>
              </Tippy>
            </>
          ) : (
            <>
              <Button outline>Register</Button>
              <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
                Log in
              </Button>
            </>
          )}
          <Menu
            items={currentUser ? userMenu : MENU_ITEMS}
            onChange={handleMenuChange}
          >
            {currentUser ? (
              <Image
                src="https://allimages.sgp1.digitaloceanspaces.com/iteavn/2020/04/hinh-nen-may-tinh-11.jpg"
                className={cx("user-avatar")}
                alt="avatar"
                fallback="img/user.png"
              />
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