import classNames from "classnames/bind";
import styles from "./KanjiItem.module.scss";
import { Link } from "react-router-dom";
const cx = classNames.bind(styles);

function KanjiItem({ data }) {
  console.log(data);
  return (
    <Link to={`/kanji/${data.id}`} className={cx("wrapper")}>
      <img className={cx("img")} src={`img/${data.type}.jpg`} alt={data.type} />
      <div className={cx("info")}>
        <h4 className={cx("word")}>
          <span>{data.title}</span>
        </h4>
        <span className={cx("means")}> {data.mean} </span>
      </div>
    </Link>
  );
}
export default KanjiItem;
