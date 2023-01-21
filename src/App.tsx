import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/home/home";
import About from './pages/about/about';
import Project from './pages/project/project';
import Learn from './pages/learn/learn';

function App() {
  return (
    <div className="App bg-dark text-white">
      <Router>
        <Routes>
          <Route path='/' element={ <Home/>}/>
          <Route path='/projetos' element={ <Project/>}/>
          <Route path='/estudos' element={ <Learn/>}/>
          <Route path='/sobre' element={ <About/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
