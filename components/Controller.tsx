import React, {useState} from 'react';
import styles from '../styles/controller-component.module.css';
import classNames from "classnames";


const {id, title, thumbnail} = {
    id: 'fdafdafaf',
    title: 'Valley',
    thumbnail: 'https://images.unsplash.com/photo-1634151296366-6951d7b079b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1331&q=80',
};
const Controller: React.FC = () => {
    const [isPause, setIsPause] = useState<boolean>(false);
    const handleClickPlayButton = () => {
        setIsPause(!isPause);
    };

    return (
        <div className={styles.controller}>
            <div className={styles.music_info}>
                <img className={classNames(styles.thumbnail_mini, isPause ? '' : styles.is_spin)} src={thumbnail} alt={title} />
                <h6 className={classNames(styles.title, 'font-nunito')}>{title}</h6>
            </div>
            <div className={styles.button_wrapper}>
                <button className={styles.button}>
                    <i className={classNames("fas fa-backward", styles.icon)} />
                </button>
                <button className={styles.button} onClick={handleClickPlayButton}>
                    <i className={classNames(isPause ? "fas fa-play" : "fas fa-pause", styles.icon)} />
                </button>
                <button className={styles.button}>
                    <i className={classNames("fas fa-forward", styles.icon)} />
                </button>
            </div>
        </div>
    );
};

export default Controller;
