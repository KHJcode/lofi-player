import React from 'react';
import styles from '../styles/footer-component.module.css';
import classNames from 'classnames';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div>
        <h3 className={classNames('font-nunito', styles.title)}>CODE_FI</h3>
      </div>
      <ul className={styles.links_wrapper}>
        <li>
          <a href={"https://www.instagram.com/khjcode"} target={"_blank"} rel={"noreferrer"}
             className={classNames("fab fa-instagram", styles.icon)}/>
        </li>
        <li>
          <a href={"https://github.com/KHJcode"} target={"_blank"} rel={"noreferrer"}
             className={classNames("fab fa-github", styles.icon)}/>
        </li>
        <li>
          <a href={"mailto:to@khjcode.com"} target={"_blank"} rel={"noreferrer"}
             className={classNames("far fa-envelope", styles.icon)}/>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
