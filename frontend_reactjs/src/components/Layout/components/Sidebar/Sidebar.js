import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import Button from "~/components/Button";
import styles from "./Sidebar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx("wrapper")}>
      <Link to="/">
        <Button
          leftIcon={<FontAwesomeIcon icon={faHome} />}
          className={cx("btn")}
          large
          primary
        >
          Home
        </Button>
      </Link>
      <Link to="/listkanji">
        <Button outline large className={cx("btn")}>
          Kanji
        </Button>
      </Link>
      <Link to="/grammar">
        <Button outline large className={cx("btn")}>
          Grammar
        </Button>
      </Link>
    </aside>
  );
}
export default Sidebar;
