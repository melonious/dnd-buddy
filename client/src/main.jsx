import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import App from './App.jsx'
import Header from './Header.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';
import Login from './Login.jsx';
import Signup from './Signup.jsx';
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header/>
      <Routes>
        <Route exact path='/' element={<App/>}></Route>
        <Route exact path='/about' element={<About/>}></Route>
        <Route exact path='/contact' element={<Contact/>}></Route>
        <Route exact path='/login' element={<Login/>}></Route>
        <Route exact path='/signup' element={<Signup/>}></Route>
      </Routes>
    </Router>
  </React.StrictMode>
)
