import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';

function ProductDetailPage(props: any) {
  const { imgPath, id, productName, price, cautionPath } = props;
  const [productContent, setProductContent] = useState<string>(imgPath);
  const [selectDetail, setSelectDetail] = useState<string>('상세정보');

  const onClickDetail = (e: React.MouseEvent<HTMLInputElement>) => {
    const text = e.currentTarget.textContent;
    if (text === '상세정보') {
      setProductContent(imgPath);
    } else if (text === '유의사항') {
      setProductContent(cautionPath);
    }
    setSelectDetail(text as string);
  };

  return (
    <ProductDetailWrapper>
      <ProductMainWrapper>
        <Image src={imgPath} width={450} height={450} />
        <ProductDetailText>
          <ProductTitle>{productName}</ProductTitle>
          <ProductPrice>{`${price.toLocaleString('ko-KR')}원`}</ProductPrice>
          <OptionWrapper>options</OptionWrapper>
          <BtnWrapper>
            <BuyBtn>구매하기</BuyBtn>
            <CartBtn>장바구니</CartBtn>
          </BtnWrapper>
        </ProductDetailText>
      </ProductMainWrapper>
      <ProductBodyWrapper>
        <ProductBodyOption>
          <Detail color={selectDetail === '상세정보' ? '#5F5F5F' : 'gray'} onClick={onClickDetail}>
            상세정보
          </Detail>
          <Caution color={selectDetail === '유의사항' ? '#5F5F5F' : 'gray'} onClick={onClickDetail}>
            유의사항
          </Caution>
        </ProductBodyOption>
        <ProductBodyDetail>
          <Image src={productContent} width={1000} height={4500} />
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
      imgPath: result.imgPath,
      price: result.price,
      cautionPath: result.cautionPath,
    },
  };
}

export default ProductDetailPage;

const ProductDetailWrapper = styled.div`
  padding: 50px;
`;
const ProductDetailText = styled.div`
  margin-left: 30px;
  width: 100%;
`;
const ProductTitle = styled.div`
  font-size: 40px;
  font-weight: bolder;
`;
const ProductPrice = styled.div``;
const BtnWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 20%;
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
