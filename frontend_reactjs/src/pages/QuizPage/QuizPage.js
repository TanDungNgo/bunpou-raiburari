import classNames from "classnames/bind";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import styles from "./QuizPage.module.scss";

const cx = classNames.bind(styles);
const content = ["kanji", "grammar", "conversation"];
function QuizPage() {
  const navigate = useNavigate();
  const handleClick = (item) => {
    if (item === content[2]) {
      swal({
        text: "Sorry this feature is being updated!",
      });
    } else {
      navigate(`/quiz/${item}`);
    }
  };

  const renderCard = () => {
    return content.map((item, index) => {
      return (
        <div
          key={index}
          className={cx("card")}
          onClick={() => handleClick(item)}
        >
          <img className={cx("card-image")} src={`/img/${item}.jpg`}></img>
          <div className={cx("title")}>{item}</div>
        </div>
      );
    });
  };

  return <div className={cx("wrapper")}>{renderCard()}</div>;
}

export default QuizPage;
