import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProductDetailPage from '../pages/product/[id]';
import { products } from '../util/dummyData';

beforeEach(() => {
  render(<ProductDetailPage {...products.productList[0]} />);
});

it('Product Detail Page - 상품 이름을 보여준다.', () => {
  const element = screen.getByText(products.productList[0].productName);
  expect(element).toBeInTheDocument();
});

it('Product Detail Page - 가격을 보여준다', () => {
  const krPrice = products.productList[0].price.toLocaleString('kr') + '원';
  const element = screen.getByText(krPrice);
  expect(element).toBeInTheDocument();
});

it('Product Detail Page - 상품 이미지를 보여준다', () => {
  const element = screen.getByAltText('detail-img');
  expect(element).toBeInTheDocument();
});

it('Product Detail Page - 구매버튼 존재', () => {
  const buyBtn = screen.getByRole('buy-btn');
  expect(buyBtn).toBeInTheDocument();
});

it('Product Detail Page - 장바구니 버튼 존재', () => {
  const cartBtn = screen.getByRole('cart-btn');
  expect(cartBtn).toBeInTheDocument();
});

it('Product Detail Page - 상품 디테일 클릭시 정보 변경(상세정보 -> 유의사항)', async () => {
  const detailImg = screen.getByAltText('detailInfo');
  expect(detailImg).toBeInTheDocument();
  expect(screen.queryByAltText('cautionInfo')).not.toBeInTheDocument();

  const cautionBtn = screen.getByRole('caution-info');
  userEvent.click(cautionBtn);
  expect(await screen.findByAltText('cautionInfo')).toBeInTheDocument();
});
