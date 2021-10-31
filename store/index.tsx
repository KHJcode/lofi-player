import React, { useState } from "react";
import Controller from "../components/Controller";
import type { IMusic } from "../types/music";

export const Context = React.createContext({});

interface Props {
  children?: React.ReactNode;
}

const Container: React.FC<Props> = ({ children }) => {
  const [isPlay, setIsPlay] = useState<boolean>(false);
  const [isPause, setIsPause] = useState<boolean>(false);
  const [music, setMusic] = useState<IMusic>();

  return (
    <Context.Provider
      value={{ isPlay, setIsPlay, music, setMusic, isPause, setIsPause }}
    >
      {children}
      {isPlay && (
        <iframe
          style={{ display: "none" }}
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${music?.id}?controls=0&autoplay=1`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </Context.Provider>
  );
};

export default Container;
