import {GetServerSideProps} from 'next';
import React, {useEffect, useState} from 'react';
import Layout from '../../components/Layout';
import MusicList from '../../components/MusicList';
import {findMusicsBySearch} from '../../service/music';
import {IMusic} from '../../types/music';

const Search: React.FC<{ keyword: string }> = ({keyword}) => {
  const [musics, setMusics] = useState<IMusic[]>([]);

  useEffect(() => {
    if (keyword) {
      (async () => {
        const data = findMusicsBySearch(keyword);
        setMusics(data);
      })();
    }
  }, []);

  return (
    <Layout>
      {musics && <MusicList musics={musics}/>}
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const {keyword} = context.query;
  return {
    props: {
      keyword,
    },
  };
};

export default Search;
