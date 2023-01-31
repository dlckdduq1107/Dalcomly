// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { EachProduct } from '../../../types/props';

export default async function handler(req: NextApiRequest, res: NextApiResponse<EachProduct>) {
  const { id } = req.query;

  const prisma = new PrismaClient();
  const targetProduct = await prisma.product.findUnique({
    where: { id: parseInt(id as string) },
  });
  const images = await prisma.image.findMany({
    where: { productid: parseInt(id as string) },
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

  await prisma.$disconnect();

  const result: EachProduct = {
    id: parseInt(id as string),
    productName: targetProduct?.name as string,
    mainImagePath: mainImage,
    price: targetProduct?.price as number,
    detailImagePath: detailImage,
    cautionImagePath: cautionImage,
    carouselImages: carouselImages,
  };
  res.status(200).json(result);
}
