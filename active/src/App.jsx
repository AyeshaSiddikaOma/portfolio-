import Navbar from "./compoonents/Navbar";
import Banner from "./compoonents/Banner";
import Slider from "./compoonents/Slider";
import Skill from "./compoonents/Skill";
import Pixel from "./compoonents/Pixel";
import Help from "./compoonents/Help";
import SliderTwo from "./compoonents/SliderTwo";
import Footer from "./compoonents/Footer";
import line from "./assets/line.png";
function App() {
  return (
    <>
      <Navbar />
      <Banner />
      <Slider />
      <Skill />
      <Pixel />
      <Help />
      <div
        style={{ backgroundImage: `url(${line})` }}
        className="bg-cover bg-center"
      >
        <SliderTwo className="rotate-2 w-full bg-indigo" />
        <SliderTwo className="-rotate-2 w-full " />
      </div>
      <Footer />
    </>
  );
}

export default App;
