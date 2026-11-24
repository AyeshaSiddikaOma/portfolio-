import Navbar from "./compoonents/Navbar";
import Banner from "./compoonents/Banner";
 import Slider from "./compoonents/Slider";
import Skill from "./compoonents/Skill";
import Pixel from "./compoonents/Pixel";
import Help from "./compoonents/Help";
import SliderTwo from "./compoonents/SliderTwo";
import Footer from "./compoonents/Footer";
import Blog from "./compoonents/Blog";
import line from "./assets/line.png";
import Arrows from "./compoonents/Arrows";
import SimpleSlider from "./compoonents/SimpleSlider"
import  Client from "./compoonents/Client"
import Inter from "./compoonents/Inter";

function App() {
  return (
    <>

      <Navbar />
      <Banner />
      <Slider />
      <Skill />
      <Pixel />
      <Help />
      <Arrows/>
      <SimpleSlider/>
      
      <div
        style={{ backgroundImage: `url(${line})` }}
        className="bg-cover  bg-center bg-back h-50  "
      >
        <SliderTwo className="rotate-2 w-full bg-indigo" />
        <SliderTwo className="-rotate-2 w-full bg-transparent "  />
      </div>
      <Inter/>
<Client/>

      <Blog/>
      <Footer /> 
  
    </>
  );
}



export default App;
