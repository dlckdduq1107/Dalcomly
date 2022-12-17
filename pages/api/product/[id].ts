// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { products } from '../../../util/dummyData';
import { EachProduct } from '../products';

export default function handler(req: NextApiRequest, res: NextApiResponse<EachProduct>) {
  const { id } = req.query;
  const result = products.productList.filter((product) => product.id.toString() === id);
  res.status(200).json(result[0]);
}
