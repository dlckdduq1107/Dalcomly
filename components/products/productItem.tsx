import Image from 'next/image';
import styled from 'styled-components';

function ProductItem(props: any) {
  const { imgPath } = props;
  return (
    <ProductItemWrapper>
      <Image src={imgPath} width={100} height={100} />
      <ItemWrapper>
        <div>이름</div>
        <div>간단 설명</div>
      </ItemWrapper>
    </ProductItemWrapper>
  );
}
export default ProductItem;

const ProductItemWrapper = styled.div``;
const ItemWrapper = styled.div``;
