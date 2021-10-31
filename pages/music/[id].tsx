import React, { useContext, useEffect, useState } from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Layout from "../../components/Layout";
import styles from "../../styles/music-page.module.css";
import { useRouter } from "next/router";
import { thumbnailLink } from "../../constant/url";
import { Context } from "../../store/index";
import type { IMusic } from "../../types/music";
import axios from "axios";

const Music: React.FC = () => {
  const router = useRouter();
  const [id, setId] = useState<string>();
  const [musicInfo, setMusicInfo] = useState<IMusic>();
  const { setMusic, setIsPlay } = useContext(Context) as any;

  useEffect(() => {
    if (id) {
      setMusic(id);
      setIsPlay(true);
      (async () => {
        const data = (await axios.get(`/api/music?id=${id}`))?.data;
        if (data) setMusicInfo(data);
        else router.push("/404");
      })();
    }
  }, [id]);

  useEffect(() => {
    setId((router as any)?.query?.id);
  }, []);

  return (
    <Layout>
      <div>
        <div>
          <CircularProgressbarWithChildren value={15} strokeWidth={1}>
            <img className={styles.thumbnail} src={thumbnailLink(id)} />
          </CircularProgressbarWithChildren>
        </div>
        <div>
          <h3>{musicInfo?.title}</h3>
        </div>
      </div>
    </Layout>
  );
};

export default Music;
