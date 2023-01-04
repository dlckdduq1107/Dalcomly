import styled from 'styled-components';
import Carousel from '../components/carousel';
import ProductList from '../components/products/productList';
import { mainPageImages, products } from '../util/dummyData';
import { ProductResponse } from './api/products';

interface ProductResponseWrapper {
  productList: ProductResponse;
}

//TODO: props타입을 설정해야함
function HomePage(props: any) {
  const { productList, imgPaths } = props;
  return (
    <BodyWrapper>
      <Carousel imgPaths={imgPaths} width={1425} height={445} kind='main' delay={3000} />
      <ProductList productList={productList} title='금일 hot' />
      <ProductList productList={productList} title='weekly hot items' />
    </BodyWrapper>
  );
}
export async function getStaticProps() {
  // const result = await fetch('http://localhost:3000/api/products');
  // const { productList } = await result.json();
  const { productList } = products;

  // const mainImages = await fetch('http://localhost:3000/api/main/images');
  // const { imgPaths } = await mainImages.json();
  const { imgPaths } = mainPageImages;
  return {
    props: {
      productList,
      imgPaths,
    },
  };
}
export default HomePage;

const BodyWrapper = styled.div``;
