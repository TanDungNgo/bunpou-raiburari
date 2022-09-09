import classNames from "classnames/bind";
import styles from "./Kanji.module.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import request from "~/utils/request";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { bookmark, unbookmark } from "~/services/bookmarkedService";
const cx = classNames.bind(styles);

function Kanji() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const { id } = useParams();
  const [kanji, setKanji] = useState();
  const [checkBookmark, setCheckBookmark] = useState(false);
  const [idBookmark, setIdBookmark] = useState();

  useEffect(() => {
    request.get(`kanji/${id}`).then((res) => {
      setKanji(res.data.kanji);
    });
  }, []);

  useEffect(() => {
    request.get(`bookmarkKanjis/${currentUser.id}`).then((res) => {
      for (var i = 0; i < res.data.bookmarkedKanjis.length; i++) {
        if (id == res.data.bookmarkedKanjis[i].kanji_id) {
          setCheckBookmark(true);
          setIdBookmark(res.data.bookmarkedKanjis[i].id);
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
      unbookmark(idBookmark);
    } else {
      const iconStar = document.getElementsByClassName(cx("icon"));
      iconStar[0].classList.add(cx("active"));
      setCheckBookmark(true);
      const formData = new FormData();
      formData.append("user_id", currentUser.id);
      formData.append("kanji_id", id);
      bookmark(formData);
    }
  };
  const renderExample = kanji?.example?.split(";").map((item, index) => {
    return <p key={index}>{item}</p>;
  });
  return (
    <div className={cx("wrapper")}>
      {kanji ? (
        <div className={cx("card")}>
          <div className={cx("card-bookmark", `${kanji.type}`)}>
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
          <div className={cx("card-header", `${kanji.type}`)}>
            <div className={cx("card-title")}>{kanji.title}</div>
          </div>
          <div className={cx("card-content")}>
            <div className={cx("content")}>
              <div className={cx("box", `${kanji.type}`)}>
                <span>Mean</span>
              </div>
            </div>
            <p className={cx("text")}>{kanji.mean}</p>
          </div>
          <div className={cx("card-content")}>
            <div className={cx("content")}>
              <div className={cx("box", `${kanji.type}`)}>
                <span>Structure</span>
              </div>
            </div>
            <p className={cx("text")}>{kanji.structure.split(";")} </p>
          </div>
          <div className={cx("card-content")}>
            <div className={cx("content")}>
              <div className={cx("box", `${kanji.type}`)}>
                <span>Example</span>
              </div>
            </div>
            <div className={cx("text")}>{renderExample}</div>
          </div>
          <div className={cx("card-footer", `${kanji.type}`)}></div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
export default Kanji;
