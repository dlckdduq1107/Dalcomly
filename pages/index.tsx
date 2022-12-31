import styled from 'styled-components';
import ProductList from '../components/products/productList';
import { products } from '../util/dummyData';
import { ProductResponse } from './api/products';

interface ProductResponseWrapper {
  productList: ProductResponse;
}

//TODO: props타입을 설정해야함
function HomePage(props: any) {
  const { productList } = props;
  return (
    <BodyWrapper>
      <ProductList productList={productList} title='금일 hot' />
      <ProductList productList={productList} title='weekly hot items' />
    </BodyWrapper>
  );
}
export async function getStaticProps() {
  // const result = await fetch('http://localhost:3000/api/products');
  // const { productList } = await result.json();
  const { productList } = products;
  return {
    props: {
      productList,
    },
  };
}
export default HomePage;

const BodyWrapper = styled.div``;
