import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import request from "~/utils/request";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./CreateCardKanji.module.scss";
import Button from "~/components/Button/Button";
const cx = classNames.bind(styles);

function CreateCardKanji() {
  const [listType, setListType] = useState(["N5", "N4", "N3", "N2", "N1"]);
  const [type, setType] = useState("N5");
  const renderType = () => {
    return listType.map((item, index) => {
      return (
        <option key={index} value={item}>
          {item}
        </option>
      );
    });
  };

  const handleChange = (e) => {
    setType(e.target.value);
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("flex")}>
        <select className={cx("combobox")} onChange={handleChange}>
          {renderType()}
        </select>
      </div>

      <div className={cx("card")}>
        <div className={cx("card-bookmark", `${type}`)}>
          <button className={cx("btn-bookmark")}>
            <FontAwesomeIcon
              icon={faStar}
              className={cx("icon")}
            ></FontAwesomeIcon>
          </button>
        </div>
        <div className={cx("card-header", `${type}`)}>
          <input
            type="text"
            placeholder="Title"
            className={cx("card-title")}
          ></input>
        </div>
        <div className={cx("card-content")}>
          <div className={cx("content")}>
            <div className={cx("box", `${type}`)}>
              <span>Ý nghĩa</span>
            </div>
          </div>
          <input type="text" className={cx("text")}></input>
        </div>
        <div className={cx("card-content")}>
          <div className={cx("content")}>
            <div className={cx("box", `${type}`)}>
              <span>Cấu trúc</span>
            </div>
          </div>
          <input type="text" className={cx("text")}></input>
        </div>
        <div className={cx("card-content")}>
          <div className={cx("content")}>
            <div className={cx("box", "ex", `${type}`)}>
              <span>Ví dụ</span>
            </div>
          </div>
          <input type="text" className={cx("text")}></input>
        </div>
        <div className={cx("card-footer", `${type}`)}></div>
      </div>
      <Button outline>Create Card</Button>
    </div>
  );
}

export default CreateCardKanji;
