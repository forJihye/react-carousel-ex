import { useState } from "react";
import styled from "styled-components";

const StyledContainer = styled.div`
  width: 800px;
  height: 250px;
  margin: 30px auto;
  background: #ddd;
`;
const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  overflow: hidden;
`;
const StyledInner = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const StyledItem = styled.div`
  position: absolute;
  width: 300px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  color: #fff;
  transition: all 0.5s;
`;
const StyledButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 99;
`

const items = [
  { background: '#66347F' },
  { background: '#37306B' },
  { background: '#D27685' }
]

const size = 3;
const computedSize = size + 2;

const dist = 100;
const yDeg = 60;

const Carousel3dEx2 = () => {
  const [index, setIndex] = useState(0);

  return <div>
    <h2 style={{textAlign: 'center'}}>Carousel 3D - 2</h2>
    <StyledContainer>
      <StyledWrapper>
        <StyledButton onClick={() => setIndex(index - 1)} style={{left: 0}}>prev</StyledButton>
        <StyledButton onClick={() => setIndex(index + 1)} style={{right: 0}}>next</StyledButton>
        <StyledInner>
          {Array.from({length: computedSize}).map((_, i) => {
            const position = i - Math.floor(computedSize / 2);
            const relatedIndex = position + index;
            const restIndex = (items.length + relatedIndex % items.length) % items.length;

            const direction = position === 0 ? 0 : (position / Math.abs(position))

            const translate = position * dist + (direction * dist);
            const translateZ = position === 0 ? 0 : -dist
            // const translateZ = position === 0 ? 0 : -(Math.abs(position) >= 2 ? 100 : 100);
            const rotate = position === 0 ? 0 : Math.abs(position) === Math.floor(computedSize/2) ? yDeg : (yDeg/2);
            const rotateDeg = rotate * -(direction);
            const opacity = Math.abs(position) === Math.floor(computedSize/2) ? 0 : 1;
            const zIndex = computedSize - Math.abs(position);
            // console.log(position, relatedIndex, direction, translate, translateZ, rotateDeg, opacity, zIndex)
            
            return <StyledItem key={`box-${relatedIndex}`} style={{
              background: items[restIndex].background,
              transform: `perspective(500px) translate3d(${translate}px, 0px, ${translateZ}px) rotateY(${rotateDeg}deg)`,
              opacity,
              zIndex,
            }}>item {restIndex}</StyledItem>
          })}
        </StyledInner>
      </StyledWrapper>
    </StyledContainer>
  </div>

}

export default Carousel3dEx2;