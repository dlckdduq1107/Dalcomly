// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { MainPageCarouselImages } from '../../../types/props';
import { mainPageImages } from '../../../util/dummyData';

export default function handler(req: NextApiRequest, res: NextApiResponse<MainPageCarouselImages>) {
  res.status(200).json(mainPageImages);
}
