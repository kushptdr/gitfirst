import React, { Component } from 'react'
import Navbar from './layout/Navbar';

export default class App extends Component {
    constructor(){
        super();
        this.state ={
            count:0
        }
    }
  
increament=()=> {
  this.setState({count:this.state.count +1})
}
decreament=()=> {
  this.setState({count:this.state.count -1})
}
render() {
  const {count} = this.state;
    return (
      <div>
        <Navbar/>
        <h1>{count}</h1>
        <input type="button" onClick={this.increament} value="Increment" />
        <input type="button" onClick={this.decreament} value="decreament" />
      </div>
    )
  }
}