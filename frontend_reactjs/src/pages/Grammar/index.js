import CardKanji from "~/components/CardKanji";
import classNames from "classnames/bind";
import styles from "./Grammar.module.scss";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);

function Grammar() {
  //   const [listKanji, setListKanji] = useState([]);
  //   useEffect(() => {
  //     fetch("http://127.0.0.1:8000/api/list-kanji")
  //       .then((res) => res.json())
  //       .then((res) => {
  //         setListKanji(res.list_kanji);
  //       });
  //   }, []);
  //   const renderCard = (listKanji) => {
  //     return listKanji.map((item, index) => {
  //       return (
  //         <div key={index}>
  //           <CardKanji Kanji={item} />
  //         </div>
  //       );
  //     });
  //   };
  return (
    <div>
      <div className={cx("wrapper")}>
        <h2>Grammar</h2>
      </div>
    </div>
  );
}
export default Grammar;
