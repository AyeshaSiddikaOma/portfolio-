import ShinyText from '../compoonents/shinyText/ShinyText';


import React from 'react'

const Headline = ({head,className}) => {
  return (
    
<ShinyText
  text={head}
  color="#b5b5b5"
  shineColor="#ffffff"
  speed={2}
  shineWidth={40}
  softness={0.8}
  trigger="loop"
  delay={0}
  angle={120}
  bands={1}
  glow={0}
  direction="left"
  easing="smooth"
  yoyo={false}
  followPointer={false}
  pauseOnHover={false}
  disabled={false}
className={`w-[460px] max-w-full text-2xl  sm:text-3xl md:text-4xl lg:text-5xl font-bold font-sora ${className}`}
/>  )
}

export default Headline