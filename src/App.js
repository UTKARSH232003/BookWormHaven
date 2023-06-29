import React, { Component } from 'react'
import AllCards from './components/AllCards';
import Navbar from './components/Navbar'
import Typography from './components/Typography';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Typography/>
        <AllCards/>
      </div>
    )
  }
}
