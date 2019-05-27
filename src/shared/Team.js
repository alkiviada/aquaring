import React, { Component, Fragment } from 'react'
import Header from "./Header";
import MainTitle from "./MainTitle";
import SVGSprites from "./SVGSprites";

const memberBios = { 'phil': 'Phil is a Systems Architect with core strengths in technology, product vision, and execution. He has a successful track record developing key innovations in display, multimedia, gaming (Xbox), video, augmented reality (Hololens), servers, and wireless power. He has had multiple successes carrying projects from proposal through to product leveraging experience gained in both hardware and software architecture roles.',
                     'lena': 'Elena analyzes the economic aspects of AquaRing Energy projects by modeling the company’s profitability under different engineering specifications and market conditions. She has a PhD in Economics from Rutgers, and has 10+ years’ background in Econometrics and research in migration and labor economics.' }  

const memberMoreBios = { 'phil': 'Phil has also executed projects that depended on successful inter-company and inter-organizational collaboration. He has been granted 38 separate U.S. patents. He is a recipient of three corporate recognition awards. Phil earned a Masters of Engineering from McGill University in association with the National Research Council of Canada’s Industrial Materials Institute.',
  'lena': 'Elena is involved in building partnerships and collaborations with universities, research centers and laboratories.'}

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
        <div className="aqr-member">
        <h3>Elena Stolpovsky</h3>
        <img className="aqr-member-headshot" title="Elena Stolpovsky" alt="a small portrait of Elena Stolpovsky" src="/lena.jpg" /> 
        <h4>Energy Economist</h4>
        <p>{memberBios['lena']}</p>
        { this.state.memberShow['lena'] ? 
         <p>{memberMoreBios['lena']}</p>
         :
        <button className="aqr-read-button" onClick={(e) => this.memberShowMore(e, 'lena')}>Read More <span className="visually-hidden">about Elena Stolpovsky</span></button>
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
