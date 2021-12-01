import React from 'react';
import MusicListItem from "./MusicListItem";
import styles from '../styles/music-lilst-component.module.css';
import {IMusic} from "../types/music";
import classNames from "classnames";

interface Props {
  readonly musics: IMusic[];
}

const MusicList: React.FC<Props> = ({musics}) => {
  return (
    <div className={styles.music_list}>
      {musics.length ? musics.map(({id, author, title}) => (
        <MusicListItem
          key={id}
          id={id}
          title={title}
          author={author}
        />
      )) : <h3 className={classNames(styles.blank_title, "font-nanum")}>찾으시는 음악이 없습니다</h3>}
    </div>
  );
};

export default MusicList;
