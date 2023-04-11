import './App.css';
import Carousel3dEx2 from './components/Carousel3dEx2';
import Carousel3dEx1 from './components/Carousel3dEx1';
import BasicSlider from './components/BasicSlider';
import InfiniteCarousel from './components/InfiniteCarousel';

// const getPlaceholderImage = (length: number) => Array.from({length}, (_, i) => `https://picsum.photos/1080/720?random=${i+1}`);

function App() {
  return (
    <>
      <h1 style={{textAlign: 'center'}}>React Carousel</h1>
      <BasicSlider />
      <Carousel3dEx1 />
      <Carousel3dEx2 />
      <InfiniteCarousel />
    </>
  );
}

export default App;
