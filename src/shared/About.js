import React, { Component } from 'react'

class About extends Component {
  render() {
    return (
         <section className="aqr-about">
         <div className="aqr-section-head-wrapper">
         <svg className="aqr-heading-icon" aria-hidden="true">
           <use xlinkHref="#aqr-about-icon" />
         </svg>
         <h3 className="aqr-section-heading">
           About Us
         </h3>
         </div>
         <p>
         Welcome!

         AquaRing Energy is a startup based in Bellevue, Washington. We are focused on renewable energy and energy storage technology, and providing power to communities worldwide.
We would like you to share in our journey to provide safe, reliable, renewable energy to the world. Please use the form below to let us know you would like to receive our newsletter, or to otherwise get in touch with us. Thank you!
         </p>
         <form className="aqr-form">
           <label class="floating-label label-top" for="username">Name *</label>
           <input onfocus={this.hideLabel()} oninput={this.inputOrLabel()} onBlur={this.inputOrLabel()} aria-required="true" type="text" value={this.state.username} id="firstname" name="firstname">
           <label className="aqr-label" aria-label="Email">
             <input type="email" className="aqr-input" name="email" placeholder="Email" />
             <svg className="aqr-form-icon" aria-hidden="true">
               <use xlinkHref="#aqr-input-icon" />
             </svg>
           </label>
           <label className="aqr-label aqr-textarea-label" aria-label="Message">
             <textarea className="aqr-input-textarea" name="message" />
           </label>
         </form>
         </section>
    )
  }
}

export default About
