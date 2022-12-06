// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

export interface ProductResponse {
  productList: Array<EachProduct>;
}
export interface EachProduct {
  productName: string;
  imgPath: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<ProductResponse>) {
  res.status(200).json({
    productList: [
      { productName: 'clothes1', imgPath: '/assets/images/metaRabbit.png' },
      { productName: 'hat', imgPath: '/assets/images/testImg2.png' },
    ],
  });
}
