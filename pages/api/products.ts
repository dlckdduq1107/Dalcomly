// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export interface ProductResponse {
  productList: Array<EachProduct>;
}
export interface EachProduct {
  id: number;
  productName: string;
  imgPath: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<ProductResponse>) {
  res.status(200).json({
    productList: [
      { id: 1, productName: 'clothes1', imgPath: '/assets/images/metaRabbit.png' },
      { id: 2, productName: 'hat', imgPath: '/assets/images/testImg2.png' },
    ],
  });
}
