import React, { useCallback, useContext } from "react";
import styles from "../styles/controller-component.module.css";
import classNames from "classnames";
import { Context } from "../store";
import { thumbnailLink } from "../constant/url";

/* eslint-disable @next/next/no-img-element */
const Controller: React.FC = () => {
  const { music, isPlay, setIsPlay } = useContext(
    Context
  ) as any;

  const handleClickPlayButton = useCallback(() => {
    setIsPlay(!isPlay);
  }, [isPlay]);

  return (
    <div className={styles.controller}>
      <div className={styles.music_info}>
        <img
          className={classNames(
            styles.thumbnail_mini,
            isPlay ? styles.is_spin : ""
          )}
          src={thumbnailLink(music?.id)}
          alt={music?.title}
        />
        <h6 className={classNames(styles.title, "font-nunito")}>{music?.title}</h6>
      </div>
      <div className={styles.button_wrapper}>
        <button className={styles.button}>
          <i className={classNames("fas fa-backward", styles.icon)} />
        </button>
        <button className={styles.button} onClick={handleClickPlayButton}>
          <i
            className={classNames(
              isPlay ? "fas fa-pause" : "fas fa-play",
              styles.icon
            )}
          />
        </button>
        <button className={styles.button}>
          <i className={classNames("fas fa-forward", styles.icon)} />
        </button>
      </div>
    </div>
  );
};

export default Controller;
