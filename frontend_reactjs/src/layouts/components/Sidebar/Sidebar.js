import classNames from "classnames/bind";
import styles from "./Sidebar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faBookBookmark,
  faGamepad,
  faHome,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import Menu, { MenuItem } from "./Menu";
import config from "~/config";

const cx = classNames.bind(styles);

function Sidebar() {
  return (
    <aside className={cx("wrapper")}>
      <div className={cx("sidebar")}>
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
            title="Conversation"
            to={config.routes.conservation}
            icon={<FontAwesomeIcon icon={faMessage} />}
          ></MenuItem>
          <MenuItem
            title="Quiz"
            to={config.routes.quizPage}
            icon={<FontAwesomeIcon icon={faGamepad} />}
          ></MenuItem>
        </Menu>
      </div>
    </aside>
  );
}
export default Sidebar;
