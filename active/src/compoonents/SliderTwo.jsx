import LogoLoop from './logoloop/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import imgOne from "../assets/add.png"
import imgTwo from "../assets/add2.png"

const imageLogos = [
  { src: imgOne, alt: "Company 1", href: "https://company1.com" },
  { src: imgTwo, alt: "Company 2", href: "https://company2.com" },
];

function Slider({className}) {
  return (
  <div
      className={`relative py-0.5  overflow-hidden bg-[#140C1C] ${className}`}
    >      <LogoLoop
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