import React from 'react';
import styles from '../styles/header-component.module.css';
import classNames from "classnames";
import Link from 'next/link';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
            <div className={styles.logo_wrapper}>
                <Link href={'/'}>
                    <a className={classNames("font-nunito", styles.logo)}>CODE_FI</a>
                </Link>
            </div>
            <form className={styles.search_form}>
                <div className={styles.text_box}>
                    <input type="text" placeholder="검색어 입력" className={classNames(styles.text, 'font-nanum')}/>
                    <button className={styles.button}>
                        <i className={classNames("fas fa-search", styles.icon)}/>
                    </button>
                </div>
            </form>
        </header>
    );
};

export default Header;
