import React from 'react'
//Styles
import './App.css'
//Pages
import Fyp from './pages/Fyp';
import Add from './pages/Add';
import LoginAndSignUp from './pages/LoginAndSignUp';
//Routes
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
    <div className="App">
      <Routes>
        {/* Routes the pages */}
        <Route path='/' element={<><LoginAndSignUp /></>}></Route>
        <Route path='/feed' element={<Fyp />}></Route>
        <Route path='/add' element={<Add />}></Route>
      </Routes>
    </div>
    <br/>
    </>
  )
}

export default App