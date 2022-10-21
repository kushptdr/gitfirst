import React, { Component } from 'react';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Home from './components/Home';
// import Increment from './components/Increment';
// import Employee from './components/Employee'
// import Person from './components/Person';
// import Sum from './components/Sum';

 import Dropdown from './components/Dropdown'
// import Pagination from './components/Pagination';
import Search from './components/Search';
import Table from './components/Table';


export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
        <Routes>
          {/* <Route path='/increment' element={<Increment/>}/> 
          <Route path='/sum' element={<Sum/>}/>
          <Route path='/emplyee' element={<Employee/>}/>
          <Route path='/person' element={<Person/>}/>
          <Route path='/search' element={<Srarch/>}/> */}
           <Route path='/' element={<Home/>}/>
          <Route path='/employee' element={<Table/>}/>
           {/* <Route path='/from' element={<From/>}/>  */}
           <Route path='/employee/:id' element={<Home/>}/>
           {/* <Route path='/page' element={<Pagination/>}/> */}
           <Route path='/search' element={<Search/>}/>
           <Route path='/drop' element={<Dropdown/>}/>
        </Routes>  
        </div>
      </Router>
    )
  }
}
