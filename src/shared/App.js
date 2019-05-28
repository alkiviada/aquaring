import React, { Component } from 'react'
import { Link, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Team from "./Team";
import JoinUs from "./JoinUs";

class App extends Component {
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
      <Switch>
        <Route path="/team" render={(props) => <Team {...props} headerCn={this.state.headerCn} />} />
        <Route path="/join" render={(props) => <JoinUs {...props} headerCn={this.state.headerCn} />} />
        <Route path="/" render={(props) => <Home {...props} headerCn={this.state.headerCn} />} />
      </Switch>
    )
  }
}

export default App
