import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

function ProductItem(props: any) {
  const { imgPath, id, productName } = props;
  return (
    <Link href={`/product/${id}`}>
      <a>
        <ProductItemWrapper>
          <Image src={imgPath} width={100} height={100} />
          <ItemWrapper>
            <div>{productName}</div>
            <div>간단 설명</div>
          </ItemWrapper>
        </ProductItemWrapper>
      </a>
    </Link>
  );
}
export default ProductItem;

const ProductItemWrapper = styled.div``;
const ItemWrapper = styled.div``;
