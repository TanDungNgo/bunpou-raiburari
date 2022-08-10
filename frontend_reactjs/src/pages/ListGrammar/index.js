import { useEffect, useState } from "react";
import classNames from "classnames/bind";
import * as request from "~/utils/request";
import CardGrammar from "~/components/CardGrammar";
import styles from "./ListGrammar.module.scss";
const cx = classNames.bind(styles);


function ListGrammar() {
  const [listGrammar, setListGrammar] = useState([]);
  useEffect(() => {
    request.get("list-grammar")
      .then((res) => {
        setListGrammar(res.listGrammar);
      });
  }, []);
  const renderCard = (listGrammar) => {
    return listGrammar.map((item, index) => {
      return (
        <div key={index}>
          <CardGrammar Grammar={item} />
        </div>
      );
    });
  };
  return (
    <div>
      <div className={cx("wrapper")}> {renderCard(listGrammar)}</div>
    </div>
  );
}
export default ListGrammar;
