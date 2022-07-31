import { useState, forwardRef } from "react";
import classNames from "classnames";
import styles from "./Image.module.scss";

const Image = forwardRef(
  (
    {
      src,
      alt,
      className,
      fallback: customFallback = "img/no-image.png",
      ...props
    },
    ref
  ) => {
    const [fallback, setFallback] = useState("");

    const handleError = () => {
      setFallback(customFallback);
    };

    return (
      <img
        className={classNames(styles.wrapper, className)}
        ref={ref}
        src={fallback || src}
        alt={alt}
        {...props}
        onError={handleError}
      />
    );
  }
);

export default Image;
