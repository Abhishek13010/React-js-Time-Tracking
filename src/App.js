import logo from './logo.svg';
import './App.css';
import { Home } from './components/Home';

import {Props1} from './components/Props1'
import { Navbar } from './components/Navbar';
import {ApiDemo} from './api/ApiDemo'
import { SimpleFormValidation } from './components/SimpleFormValidation';
import { ApiDemo3 } from './api/ApiDemo3';
import { Route, Routes } from 'react-router-dom';
import React from 'react';
import { UpdateUsers } from './components/UpdateUsers';
import { DeleteData } from './api/DeleteData';
import { SignUp } from './components/SignUp';
import { SignIn } from './components/SignIn';
import { Profile } from './components/Profile';
import { Project } from './components/Project';
import { Common } from './components/Common';





function App() {

  var title = "title 1"
  var name = "Abhishek"

  const demo = () =>{
    console.log("Demo Called...")
  }

  return (
    <div>
      <React.Fragment>
      {/* <SimpleFormValidation/> */}
      {/* <ApiDemo/> */}
      {/* <ApiDemo3/> */}
      {/* <SignUp/> */}
      {/* <SignIn/> */}

      {/* <Navbar/> */}
      {/* <Home/> */}
      {/* <Common/> */}


      {/* <Props1 title={title} name ={name} demo = {demo}/> */}

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Routes>

        <Route path='/table/delete/:id' element={<DeleteData/>}/>
        <Route path='/table/update/:id' element={<UpdateUsers/>}/>
        <Route path='/' element={<Navbar/>}/>
        <Route path='/signin' element={<SignIn/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/project' element={<Project/>}/>
        <Route path='/dashboard' element={<Home/>}/>
      </Routes>
   
    </React.Fragment>
    </div>
  );
}

export default App;
