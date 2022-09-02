import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import * as request from "~/utils/request";
import CardGrammar from "~/components/CardGrammar/CardGrammar";
import styles from "./ListGrammar.module.scss";
const cx = classNames.bind(styles);

function ListGrammar() {
  const [listGrammar, setListGrammar] = useState([]);
  const [listType, setListType] = useState(["N5", "N4", "N3", "N2", "N1"]);
  const [type, setType] = useState("All");
  useEffect(() => {
    request.get("list-grammar").then((res) => {
      setListGrammar(res.listGrammar);
    });
  }, []);
  const renderCard = () => {
    return listGrammar.map((item, index) => {
      return (
        <div key={index}>
          <CardGrammar Grammar={item} />
        </div>
      );
    });
  };
  const handleSearchType = ($type) => {
    const btn = document.getElementsByClassName(cx("btn", $type));
    btn[0].classList.add(cx("active"));
    if (type != "All") {
      const btnactive = document.getElementsByClassName(
        cx("btn", type, "active")
      );
      btnactive[0].classList.remove(cx("active"));
    }
    setType($type);
    request.get(`list-grammar/${$type}`).then((res) => {
      setListGrammar(res.listGrammar);
    });
  };
  const handleGetAll = () => {
    request.get("list-grammar").then((res) => {
      setListGrammar(res.listGrammar);
    });
    if (type != "All") {
      const btnactive = document.getElementsByClassName(
        cx("btn", type, "active")
      );
      btnactive[0].classList.remove(cx("active"));
    }
    setType("All");
  };
  const renderType = () => {
    return listType.map((item, index) => {
      return (
        <li key={index}>
          <button
            className={cx("btn", item)}
            onClick={() => handleSearchType(item)}
          >
            {item}
          </button>
        </li>
      );
    });
  };
  return (
    <div>
      <div className={cx("list")}>
        <ul>
          <li>
            <button className={cx("btn", "All")} onClick={handleGetAll}>
              All
            </button>
          </li>
          {renderType()}
        </ul>
      </div>
      <div className={cx("wrapper")}> {renderCard()}</div>
    </div>
  );
}
export default ListGrammar;
