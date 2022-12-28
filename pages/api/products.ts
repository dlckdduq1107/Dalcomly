// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { products } from '../../util/dummyData';

export interface ProductResponse {
  productList: Array<EachProduct>;
}
export interface EachProduct {
  id: number;
  productName: string;
  imgPath: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<ProductResponse>) {
  res.status(200).json(products);
}
