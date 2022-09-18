import styles from "./CreateAnswer.module.scss";
import classNames from "classnames/bind";
import Button from "~/components/Button/Button";
import request from "~/utils/request";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const cx = classNames.bind(styles);
function CreateAnswer() {
  const { id } = useParams();
  const [question, setQuestion] = useState();
  const [correctAnswer, setCorrectAnswer] = useState("1");
  const [answer1, setAnswer1] = useState("");
  const [answer2, setAnswer2] = useState("");
  const [answer3, setAnswer3] = useState("");
  const [answer4, setAnswer4] = useState("");
  useEffect(() => {
    request.get(`question/${id}`).then((res) => {
      setQuestion(res.data.question);
    });
  }, []);

  const handleSubmit = () => {
    let Answers = [];
    Answers.push(answer1);
    Answers.push(answer2);
    Answers.push(answer3);
    Answers.push(answer4);
    for (let i = 0; i < Answers.length; i++) {
      let isCorrect = false;
      if (i == correctAnswer - 1) isCorrect = true;
      const formData = new FormData();
      formData.append("text", Answers[i]);
      formData.append("isCorrect", isCorrect);
      formData.append("question_id", id);
      request.post(`add-answer/${id}`, formData).then((res) => {
        console.log(res.data);
      });
    }
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
                placeholder="Answer 1"
                onChange={(e) => setAnswer1(e.target.value)}
              ></input>
            </div>
            <div className={cx("answer-text")}>
              <input
                type="text"
                className={cx("input-text")}
                placeholder="Answer 2"
                onChange={(e) => setAnswer2(e.target.value)}
              ></input>
            </div>
            <div className={cx("answer-text")}>
              <input
                type="text"
                className={cx("input-text")}
                placeholder="Answer 3"
                onChange={(e) => setAnswer3(e.target.value)}
              ></input>
            </div>
            <div className={cx("answer-text")}>
              <input
                type="text"
                className={cx("input-text")}
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
          <Button outline className={cx("next-btn")} onClick={handleSubmit}>
            Done
          </Button>
        </footer>
      </div>
    </div>
  );
}

export default CreateAnswer;
