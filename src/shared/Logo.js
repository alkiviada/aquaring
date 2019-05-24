import React, { Component } from 'react'

class Logo extends Component {
  render() {
    return (
<svg viewBox="-1.4 -0.8 35.8 39" height="100%" width="100%"
     xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" className="aqr-logo" aria-hidden="true" >
<defs>
<mask id="sun-masking" >
      <circle fill="yellow" 
         r="5"
	 cx="23"
	 cy="10" /> <path 
       d="
         M 10 30
         C 42 20, 17 -5, 2 10 
         M 2 10 
         C 15 0, 30 20, 10 30
        "
      fill="black"
      stroke="black"
      strokeWidth=".2"
/>
</mask>
<clipPath id="myClip">
<circle 
         r="17"
	 cx="16"
	 cy="17"
         stroke="black"
         strokeWidth=".1"
/>
  </clipPath>
<path id="energy-path" 
       d="
         M 19 6 
         A 5 5 0 0 1 25 16
        "
      stroke="white"
      fill="none"
      strokeWidth=".7"
/>
<path id="aquaring-path-1" 
       d="
         M 2 10 
         C 15 0, 30 20, 10 30
        "
      fill="none"
/>
<path id="aquaring-path-2" 
       d="
         M 10 30
         C 42 20, 17 -5, 2 10 
         M 2 10 
         C 15 0, 30 20, 10 30
        "
/>
<path id="aquaring-path-3" 
       d="
         M 25.5 16
         Q 28 30 33 17
         C 30 60 0 60 -1 17
         Q -2 30 -.5 17
         Q 8 37 25.5 16
        "
/>
    <linearGradient id="waveGradient" x1="0%" y1="0%" x2="50%" y2="100%">
      <stop offset="0%" className="wave-grad-start" />
      <stop offset="50%" className="wave-grad-middle" />
      <stop offset="100%" className="wave-grad-stop" />
    </linearGradient>
    <linearGradient id="bgWaveGradient" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" className="bg-grad-top" />
      <stop offset="100%" className="bg-grad-bottom" />
    </linearGradient>
</defs>
<g className="wave">
<a href="/" className="active aqr-logo-link" >
      <circle className="aqr-logo-bg" 
         r="17"
	 cx="16"
	 cy="17"
	 />
</a>

       <use xlinkHref="#aquaring-path-2" fill="url(#waveGradient)"/>
       <use xlinkHref="#aquaring-path-3" className="waves" clipPath="url(#myClip)"/>
      <text className="aqr-logo-water-text" textAnchor="start" x="13">
    <textPath xlinkHref="#aquaring-path-1">
    aquaring
    </textPath>
  </text>
<path
  d="
    M 10 30
    L 25 30
    C 28 20, 25 20, 25 20 
    C 20 26, 17 28, 10 30 
  "
  stroke="none"
  strokeWidth=".2"
  fill="none"
/>
      <circle className="aqr-logo-sun"
         r="10"
	 cx="23"
	 cy="6"
         mask="url(#sun-masking)"
	 />
      <text className="aqr-logo-sun-text">
    <textPath xlinkHref="#energy-path">
    energy
    </textPath>
  </text>
</g>
</svg>
    )
  }
}

export default Logo
