import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Search from './components/search-screen/Search'
import Favorites from './components/favorite-screen/favorites'
import About from './components/about-screen/about'

ReactDOM.render(
  <React.StrictMode>
       <Router>
      <Header/>
      <Routes>
        <Route exact path="/" element={<Search />} />
        <Route path="/Favorites" element={<Favorites/>} />
        <Route path="/About" element={<About />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);