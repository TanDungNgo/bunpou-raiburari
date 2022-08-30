import classNames from "classnames/bind";
import styles from "./Kanji.module.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import request from "~/utils/request";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

function Kanji() {
  const { id } = useParams();
  const [kanji, setKanji] = useState();

  useEffect(() => {
    request.get(`kanji/${id}`).then((res) => {
      setKanji(res.data.Kanji);
    });
  }, []);

  const handleBookmark = () => {
    const iconStar = document.getElementsByClassName(cx("icon"));
    iconStar[0].classList.add(cx("active"));
  };
  return (
    <>
      {kanji ? (
        <div className={cx("card")}>
          <div className={cx("card_header", `${kanji.type}`)}>
            <button className={cx("btn-bookmark")} onClick={handleBookmark}>
              <FontAwesomeIcon
                icon={faStar}
                className={cx("icon")}
              ></FontAwesomeIcon>
            </button>
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
