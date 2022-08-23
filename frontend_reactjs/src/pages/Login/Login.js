import styles from "./Login.module.scss";
import classNames from "classnames/bind";
import Button from "~/components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faUser, faLock } from "@fortawesome/free-solid-svg-icons";
import Signup from "../Signup/Signup";
import { useState } from "react";

const cx = classNames.bind(styles);

function Login() {
  const [checkClickBtnSignup, setCheckClickBtnSignup] = useState(false);

  const handleClickSignup = () => {
    setCheckClickBtnSignup(true);
  };
  return (
    <>
      {checkClickBtnSignup ? (
        <Signup></Signup>
      ) : (
        <div>
          <div className={cx("background")}>
            <div className={cx("shape")}></div>
            <div className={cx("shape")}></div>
          </div>
          <div className={cx("background")}>
            <div className={cx("shape")}></div>
            <div className={cx("shape")}></div>
          </div>
          <form className={cx("formLogin")}>
            <img className={cx("logo")} src="/img/logo2.png" alt="logo" />
            <h3>LOGIN</h3>
            <label for="username">
              <FontAwesomeIcon
                icon={faUser}
                className={cx("icon")}
              ></FontAwesomeIcon>
              Username
            </label>
            <input type="text" placeholder="Email" id="username" />
            <label for="password">
              <FontAwesomeIcon
                icon={faLock}
                className={cx("icon")}
              ></FontAwesomeIcon>
              Password
            </label>
            <input type="password" placeholder="Password" id="password" />

            <p className={cx("signup")} onClick={handleClickSignup}>
              {" "}
              Signup
            </p>
            <Button primary className={cx("btnLogin")}>
              Log In
            </Button>

            <div className={cx("social")}>
              <div className={cx("go")}>
                <FontAwesomeIcon
                  icon={faGoogle}
                  className={cx("icon")}
                ></FontAwesomeIcon>
                Google
              </div>
              <div className={cx("fb")}>
                <FontAwesomeIcon
                  icon={faFacebook}
                  className={cx("icon")}
                ></FontAwesomeIcon>
                Facebook
              </div>
            </div>
          </form>
        </div>
      )}
    </>
  );
}

export default Login;
