import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { ProductItemProps } from '../../types/props';

function ProductItem(props: ProductItemProps) {
  const { imgPath, id, productName, price } = props;
  return (
    <Link href={`/product/${id}`}>
      <a>
        <ProductItemWrapper>
          <Image src={imgPath} width={100} height={100} />
          <ItemWrapper>
            <div>{productName}</div>
            <div>{price.toLocaleString()}원</div>
          </ItemWrapper>
        </ProductItemWrapper>
      </a>
    </Link>
  );
}
export default ProductItem;

const ProductItemWrapper = styled.div``;
const ItemWrapper = styled.div``;
