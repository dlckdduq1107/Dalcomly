import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../pages/index';
import ProductPage from '../pages/products';

it('홈페이지를 보여준다.', () => {
  render(<HomePage />);
  const element = screen.getByRole('link', {
    name: '전체 물품 리스트',
  });
  expect(element).toBeInTheDocument();
});

it('Product Page를 보여준다.', () => {
  const productList = {
    result: [
      { productName: 'clothes1', imgPath: '/assets/images/metaRabbit.png' },
      { productName: 'hat', imgPath: '/assets/images/testImg2.png' },
    ],
  };
  render(<ProductPage data={productList} />);
  const element = screen.getAllByRole('img');
  expect(element).toHaveLength(2);
});
