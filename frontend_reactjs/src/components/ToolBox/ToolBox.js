import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { Link } from "react-router-dom";
import config from "~/config";
import styles from "./ToolBox.module.scss";

const cx = classNames.bind(styles);

function ToolBox() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("toolbox")}>
        <Link className={cx("btn")} to={config.routes.createCardKanji}>
          <FontAwesomeIcon
            className={cx("icon")}
            icon={faCirclePlus}
          ></FontAwesomeIcon>
          <h4> Create CardKanji</h4>
        </Link>
        <Link className={cx("btn")} to={config.routes.createCardKanji}>
          <FontAwesomeIcon
            className={cx("icon")}
            icon={faCirclePlus}
          ></FontAwesomeIcon>
          <h4> Create CardGrammar</h4>
        </Link>
      </div>
    </div>
  );
}

export default ToolBox;
