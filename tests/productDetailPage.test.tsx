import React from 'react';
import { render, screen } from '@testing-library/react';
import ProductDetailPage from '../pages/product/[id]';
import { productsResponse } from './apiMockResponse';

it('Product Detail Page에서 상품 상세정보를 보여준다.', () => {
  render(<ProductDetailPage {...productsResponse.productList[0]} />);
  const element = screen.getByText(productsResponse.productList[0].productName);
  expect(element).toBeInTheDocument();
});
