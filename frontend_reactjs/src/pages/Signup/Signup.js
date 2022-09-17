import styles from "./Signup.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faLock, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Button from "~/components/Button/Button";
import { useState } from "react";
import { signup } from "~/services/signupService";
import { useNavigate } from "react-router-dom";
const cx = classNames.bind(styles);

function Signup({ className, children }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleBack = () => {
    const divContainer = document.getElementsByClassName(
      cx("container", className)
    );
    divContainer[0].classList.remove(cx("active"));
  };
  const handleSignup = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    signup(formData);
  };
  return (
    <div className={cx("container", className)}>
      <div className={cx("form-signup")}>
        <h2 className={cx("title")}>Create your account</h2>
        <form onSubmit={handleSignup}>
          <input
            type="text"
            placeholder="Username:"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="text"
            placeholder="Email:"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password:"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input type="password" placeholder="Repeat password:" />
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
