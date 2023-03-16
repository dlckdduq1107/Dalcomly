import { PrismaClient } from '@prisma/client';
import type { NextApiRequest, NextApiResponse } from 'next';
import { StarAver } from '../../../types/props';

export default async function handler(req: NextApiRequest, res: NextApiResponse<StarAver>) {
  const { id } = req.query;
  const prisma = new PrismaClient();
  const starPointList = await prisma.star.findMany({
    where: { productid: parseInt(id as string) },
  });

  const sumStarPoint = starPointList.reduce((pre, cur) => {
    return pre + cur.point;
  }, 0);
  const averStarPoint = sumStarPoint / starPointList.length;
  const result = {
    averStarPoint,
  };
  await prisma.$disconnect();

  res.status(200).json(result);
}
