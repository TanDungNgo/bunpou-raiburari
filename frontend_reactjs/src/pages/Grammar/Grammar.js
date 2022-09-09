import classNames from "classnames/bind";
import styles from "./Grammar.module.scss";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import request from "~/utils/request";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

function Grammar() {
  const { id } = useParams();
  const [grammar, setGrammar] = useState();
  useEffect(() => {
    request.get(`grammar/${id}`).then((res) => {
      setGrammar(res.data.grammar);
    });
  }, []);
  const renderStructure = grammar?.structure?.split(";").map((item, index) => {
    return (
      <div key={index}>
        <p className={cx("text")}>{item}</p>
      </div>
    );
  });
  const renderExample = grammar?.example?.split(";").map((item, index) => {
    return (
      <div key={index}>
        <p>{item}</p>
      </div>
    );
  });
  const handleBookmark = () => {
    const iconStar = document.getElementsByClassName(cx("icon"));
    iconStar[0].classList.add(cx("active"));
  };
  return (
    <div className={cx("wrapper")}>
      {grammar ? (
        <div className={cx("card")}>
          <div className={cx("card-bookmark", `${grammar.type}`)}>
            <button className={cx("btn-bookmark")} onClick={handleBookmark}>
              <FontAwesomeIcon
                icon={faStar}
                className={cx("icon")}
              ></FontAwesomeIcon>
            </button>
          </div>
          <div className={cx("card-header", `${grammar.type}`)}>
            <div className={cx("card-title")}>{grammar.title}</div>
          </div>
          <div className={cx("card-content")}>
            <div className={cx("content")}>
              <div className={cx("box", `${grammar.type}`)}>
                <span>Mean</span>
              </div>
            </div>
            <p className={cx("text")}>{grammar.mean}</p>
          </div>
          <div className={cx("card-content")}>
            <div className={cx("content")}>
              <div className={cx("box", `${grammar.type}`)}>
                <span>Use</span>
              </div>
            </div>
            <p className={cx("text")}>{grammar.use}</p>
          </div>
          <div className={cx("card-content")}>
            <div className={cx("content")}>
              <div className={cx("box", `${grammar.type}`)}>
                <span>Structure</span>
              </div>
            </div>
            <div className={cx("text")}> {renderStructure}</div>
          </div>
          <div className={cx("card-content")}>
            <div className={cx("content")}>
              <div className={cx("box", `${grammar.type}`)}>
                <span>Example</span>
              </div>
            </div>
            <div className={cx("text")}> {renderExample}</div>
          </div>
          <div className={cx("card-footer", `${grammar.type}`)}></div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
export default Grammar;
