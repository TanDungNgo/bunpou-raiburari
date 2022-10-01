import styles from "./CreateAnswer.module.scss";
import classNames from "classnames/bind";
import Button from "~/components/Button/Button";
import request from "~/utils/request";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import swal from "sweetalert";

const cx = classNames.bind(styles);
function CreateAnswer() {
  const { id } = useParams();
  const [question, setQuestion] = useState();
  const [correctAnswer, setCorrectAnswer] = useState("1");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  // Kiểm tra câu hỏi có đáp chưa, nếu có thì đưa ra
  const [check, setCheck] = useState(false);
  useEffect(() => {
    request.get(`question/${id}`).then((res) => {
      if (res.data.answers.length !== 0) {
        setCheck(true);
        setAnswer1(res.data.answers[0].text);
        setAnswer2(res.data.answers[1].text);
        setAnswer3(res.data.answers[2].text);
        setAnswer4(res.data.answers[3].text);
        for (let i = 0; i < res.data.answers.length; i++) {
          if (res.data.answers[i].isCorrect == 1) setCorrectAnswer(i + 1);
        }
      }
      setQuestion(res.data.question);
    });
  }, []);

  const handleSubmit = () => {
    let Answers = [];
    Answers.push(answer1);
    Answers.push(answer2);
    Answers.push(answer3);
    Answers.push(answer4);
    var count = 0;
    for (let i = 0; i < Answers.length; i++) {
      let isCorrect = false;
      if (i == correctAnswer - 1) isCorrect = true;
      const formData = new FormData();
      formData.append("text", Answers[i]);
      formData.append("isCorrect", isCorrect);
      formData.append("question_id", id);
      request.post(`add-answer/${id}`, formData).then((res) => {
        if (res.data.status == 200) {
          count++;
          if (count == 4) {
            swal({
              title: "Success!",
              text: "Added Answers Successfully",
              icon: "success",
            }).then(() => {
              window.location.reload();
            });
          }
        }
      });
    }
  };

  const handleUpdate = () => {
    console.log("Update");
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("quiz-box")}>
        <header>
          <div className={cx("title")}>Question</div>
          <div className={cx("timer")}>
            <div className={cx("time-text")}>Time Left</div>
            <div className={cx("timer-sec")}>15</div>
          </div>
        </header>
        <section>
          <div className={cx("question-text")}>
            <span>{question ? question.text : ""}</span>
          </div>
          <div className={cx("answer-list")}>
            <div className={cx("answer-text")}>
              <input
                type="text"
                className={cx("input-text")}
                value={answer1}
                placeholder="Answer 1"
                onChange={(e) => setAnswer1(e.target.value)}
              ></input>
            </div>
            <div className={cx("answer-text")}>
              <input
                type="text"
                className={cx("input-text")}
                value={answer2}
                placeholder="Answer 2"
                onChange={(e) => setAnswer2(e.target.value)}
              ></input>
            </div>
            <div className={cx("answer-text")}>
              <input
                type="text"
                className={cx("input-text")}
                value={answer3}
                placeholder="Answer 3"
                onChange={(e) => setAnswer3(e.target.value)}
              ></input>
            </div>
            <div className={cx("answer-text")}>
              <input
                type="text"
                className={cx("input-text")}
                value={answer4}
                placeholder="Answer 4"
                onChange={(e) => setAnswer4(e.target.value)}
              ></input>
            </div>
          </div>
          <div className={cx("correctAnswer")}>
            <h4> Correct answer</h4>
            <select
              className={cx("combobox")}
              onChange={(e) => setCorrectAnswer(e.target.value)}
              value={correctAnswer}
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
        </section>
        <footer>
          <div className={cx("total-question")}>
            <span>
              <p>1</p>of<p>1</p>Question
            </span>
          </div>
          {check ? (
            <Button outline className={cx("next-btn")} onClick={handleUpdate}>
              Done
            </Button>
          ) : (
            <Button outline className={cx("next-btn")} onClick={handleSubmit}>
              Done
            </Button>
          )}
        </footer>
      </div>
    </div>
  );
}

export default CreateAnswer;
