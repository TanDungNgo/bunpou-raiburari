import classNames from "classnames/bind";
import styles from "./Grammar.module.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import request from "~/utils/request";

const cx = classNames.bind(styles);

function Grammar() {
  const { id } = useParams();
  const [grammar, setGrammar] = useState();
  useEffect(() => {
    request.get(`grammar/${id}`).then((res) => {
      setGrammar(res.data.grammar);
    });
  }, []);
  const renderExample = grammar?.example?.split("。").map((item, index) => {
    return (
      <div key={index}>
        <p>{item}</p>
      </div>
    );
  });
  return (
    <div>
      {grammar ? (
        <div className={cx("card")}>
          <div className={cx("card_header", `${grammar.type}`)}>
            <div className={cx("card_title")}>{grammar.title}</div>
          </div>
          <div className={cx("card_content")}>
            <div className={cx("box", `${grammar.type}`)}>
              <span>Ý nghĩa</span>
            </div>
            <p className={cx("text")}>{grammar.mean}</p>
          </div>
          <div className={cx("card_content")}>
            <div className={cx("box", "use", `${grammar.type}`)}>
              <span>Cách dùng</span>
            </div>
            <p className={cx("text")}>{grammar.use}</p>
          </div>
          <div className={cx("card_content")}>
            <div className={cx("box", `${grammar.type}`)}>
              <span>Cấu trúc</span>
            </div>
            <p className={cx("text")}>{grammar.structure}</p>
          </div>
          <div className={cx("card_content")}>
            <div className={cx("box", "ex", `${grammar.type}`)}>
              <span>Ví dụ</span>
            </div>
            {/* <p className={cx("text")}>{grammar.example}</p> */}
            <div className={cx("example")}> {renderExample}</div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
export default Grammar;
