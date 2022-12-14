import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../pages/index';
import ProductPage from '../pages/product';
import ProductDetailPage from '../pages/product/[id]';

const props = {
  productList: [
    { productName: 'clothes1', imgPath: '/assets/images/metaRabbit.png' },
    { productName: 'hat', imgPath: '/assets/images/testImg2.png' },
  ],
};

it('메인 페이지를 보여준다.', () => {
  render(<HomePage {...props} />);
  const todayHotElement = screen.getByText('금일 hot');
  expect(todayHotElement).toBeInTheDocument();

  const weeklyHotElement = screen.getByText('weekly hot items');
  expect(weeklyHotElement).toBeInTheDocument();
});

it('Product Detail Page에서 상품 상세정보를 보여준다.', () => {
  render(<ProductDetailPage {...props.productList[0]} />);
  const element = screen.getByText('clothes1');
  expect(element).toBeInTheDocument();
});
