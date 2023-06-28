import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Carousel from '../../components/carousel';
import { EachOption, ProductDetailProps } from '../../types/props';

function ProductDetailPage(props: ProductDetailProps) {
  const {
    mainImagePath,
    id,
    productName,
    price,
    cautionImagePath,
    detailImagePath,
    carouselImages,
    option,
  } = props;
  const [productContent, setProductContent] = useState<string>(detailImagePath);
  const [selectDetail, setSelectDetail] = useState<string>('detailInfo');
  const [options, setOptions] = useState<EachOption>({});

  const onClickDetail = (e: React.MouseEvent<HTMLInputElement>) => {
    const text = e.currentTarget.textContent as string;

    if (text === '상세정보') {
      setProductContent(detailImagePath);
      setSelectDetail('detailInfo');
    } else if (text === '유의사항') {
      setProductContent(cautionImagePath);
      setSelectDetail('cautionInfo');
    }
  };

  const onChangeSelect = (e: any, key: string) => {
    setOptions({ ...options, [key]: e.target.value });
  };

  return (
    <ProductDetailWrapper>
      <ProductMainWrapper>
        <Carousel imgPaths={carouselImages} width={450} height={450} />
        <ProductDetailText>
          <ProductTitle>{productName}</ProductTitle>
          <ProductPrice>{`${price.toLocaleString('ko-KR')}원`}</ProductPrice>
          <OptionWrapper>
            <label htmlFor='size-select'>size:</label>
            <SizeSelect
              id='size-select'
              defaultValue='none'
              onChange={(e) => onChangeSelect(e, 'size')}
            >
              <option value='none' hidden disabled>
                select size
              </option>
              {option?.size?.map((val) => (
                <option value={val} key={val}>
                  {val}
                </option>
              ))}
            </SizeSelect>
          </OptionWrapper>
          <BtnWrapper>
            <BuyBtn role='buy-btn'>구매하기</BuyBtn>
            <CartBtn role='cart-btn'>장바구니</CartBtn>
          </BtnWrapper>
        </ProductDetailText>
      </ProductMainWrapper>
      <ProductBodyWrapper>
        <ProductBodyOption>
          <Detail
            color={selectDetail === 'detailInfo' ? '#5F5F5F' : 'gray'}
            onClick={onClickDetail}
            role='detail-info'
          >
            상세정보
          </Detail>
          <Caution
            color={selectDetail === 'cautionInfo' ? '#5F5F5F' : 'gray'}
            onClick={onClickDetail}
            role='caution-info'
          >
            유의사항
          </Caution>
        </ProductBodyOption>
        <ProductBodyDetail>
          <Image alt={selectDetail} src={productContent} width={1000} height={4500} />
        </ProductBodyDetail>
      </ProductBodyWrapper>
    </ProductDetailWrapper>
  );
}

export async function getServerSideProps(props: any) {
  const { id } = props.params;
  const data = await fetch(`http://localhost:3000/api/product/${id}`);
  const result = await data.json();

  return {
    props: {
      id: result.id,
      productName: result.productName,
      price: result.price,
      mainImagePath: result.mainImagePath,
      detailImagePath: result.detailImagePath,
      cautionImagePath: result.cautionImagePath,
      carouselImages: result.carouselImages,
      option: result.option,
    },
  };
}

export default ProductDetailPage;

const ProductDetailWrapper = styled.div`
  padding: 50px;
`;
const ProductDetailText = styled.div`
  margin-left: 30px;
  width: 50%;
`;
const ProductTitle = styled.div`
  font-size: 40px;
  font-weight: bolder;
`;
const ProductPrice = styled.div``;
const BtnWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 10%;
  position: bottom;
`;
const BuyBtn = styled.button`
  background-color: orange;
  border: none;
  width: 80%;
`;
const CartBtn = styled.button`
  width: 10%;
  margin-left: 10px;
  background-color: skyblue;
  border: none;
`;
const OptionWrapper = styled.div``;
const ProductMainWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;
const ProductBodyWrapper = styled.div``;
const ProductBodyOption = styled.div`
  display: flex;
  width: 100%;
  text-align: center;
`;
const ProductBodyDetail = styled.div`
  background-color: gray;
  border: 2px solid white;
`;
const Detail = styled.div`
  width: 50%;
  font-size: 20px;
  border: 2px solid white;
  padding: 20px;
  background-color: ${(props) => props.color || 'gray'};
`;
const Caution = styled.div`
  width: 50%;
  font-size: 20px;
  border: 2px solid white;
  padding: 20px;
  background-color: ${(props) => props.color || 'gray'};
`;
const SizeSelect = styled.select``;
