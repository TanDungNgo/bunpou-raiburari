import styles from "./Signup.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

function Signup() {
  return <div className={cx("formSignup")}>Signup</div>;
}

export default Signup;
