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
</svg>
    )
  }
}

export default SVGSprites
