import { useContext, useEffect, useState } from "react";
// import axios from "axios";
import Layout from "../components/Layout";
import styles from "../styles/home.module.css";
import MusicList from "../components/MusicList";
import Controller from "../components/Controller";
import { Context } from "../store";

import type { NextPage } from "next";
import type { IMusic } from "../types/music";
import Carousel from "../components/Carousel";
import { findMusics } from "../service/music";

const Home: NextPage = () => {
  const [musics, setMusics] = useState<IMusic[]>([]);
  const { isPlay } = useContext(Context) as any;

  useEffect(() => {
    (async () => {
      // const { data } = (await axios.get("/api/music")) as any;
      const data = findMusics();
      if (data.length) setMusics(data);
    })();
  }, []);

  return (
    <Layout>
      <Carousel />
      <div className={styles.list_wrapper}>
        <MusicList musics={musics} />
      </div>
      {isPlay && <Controller />}
    </Layout>
  );
};

export default Home;
