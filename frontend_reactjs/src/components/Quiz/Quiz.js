import { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./Quiz.module.scss";
import classNames from "classnames/bind";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faCircleXmark,
  faCrown,
} from "@fortawesome/free-solid-svg-icons";
import Button from "~/components/Button/Button";
import * as request from "~/utils/request";
import swal from "sweetalert";

const cx = classNames.bind(styles);

function Quiz() {
  const { type } = useParams();
  const navigate = useNavigate();
  const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  // const currentUser = useSelector((state) => state.auth.login.currentUser);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [checkSelected, setCheckSelected] = useState(false);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([
    {
      questionText: "",
      answerOptions: [],
    },
  ]);
  const [time, setTime] = useState(15);
  const timerId = useRef();
  const quizBox = document.getElementsByClassName(cx("quiz-box"));
  const resultBox = document.getElementsByClassName(cx("result-box"));

  useEffect(() => {
    request.get(`questions/${type}`).then((res) => {
      console.log(res);
      setQuestions(res.questions);
    });
  }, []);
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
    return questions[currentQuestion]?.answerOptions.map((item, index) => {
      return (
        <div
          key={index}
          className={cx("answer-text")}
          onClick={() => Select(item.isCorrect, index)}
        >
          <span>{item.text}</span>
          {checkSelected ? (
            <div className={cx("icon")}>
              {clearInterval(timerId.current)}
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

  const StartTimer = () => {
    timerId.current = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);
  };

  const ResetQuestion = () => {
    setCheckSelected(false);
    setTime(15);
    StartTimer();
  };

  const Start = () => {
    if (currentUser) {
      quizBox[0].classList.add(cx("active"));
      StartTimer();
    } else {
      swal({
        title: "Warning!",
        text: "You are not logged in",
        icon: "warning",
      }).then(() => {
        navigate("/login");
      });
    }
  };
  const Replay = () => {
    quizBox[0].classList.add(cx("active"));
    resultBox[0].classList.remove(cx("active"));
    setCurrentQuestion(0);
    setScore(0);
    ResetQuestion();
  };

  const Next = () => {
    if (checkSelected) {
      const answer = document.getElementsByClassName(cx("answer-text"));
      for (let i = 0; i < answer.length; i++) {
        answer[i].classList.remove(cx("correct"));
        answer[i].classList.remove(cx("iscorrect"));
        answer[i].classList.remove(cx("disabled"));
      }
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        ResetQuestion();
      } else {
        quizBox[0].classList.remove(cx("active"));
        resultBox[0].classList.add(cx("active"));
      }
    } else {
      swal({
        title: "Warning!",
        text: "You have not selected the answer",
        icon: "warning",
      });
    }
  };

  if (time == 0) {
    clearInterval(timerId.current);
    swal({
      title: "Warning!",
      text: "Time out",
      icon: "warning",
    }).then(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < questions.length) {
        setCurrentQuestion(nextQuestion);
        ResetQuestion();
      } else {
        quizBox[0].classList.remove(cx("active"));
        resultBox[0].classList.add(cx("active"));
      }
    });
  }

  return (
    <div className={cx("wrapper")}>
      {/* Start button */}
      <div className={cx("btn-start")}>
        <Button primary onClick={Start}>
          Start Quiz
        </Button>
      </div>
      {/* Quiz box */}
      {questions ? (
        <div className={cx("quiz-box")}>
          <header>
            <div className={cx("title")}> Question {currentQuestion + 1}</div>
            <div className={cx("timer")}>
              <div className={cx("time-text")}>Time Left</div>
              <div className={cx("timer-sec")}>{time}</div>
            </div>
          </header>
          <section>
            <div className={cx("question-text")}>
              <span> {questions[currentQuestion]?.questionText}</span>
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
      ) : (
        <></>
      )}

      {/* Result box */}
      <div className={cx("result-box")}>
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
