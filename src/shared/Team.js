import React, { Component, Fragment } from 'react'
import Header from "./Header";
import MainTitle from "./MainTitle";
import SVGSprites from "./SVGSprites";

class Team extends Component {

  render() {
    
    return (
        <Fragment>
        <SVGSprites />
        <Header headerCn={this.props.headerCn}/>
        <main role="main">
        <MainTitle />
        </main> 
        <footer role="contentinfo">
        </footer>
        </Fragment>
    )
  }
}

export default Team 
