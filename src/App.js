import React, { Fragment } from 'react';
import './styles/style.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { HomePage } from './components/layout/HomePage';
import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';
// import { HashRouter as Router, Route, Redirect } from "react-router-dom";

const App = () =>
  <Router>
    <Fragment>
      <Navbar />
      <Routes>
        <Route exact path="/*" element={<HomePage />} />
        <Route path="/register/*" element={<Register />} />
        <Route path="/login/*" element={<Login />} />
      </Routes>
    </Fragment>;
  </Router>;

export default App;
