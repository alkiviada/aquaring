import React, { Component, Fragment } from 'react'
import Header from "./Header";
import About from "./About";
import MainTitle from "./MainTitle";
import SVGSprites from "./SVGSprites";

class Home extends Component {

  render() {
    return (
        <Fragment>
        <SVGSprites />
        <Header headerCn={this.props.headerCn}/>
        <main role="main">
          <MainTitle />
          <About />
          <section className="aqr-tech">
         <div className="aqr-section-head-wrapper">
         <svg className="aqr-heading-icon" aria-hidden="true">
           <use xlinkHref="#aqr-tech-icon" />
         </svg>
            <h3>
              Our Technology
           </h3>
         </div>
           <p>
Renewable energy is not dependable. Today, most of the world's energy needs are still met by the polluting energy resources. AquaRing Energy's solution is an offshore wave energy converter with intertial energy storage. Our system is submersible, so it can continue to generate during storms and thus act as a safety net for the grid.

Our technology is a demand-response based, so unlike other sources of renewable energy, it can deliver consistent power. Ocean wave energy is a huge and essentially untapped resource. AquaRing Energy's technology can cost-effectively tap into it, and ultimately supply as much as one third of the US demand for reliable, grid stabilizing, electricity.
           </p>
         </section>
          <section className="aqr-news">
         <div className="aqr-section-head-wrapper">
         <svg className="aqr-heading-icon" aria-hidden="true">
           <use xlinkHref="#aqr-news-icon" />
         </svg>
            <h3>
              Our News
           </h3>
         </div>
           <h4>AquaRing Accepted into Cleantech Open Accelerator</h4>
           <p>
           Cleantech Open is the world’s largest clean technology accelerator program run by LACI (Los Angeles Cleantech Incubator). Its mission is to accelerate the growth of the cleantech industry through information exchange, thought leadership, and strategic partnerships.
           </p>
          </section>
        </main> 
        <footer role="contentinfo">
        </footer>
        </Fragment>
    )
  }
}

export default Home
