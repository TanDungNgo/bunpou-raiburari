import classNames from "classnames/bind";
import styles from "./Grammar.module.scss";
import { useEffect, useState, useParams } from "react";

const cx = classNames.bind(styles);

function Grammar(props) {
  return (
    <div>
      <div className={cx("wrapper")}>
        <h2>Grammar</h2>
      </div>
    </div>
  );
}
export default Grammar;
