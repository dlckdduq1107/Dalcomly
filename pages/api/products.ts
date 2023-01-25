// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

export interface ProductResponse {
  productList: Array<EachProduct>;
}
export interface EachProduct {
  id: number;
  productName: string;
  price: number;
  mainImagePath: string;
  detailImagePath: string;
  cautionImagePath: string;
  carouselImages: Array<string>;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ProductResponse>) {
  const prisma = new PrismaClient();
  const product = await prisma.product.findMany();
  const result = await Promise.all(
    product.map(async ({ id, name, price }) => {
      const images = await prisma.image.findMany({
        where: { productid: id },
      });

      let mainImage = '';
      let detailImage = '';
      let cautionImage = '';
      const carouselImages: Array<string> = [];
      images.forEach((val) => {
        if (val.kind === 'main') {
          mainImage = val.path as string;
        } else if (val.kind === 'detail') {
          detailImage = val.path as string;
        } else if (val.kind === 'caution') {
          cautionImage = val.path as string;
        } else if (val.kind === 'carousel') {
          carouselImages.push(val.path as string);
        }
      });

      return {
        id,
        productName: name as string,
        price: price as number,
        mainImagePath: mainImage,
        detailImagePath: detailImage,
        cautionImagePath: cautionImage,
        carouselImages,
      };
    })
  );

  await prisma.$disconnect();
  const products = { productList: result };
  res.status(200).json(products);
}
