import { MouseEvent, useMemo, useState } from "react";
import styled from "styled-components";

const getPlaceholderImage = (length: number) => Array.from({length}, (_, i) => `https://picsum.photos/800/300?random=${i+1}`);
// const getRest = (i: number, length: number) => (length + i % length) % length;
const Container = styled.div`
  width: 800px;
  height: 300px;
  margin: 40px auto 0;
`;
const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;
const Inner = styled.div`
  height: 100%;
  display: flex;
  position: relative;
`;
const Item = styled.div`
  float: left;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;
const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 99;
`
const PrevButton = styled(Button)` left: 0; `;
const NextButton = styled(Button)` right: 0; `;
let flag = false;

// 참고 블로그 https://im-developer.tistory.com/97
const InfiniteCarousel = () => {
  const image = getPlaceholderImage(3);
  const computedImage = [image[image.length - 1], ...image, image[0]];

  const slideWidth = 800;
  const slideDuration = 500;
  const slideLength = image.length;  

  const [index, setIndex] = useState(0);
  const [position, setPosition] = useState(1);
  const [duration, setDuration] = useState(slideDuration);
  const translateX = useMemo(() => slideWidth * position, [position]);

  const handlerPrev = (ev: MouseEvent) => {
    if (flag) return;
    !flag && (flag = true);
    if (index === 0) {
      setTimeout(() => {
        setIndex(slideLength - 1)
        setPosition(slideLength);
        setDuration(0);
        flag = false;
      }, slideDuration);
    }
    setIndex(index - 1);
    setPosition(position - 1);
    setDuration(slideDuration);
    setTimeout(() => (flag = false), slideDuration)
  }

  const handlerNext = (ev: MouseEvent) => {
    if (flag) return;
    !flag && (flag = true);
    if (index === slideLength - 1) {
      setTimeout(() => {
        setIndex(0)
        setPosition(1);
        setDuration(0);
        flag = false;
      }, slideDuration);
    } 
    setIndex(index + 1);
    setPosition(position + 1);
    setDuration(slideDuration);
    setTimeout(() => (flag = false), slideDuration)
  } 

  return <div> 
    <h2 style={{textAlign: 'center'}}>Infinite Carousel</h2>
    <Container>
      <Wrapper>
        <PrevButton onClick={handlerPrev}>prev</PrevButton>
        <NextButton onClick={handlerNext}>next</NextButton>
        <Inner style={{
          width: computedImage.length * slideWidth,
          transition: `all ${duration}ms ease-in-out`,
          transform: `translate3d(-${translateX}px, 0px, 0px)`,
        }}>
          {computedImage.map((src, i) => {
            return <Item key={`item-${i}`} style={{ backgroundImage: `url(${src})` }}>{i}</Item>
          })}
        </Inner>
      </Wrapper>
    </Container>
  </div>
}

export default InfiniteCarousel;