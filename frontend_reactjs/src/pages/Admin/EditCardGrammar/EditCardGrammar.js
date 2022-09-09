import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import request from "~/utils/request";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";
import styles from "./EditCardGrammar.module.scss";
import Button from "~/components/Button/Button";
import swal from "sweetalert";
const cx = classNames.bind(styles);

function EditCardGrammar() {
  const [listType, setListType] = useState(["N5", "N4", "N3", "N2", "N1"]);
  const [type, setType] = useState("");
  const [title, setTitle] = useState("");
  const [use, setUse] = useState("");
  const [mean, setMean] = useState("");
  const [structure, setStructure] = useState("");
  const [example, setExample] = useState("");
  const { id } = useParams();
  useEffect(() => {
    request.get(`grammar/${id}`).then((res) => {
      setType(res.data.grammar.type);
      setTitle(res.data.grammar.title);
      setUse(res.data.grammar.use);
      setMean(res.data.grammar.mean);
      setStructure(res.data.grammar.structure);
      setExample(res.data.grammar.example);
    });
  }, []);
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

  const handleUpdate = () => {
    const state = {
      type: type,
      title: title,
      mean: mean,
      use: use,
      structure: structure,
      example: example,
    };
    request.put(`update-grammar/${id}`, state).then((res) => {
      if (res.data.status == 200) {
        swal({
          title: "Success!",
          text: res.data.message,
          icon: "success",
        }).then(() => {
          window.location.reload();
        });
      } else {
        swal({
          title: "Error!",
          icon: "error",
        });
      }
    });
  };

  return (
    <div className={cx("wrapper")}>
      <div className={cx("flex")}>
        <select className={cx("combobox")} onChange={handleChange} value={type}>
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
            value={title}
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
            value={mean}
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
            value={use}
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
            value={structure}
            onChange={(e) => setStructure(e.target.value)}
          ></input>
        </div>
        <div className={cx("card-content")}>
          <div className={cx("content")}>
            <div className={cx("box", `${type}`)}>
              <span>Example</span>
            </div>
          </div>
          <input
            type="text"
            className={cx("text")}
            value={example}
            onChange={(e) => setExample(e.target.value)}
          ></input>
        </div>
        <div className={cx("card-footer", `${type}`)}></div>
      </div>

      <Button outline onClick={handleUpdate}>
        Update Card
      </Button>
    </div>
  );
}

export default EditCardGrammar;
