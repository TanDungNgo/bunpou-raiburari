import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faBookBookmark,
  faGamepad,
  faHome,
} from "@fortawesome/free-solid-svg-icons";
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
        <MenuItem
          title="Bookmark"
          to={config.routes.bookmark}
          icon={<FontAwesomeIcon icon={faBookBookmark} />}
        ></MenuItem>
        <MenuItem
          title="Quiz"
          to={config.routes.quiz}
          icon={<FontAwesomeIcon icon={faGamepad} />}
        ></MenuItem>
      </Menu>
    </aside>
  );
}
export default Sidebar;
