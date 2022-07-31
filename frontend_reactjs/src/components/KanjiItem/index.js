import classNames from "classnames/bind";
import styles from "./KanjiItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const cx = classNames.bind(styles);

function KanjiItem() {
  return (
    <div className={cx("wrapper")}>
      <img className={cx("img")} src="img/n5.jpg" alt="N5" />
      <div className={cx("info")}>
        <h4 className={cx("word")}>
          <span>私</span>
        </h4>
        <span className={cx("means")}> Tôi </span>
      </div>
    </div>
  );
}
export default KanjiItem;
