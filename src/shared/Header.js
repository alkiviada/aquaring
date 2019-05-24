import React, { Component, } from 'react'
import { Link, withRouter } from "react-router-dom";
import Logo from "./Logo"

class Header extends Component {

  render() {
    const { location } = this.props
    console.log(location)
    return (
      <header role="banner" className={this.props.headerCn}>
       <a href="/" tabIndex="-1">
         <Logo />
         <span className="visually-hidden">
           Aquaring Main Page 
         </span>
       </a>
       <nav role="navigation" area-label="AquaringEnergy Menu" className="aqr-top-nav">
       <ul className="aqr-top-nav-list">
       <li className="aqr-top-nav-li"><a className="aqr-top-nav-link" href="/team" area-label="Our Team">Our Team</a></li>
       <li className="aqr-top-nav-li"><a className="aqr-top-nav-link" href="/br" area-label="Join Us">Join Us</a></li>
       </ul>
       </nav>
      </header>
    )
  }
}

export default withRouter(Header)
