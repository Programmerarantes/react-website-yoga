import React from 'react'
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Classes from './pages/Classes'
import About from './pages/About'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/classes' element={<Classes/>}/>
        </Routes>  
      </Router>
    </>
  );
}

export default App;
