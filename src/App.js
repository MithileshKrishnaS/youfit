import './App.css';
import Home from './components/Home';
import Each from './components/Each';
import {BrowserRouter, Route}from 'react-router-dom';
import { Routes } from 'react-router';
import { useState } from 'react';

var a='wkfn'
function App() {

  const[index,setIndex]=useState();

  const handleIndex=(data)=>
  {
    setIndex(data)
  }

  return (
    <div className="App">
      <div className="nav">
        {/* <img src={logo1}></img> */}
        <div className='nav-left'>
          <i class="fas fa-dumbbell fa-4x grad"></i>
          <span className="grad">Youfit</span>
        </div>
      </div>     
       <BrowserRouter>
          <Routes>
            <Route path="/youfit" exact  element={<Home data={handleIndex}></Home>}></Route>
            <Route path="/each/:id" exact element={<Each data={index}></Each>}></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
