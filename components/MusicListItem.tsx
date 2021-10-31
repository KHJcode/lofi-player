import React from "react";
import classNames from "classnames";
import Link from 'next/link';
import styles from "../styles/music-list-item-component.module.css";
import { IMusic } from "../types/music";
import { thumbnailLink } from "../constant/url";

const MusicListItem: React.FC<IMusic> = ({ id, title }) => {
  return (
    <Link href={`/music/${id}`}>
      <a>
        <div className={styles.item_wrapper}>
          <div className={styles.item_box}>
            <img
              className={styles.thumbnail}
              src={thumbnailLink(id)}
              alt={title}
            />
            <div className={styles.icon}>
              <i className="fas fa-play-circle" />
            </div>
          </div>
          <h3 className={classNames(styles.title, "font-nunito")}>{title}</h3>
        </div>
      </a>
    </Link>
  );
};

export default MusicListItem;
