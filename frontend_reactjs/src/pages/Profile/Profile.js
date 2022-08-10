import classNames from "classnames/bind";
import Button from "~/components/Button/Button";
import styles from "./Profile.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faUser } from "@fortawesome/free-regular-svg-icons";
import Image from "~/components/Image/Image";
const cx = classNames.bind(styles);
function Profile() {
  const userLogin = {
    avatar: "img/user.png",
    username: "Tan Dung",
    email: "tandung@gmail.com",
  };
  return (
    <div className={cx("wrapper")}>
      <form>
        <Image
          src="https://allimages.sgp1.digitaloceanspaces.com/iteavn/2020/04/hinh-nen-may-tinh-11.jpg"
          className={cx("user-avatar")}
          alt="avatar"
          fallback="img/user.png"
        />
        <div className={cx("item")}>
          <FontAwesomeIcon className={cx("icon")} icon={faUser} />
          <label>Username</label>
          <input
            type="text"
            className={cx("input")}
            defaultValue={userLogin.username}
          />
        </div>
        <div className={cx("item")}>
          <FontAwesomeIcon className={cx("icon")} icon={faEnvelope} />
          <label>Email</label>
          <input
            type="text"
            className={cx("input")}
            defaultValue={userLogin.email}
          />
        </div>
        <div>
          <Button outline className={cx("btn")}>
            Save
          </Button>
        </div>
      </form>
    </div>
  );
}
export default Profile;
