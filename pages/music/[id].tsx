import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/Layout";
import styles from "../../styles/music-page.module.css";
import { useRouter } from "next/router";
import { thumbnailLink } from "../../constant/url";
import { Context } from "../../store/index";
// import axios from "axios";
import classNames from "classnames";
import { GetServerSideProps } from "next";
import { findMusicById } from "../../service/music";

const Music: React.FC<{ id: string }> = ({ id }) => {
  const router = useRouter();
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  const { music, setMusic, setIsPlay } = useContext(Context) as any;

  useEffect(() => {
    console.log(id);
    if (id) {
      // const data = (await axios.get(`/api/music?id=${id}`))?.data;
      const data = findMusicById(id);
      if (data) {
        setMusic(data);
        setIsLoaded(true);
        setIsPlay(true);
      } else router.push("/404");
    }
  }, [id]);

  return (
    <Layout>
      <div className={styles.music_page_wrapper}>
        {isLoaded && (
          <div>
            <div
              className={styles.thumbnail}
              style={{ background: `url('${thumbnailLink(id as string)}')` }}
            >
              <div className={styles.dot}></div>
            </div>
            <div className={styles.music_info_wrapper}>
              <div className={styles.title_wrapper}>
                <h3 className={classNames(styles.title, "font-nunito")}>
                  {music.title}
                </h3>
              </div>
              <div className={styles.author_wrapper}>
                <h5 className={classNames(styles.author, "font-nunito")}>
                  {music.author}
                </h5>
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  return {
    props: {
      id,
    },
  };
};

export default Music;
