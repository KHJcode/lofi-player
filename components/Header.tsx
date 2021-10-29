import React from 'react';
import styles from '../styles/header-component.module.css';

const Header: React.FC = () => {
    return (
        <header className={styles.header}>
        <div className={styles.logo_wrapper}>
            <img className={styles.image} src='./assets/logo.png' alt='logo' />
        </div>
        <form className="search_form">
            <div className="textbox">
                <input type="text" placeholder="검색어 입력" />
                <button>
                    <i className="fas fa-search"></i>
                </button>
            </div>
        </form>
        </header>
    );
};

export default Header;
