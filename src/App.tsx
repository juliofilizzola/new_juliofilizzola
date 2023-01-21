import React from 'react';
import './App.css';
import Home from "./pages/home/home";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={ <Home/>}/>
          <Route path='/projetos' element={ <Home/>}/>
          <Route path='/sobre' element={ <Home/>}/>
          <Route path='/estudos' element={ <Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
