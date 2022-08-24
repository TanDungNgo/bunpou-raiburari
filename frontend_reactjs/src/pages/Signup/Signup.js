import styles from "./Signup.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Button from "~/components/Button/Button";
import { useState } from "react";
const cx = classNames.bind(styles);

function Signup({ className }) {
  const [classNames, setClassName] = useState(className);
  return (
    <div className={cx("container", classNames)}>
      <div className={cx("formSignup")}>
        <h2>Create your account</h2>
        <form>
          <input type="text" placeholder="Username:" required />
          <input type="text" placeholder="Email:" required />
          <input type="password" placeholder="Password:" required />
          <input type="password" placeholder="Repeat password:" required />
          <Button outline className={cx("btnRegister")}>
            Register
          </Button>
        </form>
        <button
          className={cx("btnBack")}
          onClick={() => {
            setClassName("");
          }}
        >
          <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
        </button>
      </div>
      <div className={cx("img")}></div>
    </div>
  );
}

export default Signup;
