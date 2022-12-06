import styled from 'styled-components';
import ProductList from '../components/products/productList';
import { ProductResponse } from './api/products';

interface ProductResponseWrapper {
  productList: ProductResponse;
}

function HomePage(props: ProductResponseWrapper) {
  const { productList } = props;
  return (
    <BodyWrapper>
      <ProductList productList={productList} title='금일 hot' />
      <ProductList productList={productList} title='weekly hot items' />
    </BodyWrapper>
  );
}
export async function getStaticProps() {
  const result = await fetch('http://localhost:3000/api/products');
  const { productList } = await result.json();

  return {
    props: {
      productList,
    },
  };
}
export default HomePage;

const BodyWrapper = styled.div``;
