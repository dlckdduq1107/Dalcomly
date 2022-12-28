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

describe('상품 이미지 캐러셀 테스트', () => {
  it('다음 버튼 클릭시 두번째 이미지로 변경', async () => {
    const firstImg = screen.getByAltText('img-0');
    expect(firstImg).toHaveClass('active');
    expect(screen.getByAltText('img-1')).not.toHaveClass('active');

    const nextBtn = screen.getByRole('next-img-btn');
    await userEvent.click(nextBtn);
    expect(await screen.findByAltText('img-1')).toHaveClass('active');
    expect(await screen.findByAltText('img-0')).not.toHaveClass('active');

    //#2 waitFor사용
    // await waitFor(() => {
    //   const secondImg = screen.getByAltText('img-1');
    //   expect(secondImg).toHaveClass('active');
    //   expect(firstImg).not.toHaveClass('active');
    // });
  });
  // wait for은 컴포넌트가 업데이트 될때 까지 기다려줌
  // 근데 find~를 await랑 같이 쓰면 동일하지 않나?
  // find는 해당 요소가 있을때까지 찾아준다.

  it('두번째 이미지에서 이전 버튼 클릭시 첫번째 이미지로 변경', async () => {
    const nextBtn = screen.getByRole('next-img-btn');
    await userEvent.click(nextBtn);
    expect(await screen.findByAltText('img-1')).toHaveClass('active');
    expect(await screen.findByAltText('img-0')).not.toHaveClass('active');

    const prevBtn = screen.getByRole('prev-img-btn');
    await userEvent.click(prevBtn);
    expect(await screen.findByAltText('img-0')).toHaveClass('active');
    expect(await screen.findByAltText('img-1')).not.toHaveClass('active');
  });

  it('처음 이미지에서 이전 버튼 클릭시 마지막 이미지로 변경', async () => {
    const firstImg = screen.getByAltText('img-0');

    expect(firstImg).toHaveClass('active');
    expect(screen.getByAltText('img-8')).not.toHaveClass('active');

    const prevBtn = screen.getByRole('prev-img-btn');
    await userEvent.click(prevBtn);

    expect(await screen.findByAltText('img-8')).toHaveClass('active');
  });

  it('마지막 이미지에서 다음 버튼 클릭시 처음 이미지로 변경', async () => {
    //이전 버튼 클릭으로 마지막 이미지로 이동
    const prevBtn = screen.getByRole('prev-img-btn');
    await userEvent.click(prevBtn);
    expect(await screen.findByAltText('img-0')).not.toHaveClass('active');

    const nextBtn = screen.getByRole('next-img-btn');
    await userEvent.click(nextBtn);

    expect(await screen.findByAltText('img-0')).toHaveClass('active');
  });
});
