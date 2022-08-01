import CardKanji from "~/components/CardKanji";
import classNames from "classnames/bind";
import styles from "./Kanji.module.scss";
import { useEffect, useState } from "react";
const cx = classNames.bind(styles);

function Kanji() {
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
      {/* <div className={cx("wrapper")}> {renderCard(listKanji)}</div> */}
    </div>
  );
}
export default Kanji;
