import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import * as request from "~/utils/request";
import CardKanji from "~/components/CardKanji/CardKanji";
import styles from "./ListKanji.module.scss";
const cx = classNames.bind(styles);

function ListKanji() {
  const [listKanji, setListKanji] = useState([]);
  useEffect(() => {
    request.get("list-kanji").then((res) => {
      setListKanji(res.listKanji);
    });
  }, []);
  const renderCard = (listKanji) => {
    return listKanji.map((item, index) => {
      return (
        <div key={index}>
          <CardKanji Kanji={item} />
        </div>
      );
    });
  };
  return (
    <div>
      <div className={cx("wrapper")}> {renderCard(listKanji)}</div>
    </div>
  );
}
export default ListKanji;
