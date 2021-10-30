import React from 'react';
import classNames from 'classnames';
import styles from '../styles/music-list-item-component.module.css';
import {IMusicItem} from "../types/music";

const MusicListItem: React.FC<IMusicItem> = ({ id, title, thumbnail }) => {
    return (
        <div className={styles.item_wrapper}>
            <div className={styles.item_box}>
                <img className={styles.thumbnail} src={thumbnail} alt={title} />
                <div className={styles.icon}>
                    <i className="fas fa-play-circle" />
                </div>
            </div>
            <h3 className={classNames(styles.title, 'font-nunito')}>{title}</h3>
        </div>
    );
};

export default MusicListItem;
