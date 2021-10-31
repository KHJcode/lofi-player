import musics from "../../music.json";

import type { NextApiRequest, NextApiResponse } from "next";
import type { IMusic } from "../../types/music";

function findMusicById(id: string): IMusic | null {
  for (const music of musics) {
    if (id === music.id) return music;
  }
  return null;
}

function searchMusic(title: string): IMusic[] {
  const result: IMusic[] = [];
  const regex = new RegExp(title, "i");
  for (const music of musics) {
    if (regex.test(music.title)) result.push(music);
  }
  return result;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IMusic[] | IMusic | null>
) {
  if (req.method === "GET") {
    const musicId = req.query?.id;
    const searchText = req.query?.search;
    if (musicId && typeof musicId === "string") {
      const music = findMusicById(musicId);
      return res.status(200).json(music);
    }
    if (searchText && typeof searchText === "string") {
      const musics = searchMusic(searchText);
      return res.status(200).json(musics);
    }
    res.status(200).json(musics);
  }
}
