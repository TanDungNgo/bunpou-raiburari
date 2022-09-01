import Header from "../components/Header/Header";
import Sidebar from "../components/Sidebar";
import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import PropTypes from "prop-types";
import Footer from "../components/Footer/Footer";

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
  return (
    <div className={cx("wrapper")}>
      <Header />
      <div className={cx("container")}>
        <Sidebar />
        <div className={cx("content")}>{children}</div>
      </div>
      <Footer />
    </div>
  );
}

DefaultLayout.propType = {
  children: PropTypes.node.isRequired,
};

export default DefaultLayout;
