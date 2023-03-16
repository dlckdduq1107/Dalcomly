import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';
import { ProductItemProps } from '../../types/props';

function ProductItem(props: ProductItemProps) {
  const { imgPath, id, productName, price, averStarPoint } = props;

  const getStarList = (loopNum: number) => {
    const res = [];
    for (let i = 0; i < loopNum; i++) {
      res.push(1);
    }
    return res;
  };
  return (
    <Link href={`/product/${id}`}>
      <a>
        <ProductItemWrapper>
          <Image src={imgPath} width={100} height={100} />
          <ItemWrapper>
            <div>{productName}</div>
            <div>{price.toLocaleString()}원</div>
            {averStarPoint !== null &&
              getStarList(Math.floor(averStarPoint as number)).map((val, idx) => (
                <Image src='/assets/images/fullstar.png' width={20} height={20} key={idx} />
              ))}
            {averStarPoint !== null &&
              (averStarPoint as number) - Math.floor(averStarPoint as number) >= 0.5 && (
                <Image src='/assets/images/halfstar.png' width={20} height={20} />
              )}
          </ItemWrapper>
        </ProductItemWrapper>
      </a>
    </Link>
  );
}
export default ProductItem;

const ProductItemWrapper = styled.div``;
const ItemWrapper = styled.div``;
