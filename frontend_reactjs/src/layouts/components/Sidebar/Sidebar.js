import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import Button from "~/components/Button/Button";
import styles from "./Sidebar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faHome } from "@fortawesome/free-solid-svg-icons";
import Menu, { MenuItem } from "./Menu";
import config from "~/config";

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx("wrapper")}>
      <Menu>
        <MenuItem
          title="Home"
          to={config.routes.home}
          icon={<FontAwesomeIcon icon={faHome} />}
        ></MenuItem>
        <MenuItem
          title="Kanji"
          to={config.routes.listKanji}
          icon={<FontAwesomeIcon icon={faBook} />}
        ></MenuItem>
        <MenuItem
          title="Grammar"
          to={config.routes.listGrammar}
          icon={<FontAwesomeIcon icon={faBook} />}
        ></MenuItem>
      </Menu>
    </aside>
  );
}
export default Sidebar;
