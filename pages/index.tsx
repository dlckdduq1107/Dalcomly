import styled from 'styled-components';
import Carousel from '../components/carousel';
import ProductList from '../components/products/productList';
import { EachProduct, homeProps } from '../types/props';

function HomePage(props: homeProps) {
  const { productList, imgPaths } = props;
  return (
    <BodyWrapper>
      <CarouselWrapper>
        <Carousel imgPaths={imgPaths} width={2000} height={500} kind='main' delay={3000} />
      </CarouselWrapper>
      <ProductList productList={productList} title='금일 hot' />
      <ProductList productList={productList} title='weekly hot items' />
    </BodyWrapper>
  );
}
export async function getStaticProps() {
  const result = await fetch('http://localhost:3000/api/products');
  const { productList } = await result.json();
  const mainImages = await fetch('http://localhost:3000/api/main/images');
  const { imgPaths } = await mainImages.json();

  const cpyProfuctList = await Promise.all(
    productList.map(async (val: EachProduct) => {
      const response = await getStartPoint(val.id);
      const result = await response.json();
      return { ...val, averStarPoint: result.averStarPoint };
    })
  );

  const resProps: homeProps = {
    productList: cpyProfuctList,
    imgPaths,
  };

  return {
    props: resProps,
  };
}
export default HomePage;

const BodyWrapper = styled.div``;
const CarouselWrapper = styled.div`
  padding-left: 10rem;
  padding-right: 10rem;
`;

const getStartPoint = async (productId: number) => {
  const response = await fetch(`http://localhost:3000/api/stars/${productId}`);
  return response;
};
