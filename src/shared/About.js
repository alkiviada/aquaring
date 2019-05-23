import React, { Component } from 'react'

class About extends Component {
  constructor(props) { 
    super(props)
    this.userNameLabelRef = React.createRef()
    this.emailLabelRef = React.createRef()
    this.messageLabelRef = React.createRef()
    this.state = { username: { 'value': '', 'label_cn': 'floating-label' },
                   email: {'value': '', 'label_cn': 'floating-label' }, 
                   message: {'value': '', 'label_cn': 'floating-label' }, 
                 }
    this.inputOrLabel = this.inputOrLabel.bind(this) 
    this.hideLabel = this.hideLabel.bind(this) 
    this.showLabel = this.showLabel.bind(this) 
    this.handleValueChange = this.handleValueChange.bind(this) 
  }

  handleValueChange(e) {
    const key = e.target.id 
    console.log(this.state)
    console.log(key) 
    this.setState({ [key]: { 'label_cn': this.state[key]['label_cn'], 'value': e.target.value } });
  }
  
  hideLabel(e, labelRef) {
    const key = labelRef.current.htmlFor 
    this.setState({ [key]: { 'value': e.target.value, 'label_cn': 'floating-label top-label', } });
  }

  showLabel(e, labelRef) {
    const key = labelRef.current.htmlFor 
    this.setState({ [key]: { 'value': e.target.value, 'label_cn': 'floating-label', } });
  }

  inputOrLabel(e, labelRef) {
    if (e.target.value == "") {
      this.showLabel(e, labelRef);
    } 
    else if (e.target.value != "") {
      this.hideLabel(e, labelRef);
    }
  }

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
           <div className="aqr-input-wrapper">
           <label className={this.state.username.label_cn} htmlFor="username" ref={this.userNameLabelRef} >Name</label>
           <input className="aqr-input" onFocus={(e) => this.hideLabel(e, this.userNameLabelRef)} onInput={(e) => this.inputOrLabel(e, this.userNameLabelRef)} onBlur={(e) => this.inputOrLabel(e, this.userNameLabelRef)} type="text" value={this.state.username.value} id="username" name="username" onChange={this.handleValueChange} />
         </div>
           <div className="aqr-input-wrapper">
           <label className={this.state.email.label_cn} htmlFor="email" ref={this.emailLabelRef}>Email</label>
           <input className="aqr-input" onFocus={(e) => this.hideLabel(e, this.emailLabelRef)} onInput={(e) => this.inputOrLabel(e, this.emailLabelRef)} onBlur={(e) => this.inputOrLabel(e, this.emailLabelRef)} type="email" value={this.state.email.value} id="email" name="email" onChange={this.handleValueChange} />
         </div>
           <div className="aqr-input-wrapper">
           <label className={this.state.message.label_cn} htmlFor="message" ref={this.messageLabelRef}>What you have to say</label>
           <textarea className="aqr-input-textarea" onFocus={(e) => this.hideLabel(e, this.messageLabelRef)} onInput={(e) => this.inputOrLabel(e, this.messageLabelRef)} onBlur={(e) => this.inputOrLabel(e, this.messageLabelRef)} type="message" value={this.state.message.value} id="message" name="message" onChange={this.handleValueChange} />
         </div>
         </form>
         </section>
    )
  }
}

export default About
