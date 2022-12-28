import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../pages/index';
import { products } from '../util/dummyData';

it('메인 페이지를 보여준다.', () => {
  render(<HomePage {...products} />);
  const todayHotElement = screen.getByText('금일 hot');
  expect(todayHotElement).toBeInTheDocument();

  const weeklyHotElement = screen.getByText('weekly hot items');
  expect(weeklyHotElement).toBeInTheDocument();
});
