import classNames from "classnames/bind";
import styles from "./QuizPage.module.scss";

const cx = classNames.bind(styles);
function QuizPage() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("card")}>
        <img className={cx("card-image")} src="/img/kanji.jpg"></img>
        <div className={cx("title")}>Kanji</div>
      </div>
      <div className={cx("card")}>
        <img className={cx("card-image")} src="/img/grammar.jpg"></img>
        <div className={cx("title")}>Grammar</div>
      </div>
      <div className={cx("card")}>
        <img className={cx("card-image")} src="/img/conversation.jpg"></img>
        <div className={cx("title")}>Conversation</div>
      </div>
    </div>
  );
}

export default QuizPage;
