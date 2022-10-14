import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

function Footer() {
  return (
    <div className={cx("footer")}>
      <div>
        <h4>
          {/* Nếu các bạn có gì thắc mắc thì liên hệ mình qua những mạng xã hội sau
          đây nhé! */}
        </h4>
        <div className={cx("social")}>
          <div className={cx("text")}>
            <img
              className={cx("logoFacebook")}
              src="/img/facebook.png"
              alt="facebook"
            />
            <p>https://www.facebook.com/tandung.ngo.1207</p>
          </div>
          <div className={cx("text")}>
            <img className={cx("logoGmail")} src="/img/gmail.png" alt="gmail" />
            <p> tandung12072002@gmail.com</p>
          </div>
        </div>
      </div>
      <img className={cx("image")} src="/img/readbook.png" alt="image" />
    </div>
  );
}

export default Footer;
