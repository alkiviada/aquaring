import React, { Component, Fragment } from 'react'
import Header from "./Header";
import MainTitle from "./MainTitle";
import SVGSprites from "./SVGSprites";
import EngineerPosition from './Engineer'

class JoinUs extends Component {
  constructor(props) { 
    super(props)
    this.state = { 
                   positionShow: { 'eng': 0, },
                 }
    this.positionShowMore = this.positionShowMore.bind(this) 
  }

  positionShowMore(e, position) {
    e.preventDefault()
    this.setState({positionShow: { ...this.state.positionShow, [position]: 1}})  
  }

  render() {
     
    return (
        <Fragment>
        <SVGSprites />
        <Header headerCn={this.props.headerCn}/>
        <main className="join-us" role="main">
        <MainTitle />
        <section className="aqr-join-us">
        <p>
        AquaRing Energy is searching for experts and enthusiasts in clean energy and technology to join our team. 
        Please take a look at our open positions and share your resume with us.
        </p>
        </section>
        <section className="aqr-positions">
        <div className="aqr-section-head-wrapper">
        <h3 className="aqr-section-heading">Multi-Physics Simulation Engineer</h3>
        </div>
        <p>AquaRing Energy is a renewable power technology company that is currently specializing in the emerging market for renewable yet dependable evening and night-time power. 
Our team needs a multi-physics simulation expert with training and experience in electromagnetic and electromechanical simulation to develop accurate computer models of our technology.  
         { !this.state.positionShow['eng'] ? <button className="aqr-read-button" onClick={(e) => this.positionShowMore(e, 'eng')}>Read More <span className="visually-hidden">about Multi-Physics Simulation Engineer position</span></button> : '' }
        </p>
         { this.state.positionShow['eng'] ? <EngineerPosition /> : '' }
        </section>
        </main> 
        <footer role="contentinfo">
        </footer>
        </Fragment>
    )
  }
}

export default JoinUs
