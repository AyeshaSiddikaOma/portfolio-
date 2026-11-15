import Navbar from './compoonents/Navbar'
import Banner from './compoonents/Banner';
import Slider from './compoonents/Slider';
import Skill from './compoonents/Skill';
import Pixel from './compoonents/Pixel';
import Help from './compoonents/Help';
import SliderTwo from './compoonents/SliderTwo';

function App() {
  return (
    <>
    <Navbar/>
    <Banner/>
    <Slider/>
    <Skill/>
    <Pixel/>
    <Help/>
    <SliderTwo className="rotate-2 w-full bg-indigo"  />

    </>
  );
}

export default App;