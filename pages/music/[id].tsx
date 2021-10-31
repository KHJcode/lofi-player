import React, { useContext, useEffect, useState } from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Layout from "../../components/Layout";
import styles from '../../styles/music-page.module.css';
import { useRouter } from 'next/router';
import { thumbnailLink } from "../../constant/url";
import { Context } from '../../store/index';

const Music: React.FC = () => {
  const router = useRouter();
  const [id, setId] = useState<string>();
  const { setMusic, setIsPlay } = useContext(Context) as any;

  useEffect(() => {
    if (id) {
      setMusic(id);
      setIsPlay(true);
    }
  }, [id]);

  useEffect(() => {
    setId((router as any)?.query?.id);
  }, []);

  return (
    <Layout>
      <div>
        <CircularProgressbarWithChildren value={15} strokeWidth={1}>
          <img className={styles.thumbnail} src={thumbnailLink(id)} />
      </div>
    </Layout>
  );
};

export default Music;
