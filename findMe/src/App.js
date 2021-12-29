
import './App.css';
import React, { Component } from 'react';
import Home from './pages/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



class App extends Component {
  render() {
    return (
            <BrowserRouter>
     
              <Route path='/' exact component={Home}></Route>
       
            </BrowserRouter>
      );
  }
}

export default App;