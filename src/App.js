import React from 'react'
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Doula from './pages/Doula'
import YogaCasal from './pages/YogaCasal'
import ScrollUpButton from './components/ScrollUpButtom';


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
      <ScrollUpButton />
    </>
  );
}

export default App;
