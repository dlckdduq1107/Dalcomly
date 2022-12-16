// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { EachProduct } from '../products';

export default function handler(req: NextApiRequest, res: NextApiResponse<EachProduct>) {
  const productList = [
    { id: 1, productName: 'clothes1', imgPath: '/assets/images/metaRabbit.png' },
    { id: 2, productName: 'hat', imgPath: '/assets/images/testImg2.png' },
  ];
  const { id } = req.query;
  const result = productList.filter((product) => product.id.toString() === id);
  res.status(200).json(result[0]);
}
