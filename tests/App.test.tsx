import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../pages/index';
import ProductPage from '../pages/product';

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

it('Product Page를 보여준다.', () => {
  // render(<ProductPage data={productList} />);
  // const element = screen.getAllByRole('img');
  // expect(element).toHaveLength(2);
});
