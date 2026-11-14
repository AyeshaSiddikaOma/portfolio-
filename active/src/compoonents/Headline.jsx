import ShinyText from '../compoonents/shinyText/ShinyText';


import React from 'react'

const Headline = () => {
  return (
    
<ShinyText
  text="MY Mastering Video
Editing Skills"
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
/>
  )
}

export default Headline