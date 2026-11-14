import LogoLoop from './logoloop/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import imgOne from "../assets/spon1.png"
import imgTwo from "../assets/spon2.png"
import imgThree from "../assets/spon3.png"

const imageLogos = [
  { src: imgOne, alt: "Company 1", href: "https://company1.com" },
  { src: imgTwo, alt: "Company 2", href: "https://company2.com" },
  { src: imgThree, alt: "Company 3", href: "https://company3.com" },
];

function Slider() {
  return (
    <div style={{ height: '200px', position: 'relative', overflow: 'hidden',background: '#140C1C', }} >
      <LogoLoop
        logos={imageLogos}
        speed={100}
        direction="left"
        logoHeight={48}
        gap={56}
        hoverSpeed={0}
        scaleOnHover
        ariaLabel="Technology partners"
      />

   


    </div>
  );
}
export default Slider