import React, { Fragment, useEffect } from 'react';
import './styles/style.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './components/layout/Navbar';
import { HomePage } from './components/layout/HomePage';
import { Login } from './components/auth/Login';
import { Register } from './components/auth/Register';
import Alert from './components/layout/Alert';
import { setAuthToken } from './service/utilService';
import { store } from './store/store';
import { getUserAuthenticated } from './store/features/authSlice';
import { useDispatch } from 'react-redux';

if (localStorage.token) setAuthToken(localStorage.token);

const App = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log('hey hey');
    // store.dispatch(getUserAuthenticated());
    dispatch(getUserAuthenticated());
  }, [dispatch]);
  return (
    <Router>
      <Fragment>
        <Navbar />
        <Alert />
        <Routes>
          <Route exact path="/*" element={<HomePage />} />
          <Route path="/register/*" element={<Register />} />
          <Route path="/login/*" element={<Login />} />
        </Routes>

      </Fragment>;
    </Router>
  );
};

export default App;
