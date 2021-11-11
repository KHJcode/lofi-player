import React, { useContext, useEffect, useState } from "react";
import "react-circular-progressbar/dist/styles.css";
import Layout from "../../components/Layout";
import styles from "../../styles/music-page.module.css";
import { useRouter } from "next/router";
import { thumbnailLink } from "../../constant/url";
import { Context } from "../../store/index";
import type { IMusic } from "../../types/music";
import axios from "axios";
import classNames from "classnames";

const Music: React.FC = () => {
  const router = useRouter();
  const [id, setId] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { music, setMusic, setIsPlay } = useContext(Context) as any;

  useEffect(() => {
    if (id) {
      console.log(id);
      setIsPlay(true);
      (async () => {
        const data = (await axios.get(`/api/music?id=${id}`))?.data;
        if (data) {
          setMusic(data);
          setIsLoading(true);
        } else router.push("/404");
      })();
    }
  }, [id]);

  useEffect(() => {
    setId((router as any)?.query?.id);
  }, []);

  return (
    <Layout>
      <div className={styles.music_page_wrapper}>
        {isLoading && (
          <div>
            <div
              className={styles.thumbnail}
              style={{ background: `url('${thumbnailLink(id)}')` }}
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

export default Music;
