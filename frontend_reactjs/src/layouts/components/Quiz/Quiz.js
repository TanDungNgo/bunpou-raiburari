import { useState } from "react";
import styles from "./Quiz.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faCircleXmark,
  faCrown,
} from "@fortawesome/free-solid-svg-icons";
import Button from "~/components/Button/Button";

const cx = classNames.bind(styles);

const questions = [
  {
    questionText: "きょうは「食堂」がこんでいました。",
    answerOptions: [
      { answerText: "しょくどう", isCorrect: true },
      { answerText: "しゅくど", isCorrect: false },
      { answerText: "しょくど", isCorrect: false },
      { answerText: "しゅくどう", isCorrect: false },
    ],
  },
  {
    questionText: "くつに「石」が入っていました。",
    answerOptions: [
      { answerText: "すな", isCorrect: false },
      { answerText: "さく", isCorrect: false },
      { answerText: "いし", isCorrect: true },
      { answerText: "えだ", isCorrect: false },
    ],
  },
];

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [checkSelected, setCheckSelected] = useState(false);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(15);
  const Select = (isCorrect, key) => {
    if (!checkSelected) {
      const answer = document.getElementsByClassName(cx("answer-text"));
      setCheckSelected(true);
      if (isCorrect) {
        setScore(score + 1);
        answer[key].classList.toggle(cx("correct"));
      } else {
        answer[key].classList.toggle(cx("iscorrect"));
      }
      for (let i = 0; i < answer.length; i++) {
        answer[i].classList.toggle(cx("disabled"));
      }
    }
  };

  const renderAnswer = () => {
    return questions[currentQuestion].answerOptions.map((item, index) => {
      return (
        <div
          key={index}
          className={cx("answer-text")}
          onClick={() => Select(item.isCorrect, index)}
        >
          <span>{item.answerText}</span>
          {checkSelected ? (
            <div className={cx("icon")}>
              {item.isCorrect ? (
                <FontAwesomeIcon className={cx("tick")} icon={faCheckCircle} />
              ) : (
                <FontAwesomeIcon className={cx("cross")} icon={faCircleXmark} />
              )}
            </div>
          ) : (
            <></>
          )}
        </div>
      );
    });
  };

  const Start = () => {
    setClassnameStartButton("");
    setClassnameQuizBox("active");
    // startTimer(time);
  };
  const Replay = () => {
    setClassnameQuizBox("active");
    setCurrentQuestion(0);
    setClassnameResultBox("");
    setCheckSelected(false);
    setScore(0);
    // setTime(15);
    // startTimer(time);
  };
  const [classnameStartButton, setClassnameStartButton] = useState("active");
  const classesStartButton = cx("start-btn", classnameStartButton);
  const [classnameQuizBox, setClassnameQuizBox] = useState("");
  const classesQuizBox = cx("quiz-box", classnameQuizBox);
  const [classnameResultBox, setClassnameResultBox] = useState("");
  const classesResultBox = cx("result-box", classnameResultBox);
  const Next = () => {
    if (checkSelected) {
      const answer = document.getElementsByClassName(cx("answer-text"));
      for (let i = 0; i < answer.length; i++) {
        answer[i].classList.remove(cx("correct"));
        answer[i].classList.remove(cx("iscorrect"));
        answer[i].classList.remove(cx("disabled"));
      }
      // setTime(15);
      // startTimer(time);
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        setCheckSelected(false);
      } else {
        setClassnameQuizBox("");
        setClassnameResultBox("active");
      }
    }
  };

  const startTimer = (timeValue) => {
    const timer = () => {
      if (timeValue >= 0) {
        setTime(timeValue);
        timeValue--;
      } else {
        return;
      }
    };
    setInterval(timer, 1000);
  };

  return (
    <div>
      {/* Start button */}
      <div className={classesStartButton}>
        <Button primary onClick={Start}>
          Start Quiz
        </Button>
      </div>
      {/* Quiz box */}
      <div className={classesQuizBox}>
        <header>
          <div className={cx("title")}> Question {currentQuestion + 1}</div>
          <div className={cx("timer")}>
            <div className={cx("time-text")}>Time Left</div>
            <div className={cx("timer-sec")}>{time}</div>
          </div>
        </header>
        <section>
          <div className={cx("question-text")}>
            <span> {questions[currentQuestion].questionText}</span>
          </div>
          <div className={cx("answer-list")}>{renderAnswer()}</div>
        </section>

        <footer>
          <div className={cx("total-question")}>
            <span>
              <p>{currentQuestion + 1}</p>of<p>{questions.length}</p>Questions
            </span>
          </div>
          <Button outline className={cx("next-btn")} onClick={Next}>
            Next question
          </Button>
        </footer>
      </div>

      {/* Result box */}
      <div className={classesResultBox}>
        <h4>Congratulation!</h4>
        <div className={cx("icon")}>
          <FontAwesomeIcon icon={faCrown} />
        </div>
        <div className={cx("complete-text")}>You've completed the Quiz</div>
        <div className={cx("score-text")}>
          <span>
            You've got of <p>{score}</p> right
          </span>
        </div>
        <div className={cx("button")}>
          <Button primary onClick={Replay}>
            Replay Quiz
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
