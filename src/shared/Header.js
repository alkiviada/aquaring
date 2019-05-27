import React, { Component, } from 'react'
import { Link, withRouter } from "react-router-dom";
import Logo from "./Logo"

class Header extends Component {

  render() {
    const { location } = this.props
    console.log(location)
    const navLnks = [ '/', '/team', '/join' ]
    const active = navLnks.find(l => l == location.pathname)
    const navLnksCnames = navLnks.reduce((o, l) =>
    (o[l] = active == l ? 'aqr-top-nav-link active' : 'aqr-top-nav-link', o), {});

    return (
      <header role="banner" className={this.props.headerCn}>
       { active != '/' ? 
       <a href="/" tabIndex="-1">
         <Logo notMain={1}/>
         <span className="visually-hidden">
           Aquaring Main Page 
         </span>
       </a> : <Logo />
        }
       <nav role="navigation" area-label="AquaringEnergy Menu" className="aqr-top-nav">
       <ul className="aqr-top-nav-list">
       <li className="aqr-top-nav-li">
       { active == '/team' ? <strong>Our Team</strong> : <a className={navLnksCnames['/team']} href="/team" area-label="Our Team">Our Team</a>}
       </li>
       <li className="aqr-top-nav-li"><a className={navLnksCnames['/join']} href="/join" area-label="Join Us">Join Us</a></li>
       </ul>
       </nav>
      </header>
    )
  }
}

export default withRouter(Header)
