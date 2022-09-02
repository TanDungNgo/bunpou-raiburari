import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import * as request from "~/utils/request";
import CardKanji from "~/components/CardKanji/CardKanji";
import styles from "./ListKanji.module.scss";
const cx = classNames.bind(styles);

function ListKanji() {
  const [listKanji, setListKanji] = useState([]);
  const [listType, setListType] = useState(["N5", "N4", "N3", "N2", "N1"]);
  const [type, setType] = useState("All");
  useEffect(() => {
    request.get("list-kanji").then((res) => {
      setListKanji(res.listKanji);
    });
  }, []);
  const renderCard = () => {
    return listKanji.map((item, index) => {
      return (
        <div key={index}>
          <CardKanji Kanji={item} />
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
    request.get(`list-kanji/${$type}`).then((res) => {
      setListKanji(res.listKanji);
    });
  };

  const handleGetAll = () => {
    request.get("list-kanji").then((res) => {
      setListKanji(res.listKanji);
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
export default ListKanji;
