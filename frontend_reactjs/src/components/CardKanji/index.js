import classNames from "classnames/bind";
import styles from "./CardKanji.module.scss";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

function CardKanji(props) {
  return (
    <div className={cx("card")}>
      <div className={cx("card__body")}>
        <img
          className={cx("card__image")}
          src={`/img/${props.Kanji.type}.jpg`}
        ></img>
        <h2 className={cx("card__title")}>{props.Kanji.title}</h2>
        <div className={cx("card__description")}>
          <p>{props.Kanji.mean}</p>
          <p>{props.Kanji.structure}</p>
        </div>
      </div>
    </div>
  );
}
export default CardKanji;
