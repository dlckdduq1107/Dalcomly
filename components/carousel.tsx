import Image from 'next/future/image';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useInterval } from '../hooks/useInterval';
import { CarouselProps } from '../types/props';
import { CarouselButtonProps } from '../types/styled';

function Carousel(props: CarouselProps) {
  const { imgPaths, width, height, kind, delay } = props;
  const imgCountRef = useRef<number>(imgPaths.length - 1);
  const slideRef = useRef<HTMLDivElement>(null);

  const [currentImgIndex, setCurrentImgIndex] = useState<number>(0);

  useEffect(() => {
    slideRef.current!.style.transition = 'all 0.5s ease-in-out';
    slideRef.current!.style.transform = `translateX(-${currentImgIndex * width}px)`;
  }, [currentImgIndex]);

  if (delay) {
    useInterval(() => {
      clickNextImg();
    }, delay);
  }

  const clickNextImg = () => {
    if (currentImgIndex >= imgCountRef.current) {
      setCurrentImgIndex(0);
    } else {
      setCurrentImgIndex(currentImgIndex + 1);
    }
  };

  const clickPrevImg = () => {
    if (currentImgIndex === 0) {
      setCurrentImgIndex(imgCountRef.current);
    } else {
      setCurrentImgIndex(currentImgIndex - 1);
    }
  };

  const clickDot = (idx: number) => {
    setCurrentImgIndex(idx);
  };

  return (
    <CarouselWrapper maxWidth={width}>
      <Button role='prev-img-btn' onClick={clickPrevImg} isLeft={true}>{`<`}</Button>
      <ImgWrapper ref={slideRef}>
        {imgPaths.map((imgPath, idx) => (
          <Image
            alt={`img-${idx}`}
            className={`${currentImgIndex === idx ? 'active' : ''}`}
            src={imgPath}
            width={width}
            height={height}
            key={idx}
          />
        ))}
      </ImgWrapper>
      <Button role='next-img-btn' onClick={clickNextImg} isLeft={false} kind={kind}>
        {`>`}
      </Button>
      <DotWrapper>
        {imgPaths.map((imgPath, idx) => (
          <Dot
            className={`${currentImgIndex === idx ? 'active-dot' : 'dot'}`}
            isFocus={currentImgIndex === idx ? true : false}
            onClick={() => clickDot(idx)}
            role={`${kind ? kind + '-' : ''}dot-${idx}`}
            key={`dot-${idx}`}
          />
        ))}
      </DotWrapper>
    </CarouselWrapper>
  );
}
export default Carousel;

const CarouselWrapper = styled.div<{ maxWidth: number }>`
  overflow: hidden;
  max-width: ${(props) => props.maxWidth}px;
  min-width: 250px;
  position: relative;
  zindex: 0;
`;

const ImgWrapper = styled.div`
  display: flex;
`;
const Button = styled.button<CarouselButtonProps>`
  all: unset;
  padding: 0.01em 0.5em 0.2em 0.5em;
  color: coral;
  border-radius: 10px;
  &:hover {
    transition: all 0.3s ease-in-out;
    background-color: coral;
    color: #fff;
  }
  font-size: 30px;
  position: absolute;
  top: 47%;
  z-index: 1;
  left: ${(props) => (props.isLeft ? '1%' : props.kind === 'main' ? '96%' : '88%')};
`;
const DotWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 4rem;
  padding-right: 4rem;
`;
const Dot = styled.div<{ isFocus: boolean }>`
  background-color: ${(props) => (props.isFocus ? 'gray' : 'white')};
  border-radius: 100%;
  width: 10px;
  height: 10px;
  margin: 10px;
`;
