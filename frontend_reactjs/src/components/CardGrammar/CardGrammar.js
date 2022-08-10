import classNames from "classnames/bind";
import styles from "./CardGrammar.module.scss";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles);
function CardGrammar(props) {
  return (
    <Link to={`/grammar/${props.Grammar.id}`}>
      <div className={cx("card")}>
        <div className={cx("card__body")}>
          <img className={cx("card__image")} src={`/img/${props.Grammar.type}.jpg`}></img>
          <h2 className={cx("card__title")}>{props.Grammar.title}</h2>
          <div className={cx("card__description")}>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default CardGrammar;
