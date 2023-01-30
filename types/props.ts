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
