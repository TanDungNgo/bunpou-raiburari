import classNames from "classnames/bind";
import Chatbot from "~/components/Chatbot/Chatbot";
import styles from "./Home.module.scss";

const cx = classNames.bind(styles);

function Home() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("card")}>
        <img className={cx("image")} src="/img/hiragana.jpg"></img>
      </div>
      <div className={cx("card")}>
        <img className={cx("image")} src="/img/katakana.jpg"></img>
      </div>
      <Chatbot/>
    </div>
  );
}
export default Home;
