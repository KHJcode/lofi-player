import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";
import styles from "../styles/home.module.css";
import MusicList from "../components/MusicList";

import type { NextPage } from "next";
import type { IMusic } from "../types/music";

const Home: NextPage = () => {
  const [musics, setMusics] = useState<IMusic[]>([]);

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
    </Layout>
  );
};

export default Home;
