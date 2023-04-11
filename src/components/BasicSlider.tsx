import React, { PointerEvent, useState } from 'react';

const BasicSlider = () => {
  const [index, setIndex] = useState(0);

  const handlerNext = (ev: PointerEvent<HTMLButtonElement>) => {
    if (index === 2) return
    setIndex(index + 1);
  }  
  const handlerPrev = (ev: PointerEvent<HTMLButtonElement>) => {
    if (index === 0) return
    setIndex(index - 1);
  }

  return <div>
    <h2 style={{textAlign: 'center'}}>Basic Slider</h2>
    <div className='basic slider-container' style={{width: 550}}>
      <div className='slider-wrapper' style={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        position: 'relative',
      }}>
        <button type='button' className='slider-btn prev-btn' onClick={handlerPrev}>prev</button>
        <button type='button' className='slider-btn next-btn' onClick={handlerNext}>next</button>
        <div className='slider-inner' style={{
          width: '300%',
          transform: `translate3d(-${550 * index}px, 0px, 0px)`,
          transition: 'transform 0.7s'
        }}>
          {Array.from({length: 3}).map((_, i) => {
            return <div key={`div-${i}`} className='slider-item'>{i+1}</div>
          })}
        </div>
      </div>
    </div>
  </div>
}

export default BasicSlider;