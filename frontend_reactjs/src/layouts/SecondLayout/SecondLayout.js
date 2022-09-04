import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import classNames from "classnames/bind";
import styles from "./SecondLayout.module.scss";
import PropTypes from "prop-types";
import ToolBox from "~/components/ToolBox/ToolBox";

const cx = classNames.bind(styles);

function SecondLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <ToolBox />
        <div className={cx("content")}>{children}</div>
      </div>
      <Footer />
    </div>
  );
}

SecondLayout.propType = {
  children: PropTypes.node.isRequired,
};

export default SecondLayout;
