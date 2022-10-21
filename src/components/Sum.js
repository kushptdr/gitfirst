import React, { Component } from 'react'
import Navbar from './layout/Navbar';

export default class Sum extends Component {
  constructor(props){
    super(props);
    this.state={
        num1:"",
        num2:"",
        result:0
    }
      this.sumNumber = this.sumNumber.bind(this);
      }
      sumNumber = ()=>{
        this.setState({result:parseInt(this.state.num1)+ parseInt(this.state.num2)});
       }
       handleInput = (e)=>{
       this.setState({[e.target.name]:e.target.value})
       }

    
  render() {
    const {result}= this.state;
    return (
      <div>
        <Navbar/>
        <input type="text" name='num1' value={this.state.num1}  onChange={this.handleInput}/>
        <input type="text" name='num2' value={this.state.num2} onChange={this.handleInput}/>
        <input type="button" onClick={this.sumNumber} value="Add"/>
        <input type="text" value={result}/>
      </div>
    )
  }
}
