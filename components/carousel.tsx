import Image from 'next/future/image';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

function Carousel(props: any) {
  const { imgPaths, width, height } = props;
  const imgCountRef = useRef<number>(imgPaths.length - 1);
  const slideRef = useRef<HTMLDivElement>(null);

  const [currentImgIndex, setCurrentImgIndex] = useState<number>(0);

  useEffect(() => {
    slideRef.current!.style.transition = 'all 0.5s ease-in-out';
    slideRef.current!.style.transform = `translateX(-${currentImgIndex * width}px)`;
  }, [currentImgIndex]);

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

  return (
    <CarouselWrapper maxWidth={width}>
      <Button role='prev-img-btn' onClick={clickPrevImg} isLeft={true}>{`<`}</Button>
      <ImgWrapper ref={slideRef}>
        {imgPaths.map((imgPath: string, idx: number) => (
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
      <Button role='next-img-btn' onClick={clickNextImg} isLeft={false} imgWidth={width}>
        {`>`}
      </Button>
    </CarouselWrapper>
  );
}
export default Carousel;

const CarouselWrapper = styled.div<any>`
  overflow: hidden;
  width: 50%;
  max-width: ${(props) => props.maxWidth}px;
  min-width: 250px;
  position: relative;
  zindex: 0;
`;

const ImgWrapper = styled.div`
  display: flex;
`;
const Button = styled.button<any>`
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
  left: ${(props) => (props.isLeft ? '1%' : '88%')};
`;
