import { faEdit, faEye, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import swal from "sweetalert";
import request from "~/utils/request";
import styles from "./ListQuestion.module.scss";

const cx = classNames.bind(styles);
function ListQuestion() {
  const [listQuestion, setListQuestion] = useState([]);
  const [questionText, setQuestionText] = useState();
  useEffect(() => {
    request.get("list-question").then((res) => {
      setListQuestion(res.data.listQuestion);
    });
  }, []);

  const handleAddQuestion = () => {
    swal({
      title: "Enter question",
      className: cx("swal"),
      content: "input",
      closeOnClickOutside: false,
      buttons: {
        cancel: true,
        confirm: {
          text: "Add",
        },
      },
    }).then((value) => {
      if (value !== null) {
        const formData = new FormData();
        formData.append("text", value);
        request.post("add-question", formData).then((res) => {
          if (res.data.status === 200) {
            swal({
              title: "Success!",
              text: res.data.message,
              icon: "success",
            }).then(() => {
              window.location.reload();
            });
          } else if (res.data.validate) {
            swal({
              title: "Notification!",
              text: res.data.message,
              icon: "info",
            });
          } else {
            swal({
              title: "Error!",
              icon: "error",
            });
          }
        });
      }
    });
  };

  const handleEdit = (id) => {
    request.get(`edit-question/${id}`).then((res) => {
      setQuestionText(res.data.question.text);
      swal({
        title: "Edit question",
        className: cx("swal"),
        content: {
          element: "input",
          attributes: {
            value: res.data.question.text,
          },
        },
        closeOnClickOutside: false,
        buttons: {
          cancel: true,
          confirm: {
            text: "Update",
          },
        },
      }).then((value) => {
        if (value !== null) {
          // const state = {
          //   text: questionText,
          // };
          // request.put(`update-question/${id}`, state).then((res) => {
          //   if (res.data.status === 200) {
          //     swal({
          //       title: "Success!",
          //       text: res.data.message,
          //       icon: "success",
          //     }).then(() => {
          //       window.location.reload();
          //     });
          //   } else if (res.data.validate) {
          //     swal({
          //       title: "Notification!",
          //       text: res.data.message,
          //       icon: "info",
          //     });
          //   } else {
          //     swal({
          //       title: "Error!",
          //       icon: "error",
          //     });
          //   }
          // });
        }
      });
    });
  };

  const renderQuestion = () => {
    return listQuestion.map((item, index) => {
      return (
        <div key={index} className={cx("table", "row")}>
          <div className={cx("col1")}>{item.id}</div>
          <div className={cx("col2")}>{item.text}</div>
          <div className={cx("col3")}>
            <button className={cx("btn-action", "view")}>
              <FontAwesomeIcon icon={faEye} />
            </button>
            <button
              className={cx("btn-action", "edit")}
              onClick={() => handleEdit(item.id)}
            >
              <FontAwesomeIcon icon={faEdit} />
            </button>
            <button className={cx("btn-action", "remove")}>
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
          </div>
        </div>
      );
    });
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("table", "header")}>
        <div className={cx("col1")}>Question Id</div>
        <div className={cx("col2")}>Question Content</div>
        <div className={cx("col3")}>Action</div>
      </div>
      {renderQuestion()}
      <button className={cx("btn-action", "add")} onClick={handleAddQuestion}>
        <FontAwesomeIcon icon={faCirclePlus} />
      </button>
    </div>
  );
}

export default ListQuestion;
