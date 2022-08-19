import classNames from "classnames/bind";
import styles from "./Kanji.module.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import request from "~/utils/request";
const cx = classNames.bind(styles);

function Kanji() {
  const { id } = useParams();
  const [kanji, setKanji] = useState();
  useEffect(() => {
    request.get(`kanji/${id}`).then((res) => {
      setKanji(res.data.Kanji);
    });
  }, []);
  return (
    <>
      {kanji ? (
        <div className={cx("card")}>
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
