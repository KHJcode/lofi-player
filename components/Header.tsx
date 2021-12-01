import React, {ChangeEvent, FormEvent, useCallback, useEffect, useState} from 'react';
import styles from '../styles/header-component.module.css';
import classNames from "classnames";
import Link from 'next/link';
import {useRouter} from 'next/router';

const Header: React.FC = () => {
  const [keyword, setKeyword] = useState<string>('');

  const router = useRouter();

  const submitSearchHandler = useCallback((e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setKeyword(keyword.trim());
    if (keyword.indexOf('/') === -1) {
      router?.push(`/search/${keyword}`);
    }
  }, [keyword]);

  const changeKeywordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  useEffect(() => {
    if (router?.pathname === '/search/[keyword]') {
      const keyword = router?.query?.keyword as string;
      setKeyword(keyword ?? '')
    }
  }, []);

  return (
    <header className={styles.header}>
      <div className={styles.logo_wrapper}>
        <Link href={'/'}>
          <a className={classNames("font-nunito", styles.logo)}>CODE_FI</a>
        </Link>
      </div>
      <form className={styles.search_form} onSubmit={submitSearchHandler}>
        <div className={styles.text_box}>
          <input type="text" placeholder="검색" className={classNames(styles.text, 'font-nanum')} value={keyword}
                 onChange={changeKeywordHandler}/>
          <button className={styles.button}>
            <i className={classNames("fas fa-search", styles.icon)}/>
          </button>
        </div>
      </form>
    </header>
  );
};

export default Header;
