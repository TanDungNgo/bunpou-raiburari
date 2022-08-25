import styles from "./Signup.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Button from "~/components/Button/Button";
import { useState } from "react";
const cx = classNames.bind(styles);

function Signup({ className, children }) {
  const handleBack = () => {
    const divContainer = document.getElementsByClassName(
      cx("container", className)
    );
    divContainer[0].classList.remove(cx("active"));
  };
  return (
    <div className={cx("container", className)}>
      <div className={cx("form-signup")}>
        <h2>Create your account</h2>
        <form>
          <input type="text" placeholder="Username:" required />
          <input type="text" placeholder="Email:" required />
          <input type="password" placeholder="Password:" required />
          <input type="password" placeholder="Repeat password:" required />
          <Button outline className={cx("btn-register")}>
            Register
          </Button>
        </form>
        {children}
      </div>
      <div className={cx("img")}></div>
    </div>
  );
}

export default Signup;
