import classNames from "classnames/bind";
import styles from "./Menu.module.scss";

import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import KanjiItem from "~/components/KanjiItem/KanjiItem";
import MenuItem from "./MenuItem";
import Header from "./Header";
import { useState } from "react";
import PropTypes from "prop-types";

const cx = classNames.bind(styles);

const defaultFunction = () => {};

function Menu({
  children,
  items = [],
  hideOnClick = false,
  onChange = defaultFunction,
}) {
  const [history, setHistory] = useState([{ data: items }]);
  const current = history[history.length - 1];
  const renderItems = () => {
    return current.data.map((item, index) => {
      const isParent = !!item.children;
      return (
        <MenuItem
          key={index}
          data={item}
          onClick={() => {
            if (isParent) {
              setHistory((prev) => [...prev, item.children]);
            } else {
              // onChange(item);
              item.onClick();
            }
          }}
        ></MenuItem>
      );
    });
  };
  return (
    <Tippy
      offset={[16, 8]}
      delay={[0, 500]}
      hideOnClick={hideOnClick}
      interactive
      placement="bottom-end"
      render={(attrs) => (
        <div className={cx("menu-list")} tabIndex="-1" {...attrs}>
          <PopperWrapper className={cx("menu-popper")}>
            {history.length > 1 && (
              <Header
                title={current.title}
                onBack={() => {
                  setHistory((prev) => prev.slice(0, prev.length - 1));
                }}
              />
            )}
            <div className={cx("menu-body")}>{renderItems()}</div>
          </PopperWrapper>
        </div>
      )}
      onHide={() => setHistory((prev) => prev.slice(0, 1))}
    >
      {children}
    </Tippy>
  );
}

Menu.propType = {
  children: PropTypes.object,
  items: PropTypes.array,
  hideOnClick: PropTypes.bool,
  onChange: PropTypes.func,
};

export default Menu;
