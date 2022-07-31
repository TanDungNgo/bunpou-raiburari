import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import {
  faSpinner,
  faMagnifyingGlass,
  faSignIn,
  faEllipsisVertical,
} from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import KanjiItem from "~/components/KanjiItem";
import Button from "~/components/Button";
const cx = classNames.bind(styles);
function Header() {
  const [searchResult, setSearchResult] = useState([]);
  useEffect(() => {}, []);
  return (
    <header className={cx("wrapper")}>
      <div className={cx("inner")}>
        <img className={cx("logo")} src="img/logo.png" alt="logo" />
        <Tippy
          interactive
          visible={searchResult.length > 0}
          render={(attrs) => (
            <div className={cx("search-result")} tabIndex="-1" {...attrs}>
              <PopperWrapper>
                <h4 className={cx("search-title")}>
                  Kanji
                  <KanjiItem />
                  <KanjiItem />
                  <KanjiItem />
                </h4>
              </PopperWrapper>
            </div>
          )}
        >
          <div className={cx("search")}>
            <input type="text" placeholder="Search" spellCheck={false}></input>
            {/* <button className={cx("clear")}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx("loading")} icon={faSpinner} /> */}
            <Tippy>
              <button className={cx("search-btn")}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </button>
            </Tippy>
          </div>
        </Tippy>
        <div className={cx("actions")}>
          <Button outline>Register</Button>
          <Button primary leftIcon={<FontAwesomeIcon icon={faSignIn} />}>
            Log in
          </Button>

          <button className={cx("more-btn")}>
            <FontAwesomeIcon icon={faEllipsisVertical} />
          </button>
        </div>
      </div>
    </header>
  );
}
export default Header;
