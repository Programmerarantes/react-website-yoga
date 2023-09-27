import React from 'react'
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Doula from './pages/Doula'
import YogaCasal from './pages/YogaCasal'
import ScrollUpButton from './components/ScrollUpButtom';
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop';
import { Analytics } from '@vercel/analytics/react';


function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home />}/>
          <Route path='/yogacasal' element={<YogaCasal/>}/>
          <Route path='/doula' element={<Doula/>}/>
        </Routes>  
      </Router>
      <ScrollUpButton />
      <Footer />
      <Analytics />
    </>
  );
}

export default App;
