import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import HomePage from '../pages/index';
import { mainPageImages, products } from '../util/dummyData';

it('메인 페이지를 보여준다.', () => {
  render(<HomePage {...products} {...mainPageImages} />);
  const todayHotElement = screen.getByText('금일 hot');
  expect(todayHotElement).toBeInTheDocument();

  const weeklyHotElement = screen.getByText('weekly hot items');
  expect(weeklyHotElement).toBeInTheDocument();
});

it('메인 페이지 캐러셀 자동 슬라이드 - 3초후 다음 이미지 표시', async () => {
  render(<HomePage {...products} {...mainPageImages} />);

  const firstImg = screen.getByAltText('img-0');
  expect(firstImg).toHaveClass('active');

  await waitFor(
    () => {
      const secondImg = screen.getByAltText('img-1');
      expect(secondImg).toHaveClass('active');
    },
    { timeout: 3000 }
  );
});
