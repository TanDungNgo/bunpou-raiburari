import { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import styles from "./Search.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import KanjiItem from "~/components/KanjiItem";
import HeadlessTippy from "@tippyjs/react/headless";
import {
  faSpinner,
  faMagnifyingGlass,
} from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);
function Search() {
  const [searchValue, setSearchValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [showResult, setShowResult] = useState(true);
  const [loading, setLoading] = useState(false);

  const inputRef = useRef();
  useEffect(() => {
    if (!searchValue.trim()) {
      setSearchResult([]);
      return;
    }
    setLoading(true);
    fetch(`http://127.0.0.1:8000/api/search/q=${searchValue}`)
      .then((res) => res.json())
      .then((res) => {
        setSearchResult(res.listKanji);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, [searchValue]);
  const handleClear = () => {
    setSearchValue("");
    searchResult([]);
    inputRef.current.focus();
  };
  const handleHideResult = () => {
    setShowResult(false);
  };
  function RenderSearchResult() {
    return searchResult.map((item) => {
      return (
        <>
          <KanjiItem key={item.id} data={item} />
        </>
      );
    });
  }
  return (
    <HeadlessTippy
      interactive
      visible={showResult && searchResult.length > 0}
      render={(attrs) => (
        <div className={cx("search-result")} tabIndex="-1" {...attrs}>
          <PopperWrapper>
            <h4 className={cx("search-title")}>Kanji</h4>
            {RenderSearchResult()}
          </PopperWrapper>
        </div>
      )}
      onClickOutside={handleHideResult}
    >
      <div className={cx("search")}>
        <input
          ref={inputRef}
          value={searchValue}
          type="text"
          placeholder="Search"
          spellCheck={false}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setShowResult(true)}
        />
        {!!searchValue && !loading && (
          <button className={cx("clear")} onClick={handleClear}>
            <FontAwesomeIcon icon={faCircleXmark} />
          </button>
        )}
        {loading && (
          <FontAwesomeIcon className={cx("loading")} icon={faSpinner} />
        )}
        <HeadlessTippy>
          <button className={cx("search-btn")}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </HeadlessTippy>
      </div>
    </HeadlessTippy>
  );
}
export default Search;
