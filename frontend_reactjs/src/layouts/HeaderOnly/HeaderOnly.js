import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import classNames from "classnames/bind";
import styles from "./HeaderOnly.module.scss";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

function HeaderOnly({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <div className={cx("content")}>{children}</div>
      </div>
      <Footer />
    </div>
  );
}

HeaderOnly.propType = {
  children: PropTypes.node.isRequired,
};

export default HeaderOnly;
