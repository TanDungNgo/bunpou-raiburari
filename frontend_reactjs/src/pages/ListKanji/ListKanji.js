import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import * as request from "~/utils/request";
import CardKanji from "~/components/CardKanji/CardKanji";
import styles from "./ListKanji.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

function ListKanji() {
  const [listKanji, setListKanji] = useState([]);
  const [listType, setListType] = useState(["N5", "N4", "N3", "N2", "N1"]);
  const [type, setType] = useState("All");
  const [pages, setPages] = useState(["1", "2"]);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    request.get(`list-kanji/all/page/${currentPage}`).then((res) => {
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

  const renderTypes = () => {
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

  const renderPages = () => {
    return pages.map((item, index) => {
      return (
        <li key={index} className={cx("page-number")}> 1</li>
      )
    })
  }

  const handleNextPage = () => {
    var nextPage = currentPage + 1;
    request.get(`list-kanji/all/page/${nextPage}`).then((res) => {
      setListKanji(res.listKanji);
    });
    setCurrentPage(currentPage + 1);
  };

  const handlePrevPage = () => {
    var nextPage = currentPage - 1;
    request.get(`list-kanji/all/page/${nextPage}`).then((res) => {
      setListKanji(res.listKanji);
    });
    setCurrentPage(currentPage - 1);
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
          {renderTypes()}
        </ul>
      </div>
      <div className={cx("wrapper")}> {renderCard()}</div>
      <ul className={cx("page")}>
        <li className={cx("page-btn")} onClick={handlePrevPage}>
          <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
        </li>

        <li className={cx("page-number")}> 1</li>
        <li className={cx("page-number")}>2</li>
        <li className={cx("page-dots")}>...</li>
        <li className={cx("page-number")}> 4</li>

        <li className={cx("page-btn")} onClick={handleNextPage}>
          <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
        </li>
      </ul>
    </div>
  );
}
export default ListKanji;
