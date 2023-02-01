import { useEffect, useState } from "react";
import styles from "./FlashCards.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function FlashCards({ props }) {
  const [change, setChange] = useState(true);
  const handleChange = (e) => {
    if (change) {
      document.getElementsByClassName(cx(`flip-card-inner`))[0].style.cssText =
        "transform: rotateX(180deg);";
      setChange(false);
    } else {
      document.getElementsByClassName(cx(`flip-card-inner`))[0].style.cssText =
        "transform: 0";
      setChange(true);
    }
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("flip-card")} onClick={handleChange}>
        <div className={cx(`flip-card-inner`)}>
          <div className={cx("flip-card-front")}>
            <div className={cx("title")}>Hello</div>
          </div>
          <div className={cx("flip-card-back")}>
            <div className={cx("card-kanji-body")}>
              <h5 className={cx("title")}>Konnichiwa</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FlashCards;
