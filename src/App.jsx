import { useState } from 'react'
import NavMenu from './components/NavBar'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Projects from './pages/Projects'
import './App.css'

export default function App() {
  return (
    <>
      <Router>
        <NavMenu />
        <Routes>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/projects" element={<Projects />}></Route> 
          <Route path="/" element={<Home />}></Route>
        </Routes>

      </Router>
    </>
  );
}
