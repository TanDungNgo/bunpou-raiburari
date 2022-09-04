import classNames from "classnames/bind";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

function Home() {
  return (
    <div>
      <div className={cx("wrapper")}>
        <img className={cx("image")} src="/img/hiragana.jpg"></img>
      </div>
      <div className={cx("wrapper")}>
        <img className={cx("image")} src="/img/katakana.jpg"></img>
      </div>
    </div>
  );
}
export default Home;
