import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../pages/index';

it('Welcome message를 보여준다.', () => {
  render(<HomePage />);
  const element = screen.getByRole('link', {
    name: '전체 물품 리스트',
  });
  expect(element).toBeInTheDocument();
});
