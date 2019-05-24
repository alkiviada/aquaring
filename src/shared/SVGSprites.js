import React, { Component } from 'react'

class SVGSprites extends Component {
  render() {
    return (
<svg className="svg-icons" width="0" height="0" aria-hidden="true"
     xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink">
<symbol id="aqr-about-icon" viewBox="-1.4 -0.2 42 38" >
      <circle fill="none"
         r="17"
	 cx="16"
	 cy="17"
	 />
        <path fill="none" 
         d="
         M 3 28
         C 15 20 5 10 16 0
         L 16 25
         M -1 17
         C 7 24 12 24 16 15
         M 16 0
         A 1 1 0 0 1 16 15
         C 22 15 23 33 40 32
         "
/>
</symbol>
<symbol id="aqr-input-icon" viewBox="0 0 10 10" >
  <path d="M 0 0 L 5 5 L 0 10" />
</symbol>
<symbol viewBox="-3 -2 42 40" id="aqr-tech-icon">
<defs>
<rect x="16" y="-1" height="36" width="2" id="line" />
<rect x="16" y="8" width="8.5" height="2" id="line-small" />
<circle cx="23.5" cy="7" r="1.5" id="cog-small" />
<mask id="cog-masking" >
    <g stroke="white" fill="white">
       <use xlinkHref="#cog-small" />
    </g>
       <path 
         d="
         M 16 0
         A 1 1 0 0 1 16 15
         "
         stroke="black"
         strokeWidth="1"
         fill="black"
        />
</mask> 
<mask id="line-masking" >
    <g stroke="white" fill="white">
       <use xlinkHref="#line-small" />
       <use xlinkHref="#line-small" transform="rotate(-20) translate(-4.2, 3.3)" />
       <use xlinkHref="#line-small" transform="rotate(17) translate(1.7, -3.3)" />
       <use xlinkHref="#line-small" transform="rotate(35) translate(1.5, -8)" />
    </g>
       <path 
         d="
         M 16 2 
         A 1 1 0 0 1 16 15
         A 1 1 0 1 1 16 2
         "
         stroke="black"
         strokeWidth="2"
         fill="black"
        />
</mask> 
<mask id="masking" >
       <g fill="white" stroke="white" strokeWidth="2">
       <use xlinkHref="#line" stroke="white" />
       <use xlinkHref="#line" transform="rotate(90) translate(0, -33)" />
       <use xlinkHref="#line" transform="rotate(45) translate(7, -16.3)" />
       <use xlinkHref="#line" transform="rotate(-45) translate(-17, 6.3)"   />
       <use xlinkHref="#line" transform="rotate(-22.5) translate(-8, 5)" />
       <use xlinkHref="#line" transform="rotate(22.5) translate(6, -7.3)" />
       <use xlinkHref="#line" transform="rotate(67.5) translate(5, -25.3)" />
       <use xlinkHref="#line" transform="rotate(-67.5) translate(-26, 4.3)" />
       </g>
      <circle fill="black"
         r="16"
	 cx="16"
	 cy="17"
         stroke="black"
         strokeWidth="2"
	 />
</mask>
</defs>

<g mask="url(#masking)" fill="black" stroke="black">
       <use xlinkHref="#line" />
       <use xlinkHref="#line" transform="rotate(90) translate(0, -33)"/>
       <use xlinkHref="#line" transform="rotate(45) translate(7, -16.3)" />
       <use xlinkHref="#line" transform="rotate(-45) translate(-17, 6.3)"   />
       <use xlinkHref="#line" transform="rotate(-22.5) translate(-8, 5)" />
       <use xlinkHref="#line" transform="rotate(22.5) translate(6, -7.3)" />
       <use xlinkHref="#line" transform="rotate(67.5) translate(5, -25.3)" />
       <use xlinkHref="#line" transform="rotate(-67.5) translate(-26, 4.3)" />
</g>
<g mask="url(#line-masking)" >
       <use xlinkHref="#line-small" />
       <use xlinkHref="#line-small" transform="rotate(-20) translate(-4.2, 3.3)" />
       <use xlinkHref="#line-small" transform="rotate(17) translate(1.7, -3.3)" />
       <use xlinkHref="#line-small" transform="rotate(35) translate(1.5, -8)" />
</g>

      <circle fill="none"
         r="16"
	 cx="16"
	 cy="17"
         stroke="black"
         strokeWidth="2"
	 />
        <path fill="none" stroke="black" strokeWidth=".8"
         d="
         M 3 28
         C 15 20 5 10 16 2
         L 16 25
         M -1 17
         C 7 24 12 24 16 15
         M 16 2
         A 1 1 0 0 1 16 15
         C 22 15 23 33 40 32
         "
        />
       <path 
         d="
         M 16 2
         A 1 1 0 0 1 16 15
         "
         stroke="black"
         strokeWidth="2"
         fill="none"
        />

</symbol>
<symbol id="aqr-news-icon" viewBox="-1 -8 40 40" >
<rect x="0" y="-6" width="36" height="40" strokeWidth="1" rx="3" stroke="black" fill="none" />
<text x="3" y="5" className="aqr-news-caps">a</text>
<path  className="aqr-news-waves"
  d="
  M 10 3
  A 1 1 0 0 0 16 3
  A 1 1 0 0 0 20 3
  A 1 1 0 0 0 24 3
  A 1 1 0 0 0 28 3
  A 1 1 0 0 0 32 3
 "
/>
<text x="1" y="18" className="aqr-news-caps">Q</text>
<path className="aqr-news-waves"
  d="
  M 20 18
  A 1 1 0 0 0 24 18
  A 1 1 0 0 0 28 18
  A 1 1 0 0 0 32 18
 "
/>
<text x="3" y="31" className="aqr-news-caps">R</text>
<path  className="aqr-news-waves"
  d="
  M 12.2 30.8
  Q 14 29.8 16 27
  A 1 1 0 0 0 20 27
  A 1 1 0 0 0 24 27
  A 1 1 0 0 0 28 27
  A 1 1 0 0 0 32 27
 "
/>
</symbol>
</svg>
    )
  }
}

export default SVGSprites
