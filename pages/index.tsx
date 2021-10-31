import { useContext, useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import styles from "../styles/home.module.css";
import MusicList from "../components/MusicList";
import Controller from "../components/Controller";
import { Context } from "../store";

import type { NextPage } from "next";
import type { IMusic } from "../types/music";

const Home: NextPage = () => {
  const [musics, setMusics] = useState<IMusic[]>([]);
  const { isPlay } = useContext(Context) as any;

  useEffect(() => {
    (async () => {
      const { data } = (await axios.get("/api/music")) as any;
      if (data.length) setMusics(data);
    })();
  }, []);

  return (
    <Layout>
      <div>
        <div className={styles.recommend_music}></div>
        <MusicList musics={musics} />
      </div>
      {isPlay && <Controller />}
    </Layout>
  );
};

export default Home;
