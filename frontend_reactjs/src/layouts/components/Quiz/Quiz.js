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

  const Select = (isCorrect, key) => {
    if (!checkSelected) {
      console.log(key);
      setCheckSelected(true);
      if (isCorrect) {
        setScore(score + 1);
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
          {/* <div className={cx("icon")}>
            {item.isCorrect ? (
              <FontAwesomeIcon className={cx("tick")} icon={faCheckCircle} />
            ) : (
              <FontAwesomeIcon className={cx("cross")} icon={faCircleXmark} />
            )}
          </div> */}
        </div>
      );
    });
  };

  const Start = () => {
    setClassnameStartButton("");
    setClassnameQuizBox("active");
  };
  const Replay = () => {
    setClassnameQuizBox("active");
    setCurrentQuestion(0);
    setClassnameResultBox("");
    setCheckSelected(false);
    setScore(0);
  };
  const [classnameStartButton, setClassnameStartButton] = useState("active");
  const classesStartButton = cx("start-btn", classnameStartButton);
  const [classnameQuizBox, setClassnameQuizBox] = useState("");
  const classesQuizBox = cx("quiz-box", classnameQuizBox);
  const [classnameResultBox, setClassnameResultBox] = useState("");
  const classesResultBox = cx("result-box", classnameResultBox);
  const Next = () => {
    if (checkSelected) {
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
          <div className={cx("title")}> Awesome Quiz Application</div>
          <div className={cx("timer")}>
            <div className={cx("time-text")}>Time Left</div>
            <div className={cx("timer-sec")}>15</div>
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
