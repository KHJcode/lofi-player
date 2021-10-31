import React from 'react';
import MusicListItem from "./MusicListItem";
import styles from '../styles/music-lilst-component.module.css';
import {IMusic} from "../types/music";

interface Props {
    readonly musics: IMusic[];
}

const MusicList: React.FC<Props> = ({ musics }) => {
    return (
        <div className={styles.music_list}>
            {musics.map(({ id, author, title }) => (
                <MusicListItem
                    key={id}
                    id={id}
                    title={title}
                    author={author}
                />
            ))}
        </div>
    );
};

export default MusicList;
