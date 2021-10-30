import React from 'react';
import MusicListItem from "./MusicListItem";
import styles from '../styles/music-lilst-component.module.css';
import {IMusicItem} from "../types/music";

interface Props {
    readonly musics: IMusicItem[];
}

const MusicList: React.FC<Props> = ({ musics }) => {
    return (
        <div className={styles.music_list}>
            {musics.map(({ id, title, thumbnail }) => (
                <MusicListItem
                    key={id}
                    id={id}
                    title={title}
                    thumbnail={thumbnail}
                />
            ))}
        </div>
    );
};

export default MusicList;
