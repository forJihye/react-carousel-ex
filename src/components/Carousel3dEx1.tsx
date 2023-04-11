import { useState } from "react";

const Carousel3dEx1 = () => {
  const [index, setIndex] = useState(0);
  
  const handlerClick = (index: number) => {
    console.log(index)
    setIndex(index);
  }

  return <div>
    <h2 style={{textAlign: 'center'}}>Carousel 3D - 1</h2>
    <div className='carousel-3d slider-container'>
      <div className='slider-wrapper'>
        <button type='button' className='slider-btn prev-btn' onClick={() => handlerClick(index - 1)}>prev</button>
        <button type='button' className='slider-btn next-btn' onClick={() => handlerClick(index + 1)}>next</button>
        <div className='slider-inner'>
          {Array.from({length: 5}).map((src, i) => {
            const rotate = 15;
            const posIndex = i - Math.floor(5 / 2);
            const relatedIndex = posIndex + index;
            const direction = posIndex === 0 ? 0 : Math.abs(posIndex) / posIndex;
            
            const translate = posIndex * 100 + (direction * 100);
            const translateZ = posIndex === 0 ? 0 : -(Math.abs(posIndex) >= 2 ? 100 : 100);
            const opacity = Math.abs(posIndex) !== Math.floor(5 / 2) ? 1 : 0;
            const zIndex = 5 - Math.abs(posIndex);
            const rotateDeg = (Math.abs(posIndex) >= 2 ? rotate : rotate/2) * -(Math.abs(posIndex) / (posIndex === 0 ? 1 : posIndex));

            // perspective(500px)
            return <div key={`item-${relatedIndex}`} className='slider-item' style={{
              transform: `translate3d(${translate}px, 0px, ${translateZ}px) rotateY(${rotateDeg}deg)`,
              opacity,
              zIndex,
              background: '#fff'
            }}>item {(5 + relatedIndex % 5) % 5}</div>
          })}
        </div>
      </div>
    </div>
  </div>
}

export default Carousel3dEx1;
