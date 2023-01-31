import styled from 'styled-components';
import { ProductListProps } from '../../types/props';
import ProductItem from './productItem';

function ProductList(props: ProductListProps) {
  const { productList, title } = props;
  return (
    <ProductsWrapper>
      <Title>{title}</Title>
      <ItemWrapper>
        {productList.map((product) => (
          <ProductItem
            imgPath={product.mainImagePath}
            id={product.id}
            productName={product.productName}
            key={product.id}
          />
        ))}
      </ItemWrapper>
    </ProductsWrapper>
  );
}
export default ProductList;

const ProductsWrapper = styled.div`
  margin: 20px;
`;
const ItemWrapper = styled.div`
  display: flex;
`;
const Title = styled.div`
  font-size: 30px;
  margin-bottom: 10px;
`;
