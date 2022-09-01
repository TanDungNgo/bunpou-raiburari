import { useEffect, useState } from "react";
import CardKanji from "~/components/CardKanji/CardKanji";
import * as request from "~/utils/request";
import classNames from "classnames/bind";
import styles from "./Bookmark.module.scss";
import CardGrammar from "~/components/CardGrammar/CardGrammar";
const cx = classNames.bind(styles);

function Bookmark() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [listKanji, setListKanji] = useState([]);
  const [listGrammar, setListGrammar] = useState([]);
  useEffect(() => {
    request.get(`bookmark/${currentUser.id}`).then((res) => {
      setListKanji(res.listKanji);
      setListGrammar(res.listGrammar);
    });
  }, []);
  const renderCardKanji = () => {
    return listKanji.map((item, index) => {
      return (
        <div key={index}>
          <CardKanji Kanji={item} />
        </div>
      );
    });
  };
  const renderCardGrammar = () => {
    return listGrammar.map((item, index) => {
      return (
        <div key={index}>
          <CardGrammar Grammar={item} />
        </div>
      );
    });
  };
  return (
    <div className={cx("")}>
      <h2>Kanji</h2>
      <div className={cx("wrapper")}>{renderCardKanji()}</div>
      <h2>Grammar</h2>
      <div className={cx("wrapper")}>{renderCardGrammar()}</div>
    </div>
  );
}

export default Bookmark;
