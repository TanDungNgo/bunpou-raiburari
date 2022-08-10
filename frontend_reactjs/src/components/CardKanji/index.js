import classNames from "classnames/bind";
import styles from "./CardKanji.module.scss";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

function CardKanji(props) {
  let kanji = props.Kanji;
  let hiragana = props.Kanji.structure.split(";");
  return (
    <Link to={`/kanji/${kanji.id}`}>
      <div className={cx("card")}>
        <div className={cx("card__body")}>
          <img
            className={cx("card__image")}
            src={`/img/${kanji.type}.jpg`}
          ></img>
          <h2 className={cx("card__title")}>{kanji.title}</h2>
          <div className={cx("card__description")}>
            <p>{hiragana[0]}</p>
            <p>{kanji.mean}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default CardKanji;
