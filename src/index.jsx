import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

import Home from './pages/Home/index';
import APropos from './pages/A-Propos/index';
import FicheLogement from './pages/Fiche-Logement/index';
import Error404 from './pages/Page-Erreur-404/index';

import Footer from "./composants/Footer/footer";
import Header from "./composants/Header/header";

import "./main.scss"

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
  
  <Router>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} ></Route>
      <Route path='/A-Propos' element={<APropos />} ></Route>
      <Route path='/annonces/:id' element={<FicheLogement />} ></Route>
      <Route path='*' element={<Error404 />} ></Route>
    </Routes>
    <Footer />
  </Router>
  
  </React.StrictMode>
  
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
