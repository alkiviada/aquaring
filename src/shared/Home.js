import React, { Component, Fragment } from 'react'
import Header from "./Header";
import About from "./About";
import SVGSprites from "./SVGSprites";

class Home extends Component {
  constructor(props) { 
    super(props)
    this.state = { headerCn: '' };
    this.handleScroll = this.handleScroll.bind(this) 
  }
  
  handleScroll(e) {
    const lastScrollY = window.scrollY
    const hCn = '';
    if (lastScrollY > 58) {
      this.setState({
      headerCn: 'aqr-header-sticky'
    });
    } 
    else {
      this.setState({
      headerCn: ''
    });

    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  render() {
    
    return (
        <Fragment>
        <SVGSprites />
        <Header headerCn={this.state.headerCn}/>
        <main role="main">
          <div className="title-wrapper">
            <h1>AquaRing Energy</h1>
            <h2>CLEAN, RENEWABLE, ENERGY – 24/7</h2>
          </div>
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
        </main> 
        <footer role="contentinfo">
        </footer>
        </Fragment>
    )
  }
}

export default Home
