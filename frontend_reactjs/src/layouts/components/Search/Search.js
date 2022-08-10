import { useEffect, useRef, useState } from "react";
import classNames from "classnames/bind";
import * as request from "~/utils/request";
import * as searchServices from "~/services/searchService";
import styles from "./Search.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { Wrapper as PopperWrapper } from "~/components/Popper";
import KanjiItem from "~/components/KanjiItem/KanjiItem";
import { useDebounce } from "~/hooks";
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

  const debouncedValue = useDebounce(searchValue, 500);

  const inputRef = useRef();
  useEffect(() => {
    if (!debouncedValue.trim()) {
      setSearchResult([]);
      return;
    }

    const fetchApi = async () => {
      setLoading(true);
      const result = await searchServices.search(debouncedValue);
      setSearchResult(result);
      setLoading(false);
    };
    fetchApi();
  }, [debouncedValue]);
  const handleClear = () => {
    setSearchValue("");
    searchResult([]);
    inputRef.current.focus();
  };
  const handleHideResult = () => {
    setShowResult(false);
  };
  const handleChange = (e) => {
    const searchValue = e.target.value;
    if (!searchValue.startsWith(" ")) {
      setSearchValue(searchValue);
    }
  };
  function RenderSearchResult() {
    return searchResult.map((item) => {
      return <KanjiItem key={item.id} data={item} />;
    });
  }
  return (
    <div>
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
            onChange={handleChange}
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
            <button
              className={cx("search-btn")}
              onMouseDown={(e) => e.preventDefault()}
            >
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </HeadlessTippy>
        </div>
      </HeadlessTippy>
    </div>
  );
}
export default Search;
