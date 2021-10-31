import musics from '../../music.json';

import type { NextApiRequest, NextApiResponse } from 'next'
import type { IMusic } from '../../types/music';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IMusic[] | IMusic>
) {
  if (req.method === 'GET') {
    const musicId = req.query?.id;
    if (musicId) {
      for (const { id, ...music } of musics) {
        if (id === musicId) {
          return res.status(200).json({ id, ...music });
        }
      }
    }
    res.status(200).json(musics);
  }
}
