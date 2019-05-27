import React, { Component, Fragment } from 'react'
import Header from "./Header";
import MainTitle from "./MainTitle";
import SVGSprites from "./SVGSprites";

const memberBios = { 'phil': 'Phil is a Systems Architect with core strengths in technology, product vision, and execution. He has a successful track record developing key innovations in display, multimedia, gaming (Xbox), video, augmented reality (Hololens), servers, and wireless power.He has had multiple successes carrying projects from proposal through to product leveraging experience gained in both hardware and software architecture roles.' }  

const memberMoreBios = { 'phil': 'Phil has also executed projects that depended on successful inter-company and inter-organizational collaboration. He has been granted 38 separate U.S. patents. He is a recipient of three corporate recognition awards. Phil earned a Masters of Engineering from McGill University in association with the National Research Council of Canada’s Industrial Materials Institute.'}

class Team extends Component {
  constructor(props) { 
    super(props)
    this.state = { 
                   memberShow: { 'phil': 0, },
                 }
    this.memberShowMore = this.memberShowMore.bind(this) 
  }
  
  memberShowMore(e, member) {
    e.preventDefault()
    this.setState({memberShow: { ...this.state.memberShow, [member]: 1}})  
  }

  render() {
     
    return (
        <Fragment>
        <SVGSprites />
        <Header headerCn={this.props.headerCn}/>
        <main className="team" role="main">
        <MainTitle />
        <section className="aqr-team-members">
        <div className="aqr-member">
        <h3>Phil Swan</h3>
        <img className="aqr-member-headshot" title="Phil Swan" alt="a small portrait of phil swan" src="/phil.webp" /> 
        <h4>Founder</h4>
        <p>{memberBios['phil']}</p>
        { this.state.memberShow['phil'] ? 
         <p>{memberMoreBios['phil']}</p>
         :
        <button className="aqr-read-button" onClick={(e) => this.memberShowMore(e, 'phil')}>Read More <span className="visually-hidden">about Phil Swan</span></button>
        }
        </div>
        </section>
        </main> 
        <footer role="contentinfo">
        </footer>
        </Fragment>
    )
  }
}

export default Team 
