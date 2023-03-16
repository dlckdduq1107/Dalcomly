import { ReactNode } from 'react';

export interface homeProps {
  productList: Array<EachProduct>;
  imgPaths: Array<string>;
}

export interface EachProduct {
  id: number;
  productName: string;
  price: number;
  mainImagePath: string;
  detailImagePath: string;
  cautionImagePath: string;
  carouselImages: Array<string>;
  averStarPoint?: number;
}

export interface ProductDetailProps {
  id: number;
  productName: string;
  price: number;
  mainImagePath: string;
  detailImagePath: string;
  cautionImagePath: string;
  carouselImages: Array<string>;
}
export interface ProductsResponse {
  productList: Array<EachProduct>;
}
export interface MainPageCarouselImages {
  imgPaths: Array<string>;
}
export interface CarouselProps {
  imgPaths: Array<string>;
  width: number;
  height: number;
  kind?: string;
  delay?: number;
}
export interface MainLayoutProps {
  children: ReactNode;
}
export interface ProductItemProps {
  imgPath: string;
  id: number;
  productName: string;
  price: number;
  averStarPoint?: number | null;
}
export interface ProductListProps {
  productList: Array<EachProduct>;
  title: string;
}
export interface StarAver {
  averStarPoint: number;
}
