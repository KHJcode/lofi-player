import Layout from '../components/Layout';
import styles from '../styles/home.module.css';

import type { NextPage } from 'next';
import MusicList from "../components/MusicList";
import {IMusicItem} from "../types/music";

const dummyData: IMusicItem[] = [
    {
        id: 'fdafdafaf',
        title: 'Valley',
        thumbnail: 'https://images.unsplash.com/photo-1634151296366-6951d7b079b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1331&q=80',
    },
    {
        id: 'fdafdafaf',
        title: 'Valley',
        thumbnail: 'https://images.unsplash.com/photo-1634151296366-6951d7b079b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1331&q=80',
    },
    {
        id: 'fdafdafaf',
        title: 'Valley',
        thumbnail: 'https://images.unsplash.com/photo-1634151296366-6951d7b079b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1331&q=80',
    },
    {
        id: 'fdafdafaf',
        title: 'Valley',
        thumbnail: 'https://images.unsplash.com/photo-1634151296366-6951d7b079b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1331&q=80',
    },
    {
        id: 'fdafdafaf',
        title: 'Valley',
        thumbnail: 'https://images.unsplash.com/photo-1634151296366-6951d7b079b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1331&q=80',
    },
    {
        id: 'fdafdafaf',
        title: 'Valley',
        thumbnail: 'https://images.unsplash.com/photo-1634151296366-6951d7b079b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1331&q=80',
    },    {
        id: 'fdafdafaf',
        title: 'Valley',
        thumbnail: 'https://images.unsplash.com/photo-1634151296366-6951d7b079b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1331&q=80',
    },    {
        id: 'fdafdafaf',
        title: 'Valley',
        thumbnail: 'https://images.unsplash.com/photo-1634151296366-6951d7b079b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1331&q=80',
    },    {
        id: 'fdafdafaf',
        title: 'Valley',
        thumbnail: 'https://images.unsplash.com/photo-1634151296366-6951d7b079b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1331&q=80',
    },    {
        id: 'fdafdafaf',
        title: 'Valley',
        thumbnail: 'https://images.unsplash.com/photo-1634151296366-6951d7b079b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1331&q=80',
    },    {
        id: 'fdafdafaf',
        title: 'Valley',
        thumbnail: 'https://images.unsplash.com/photo-1634151296366-6951d7b079b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1331&q=80',
    },    {
        id: 'fdafdafaf',
        title: 'Valley',
        thumbnail: 'https://images.unsplash.com/photo-1634151296366-6951d7b079b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1331&q=80',
    },    {
        id: 'fdafdafaf',
        title: 'Valley',
        thumbnail: 'https://images.unsplash.com/photo-1634151296366-6951d7b079b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1331&q=80',
    },    {
        id: 'fdafdafaf',
        title: 'Valley',
        thumbnail: 'https://images.unsplash.com/photo-1634151296366-6951d7b079b7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1331&q=80',
    },


];

const Home: NextPage = () => {
  return (
    <Layout>
      <div className={styles.background_wrapper}>
          <div>
              <div className={styles.recommend_music}>

              </div>
              <MusicList musics={dummyData} />
          </div>
      </div>
    </Layout>
  );
};

export default Home;
