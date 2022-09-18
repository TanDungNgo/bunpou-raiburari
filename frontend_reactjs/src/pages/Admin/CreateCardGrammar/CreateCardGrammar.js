import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import request from "~/utils/request";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./CreateCardGrammar.module.scss";
import Button from "~/components/Button/Button";
import { createCardGrammar } from "~/services/createService";
const cx = classNames.bind(styles);

function CreateCardGrammar() {
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  const [listType, setListType] = useState(["N5", "N4", "N3", "N2", "N1"]);
  const [type, setType] = useState("N5");
  const [title, setTitle] = useState("");
  const [mean, setMean] = useState("");
  const [use, setUse] = useState("");
  const [structure, setStructure] = useState("");
  const [example, setExample] = useState("");
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

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append("type", type);
    formData.append("title", title);
    formData.append("mean", mean);
    formData.append("use", use);
    formData.append("structure", structure);
    formData.append("example", example);
    formData.append("user_id", currentUser.id);
    createCardGrammar(formData);
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
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div className={cx("card-content")}>
          <div className={cx("content")}>
            <div className={cx("box", `${type}`)}>
              <span>Mean</span>
            </div>
          </div>
          <input
            type="text"
            className={cx("text")}
            onChange={(e) => setMean(e.target.value)}
          ></input>
        </div>
        <div className={cx("card-content")}>
          <div className={cx("content")}>
            <div className={cx("box", `${type}`)}>
              <span>Use</span>
            </div>
          </div>
          <input
            type="text"
            className={cx("text")}
            onChange={(e) => setUse(e.target.value)}
          ></input>
        </div>
        <div className={cx("card-content")}>
          <div className={cx("content")}>
            <div className={cx("box", `${type}`)}>
              <span>Structure</span>
            </div>
          </div>
          <input
            type="text"
            className={cx("text")}
            onChange={(e) => setStructure(e.target.value)}
          ></input>
        </div>
        <div className={cx("card-content")}>
          <div className={cx("content")}>
            <div className={cx("box", "ex", `${type}`)}>
              <span>Example</span>
            </div>
          </div>
          <input
            type="text"
            className={cx("text")}
            onChange={(e) => setExample(e.target.value)}
          ></input>
        </div>
        <div className={cx("card-footer", `${type}`)}></div>
      </div>
      <Button outline onClick={handleSubmit}>
        Create Card
      </Button>
    </div>
  );
}

export default CreateCardGrammar;
