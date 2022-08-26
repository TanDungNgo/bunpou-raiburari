import styles from "./Login.module.scss";
import classNames from "classnames/bind";
import Button from "~/components/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGoogle } from "@fortawesome/free-brands-svg-icons";
import {
  faLock,
  faEnvelope,
  faArrowLeft,
} from "@fortawesome/free-solid-svg-icons";
import Signup from "../Signup/Signup";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import * as request from "~/utils/request";

const cx = classNames.bind(styles);

function Login() {
  const history = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validate_err, setValidate_err] = useState([]);
  const handleLogin = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);
    request.post("/users/login", formData).then((res) => {
      if (res.status == 200) {
        swal({
          title: "Success!",
          text: res.message,
          icon: "success",
        });
        history("/");
      } else {
        console.log(res);
        setValidate_err(res.validate_err);
      }
    });
  };

  const [checkClickBtnSignup, setCheckClickBtnSignup] = useState(false);

  return (
    <div>
      <div className={cx("background")}>
        <div className={cx("shape")}></div>
        <div className={cx("shape")}></div>
      </div>
      <div className={cx("background")}>
        <div className={cx("shape")}></div>
        <div className={cx("shape")}></div>
      </div>
      <form className={cx("form-login")} onSubmit={handleLogin}>
        <img className={cx("logo")} src="/img/logo2.png" alt="logo" />
        <h3>LOGIN</h3>
        <label>
          <FontAwesomeIcon
            icon={faEnvelope}
            className={cx("icon")}
          ></FontAwesomeIcon>
          Email
        </label>
        <input
          type="text"
          placeholder="Email"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        {validate_err ? (
          <span className={cx("err")}>{validate_err.email}</span>
        ) : (
          <></>
        )}

        <label>
          <FontAwesomeIcon
            icon={faLock}
            className={cx("icon")}
          ></FontAwesomeIcon>
          Password
        </label>
        <input
          type="password"
          placeholder="Password"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        {validate_err ? (
          <span className={cx("err")}>{validate_err.password}</span>
        ) : (
          <></>
        )}
        <p
          className={cx("signup")}
          onClick={() => {
            setCheckClickBtnSignup(true);
          }}
        >
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
      {checkClickBtnSignup ? (
        <Signup className="active">
          <button
            className={cx("btn-back")}
            onClick={() => setCheckClickBtnSignup(false)}
          >
            <FontAwesomeIcon icon={faArrowLeft}></FontAwesomeIcon>
          </button>
        </Signup>
      ) : (
        <Signup></Signup>
      )}
    </div>
  );
}

export default Login;
