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
    console.log(lastScrollY)
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
            <h3>
              Our Technology
           </h3>
           <p>
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
