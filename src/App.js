import React from 'react'
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Doula from './pages/Doula'
import YogaCasal from './pages/YogaCasal'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/yogacasal' element={<YogaCasal/>}/>
          <Route path='/doula' element={<Doula/>}/>
        </Routes>  
      </Router>
    </>
  );
}

export default App;
