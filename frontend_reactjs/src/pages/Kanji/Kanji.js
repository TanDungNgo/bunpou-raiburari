import classNames from "classnames/bind";
import styles from "./Kanji.module.scss";
import { useEffect, useState } from "react";
const cx = classNames.bind(styles);

function Kanji() {
  // console.log(props.match)
  // const [Kanji, setKanji] = useState();
  // useEffect(() => {
  //   fetch(`http://127.0.0.1:8000/api/kanji/1`)
  //     .then((res) => res.json())
  //     .then((res) => {
  //       setKanji(res.Kanji);
  //     });
  // }, []);
  return <div>Kanji</div>;
}
export default Kanji;
