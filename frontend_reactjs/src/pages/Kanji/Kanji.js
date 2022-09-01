import classNames from "classnames/bind";
import styles from "./Kanji.module.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import request from "~/utils/request";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

function Kanji() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const { id } = useParams();
  const [kanji, setKanji] = useState();
  const [checkBookmark, setCheckBookmark] = useState(false);

  useEffect(() => {
    request.get(`kanji/${id}`).then((res) => {
      setKanji(res.data.Kanji);
    });
  }, []);

  useEffect(() => {
    request.get(`bookmarkKanji/${currentUser.id}`).then((res) => {
      for (var i = 0; i < res.data.listKanji.length; i++) {
        if (id == res.data.listKanji[i].kanji_id) {
          setCheckBookmark(true);
          break;
        }
      }
    });
  }, []);

  const handleBookmark = () => {
    if (checkBookmark) {
      const iconStar = document.getElementsByClassName(cx("icon", "active"));
      iconStar[0].classList.remove(cx("active"));
      setCheckBookmark(false);
    } else {
      const iconStar = document.getElementsByClassName(cx("icon"));
      iconStar[0].classList.add(cx("active"));
      setCheckBookmark(true);
    }
  };
  return (
    <>
      {kanji ? (
        <div className={cx("card")}>
          <div className={cx("card_bookmark", `${kanji.type}`)}>
            <button className={cx("btn-bookmark")} onClick={handleBookmark}>
              {checkBookmark ? (
                <FontAwesomeIcon
                  icon={faStar}
                  className={cx("icon", "active")}
                ></FontAwesomeIcon>
              ) : (
                <FontAwesomeIcon
                  icon={faStar}
                  className={cx("icon")}
                ></FontAwesomeIcon>
              )}
            </button>
          </div>
          <div className={cx("card_header", `${kanji.type}`)}>
            <div className={cx("card_title")}>{kanji.title}</div>
          </div>
          <div className={cx("card_content")}>
            <div className={cx("box", `${kanji.type}`)}>
              <span>Ý nghĩa</span>
            </div>
            <p className={cx("text")}>{kanji.mean}</p>
          </div>
          <div className={cx("card_content")}>
            <div className={cx("box", `${kanji.type}`)}>
              <span>Cấu trúc</span>
            </div>
            <p className={cx("text")}>{kanji.structure.split(";")} </p>
          </div>
          <div className={cx("card_content")}>
            <div className={cx("box", "ex", `${kanji.type}`)}>
              <span>Ví dụ</span>
            </div>
            <p className={cx("text")}>{kanji.example}</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}
export default Kanji;
