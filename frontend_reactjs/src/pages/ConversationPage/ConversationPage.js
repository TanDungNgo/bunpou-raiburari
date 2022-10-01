import classNames from "classnames/bind";
import styles from "./ConversationPage.module.scss";

const cx = classNames.bind(styles);
function ConversationPage() {
  return (
    <div className={cx("wrapper")}>
      <img
        className={cx("image")}
        src="/img/japaneseConversation.jpg"
      ></img>
    </div>
  );
}

export default ConversationPage;
