import React from 'react';
import { BrowserRouter as Router,Route ,Routes } from 'react-router-dom';
import SplashScreen from "./SplashScreen";
import AuthForm from './AuthForm';
import ForgotPassword from './ForgotPassword';
import Success from './Success';
import EmailVerify from './EmailVerify';

import Welcome from './Welcome.js';
import ResetPassword from './ResetPassword';
import PasswordUpdate from './PasswordUpdate.js';
import PasswordCongrat from './PasswordCongrat.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import './Details.css';

const Home = () => {
  return (
    <div class="details-container">
      <SplashScreen/>
      <AuthForm/>
  </div>

  );
};

const Details = () => {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/ForgotPassword' element={<ForgotPassword />} />
        <Route path='/Success' element={<Success />} />
        <Route path='/EmailVerify' element={<EmailVerify />} />
        <Route path='/Welcome' element={<Welcome />} />
        <Route path='/ResetPassword' element={<ResetPassword/>} />
        <Route path='/PasswordUpdate' element={<PasswordUpdate/>} />
        <Route path='/PasswordCongrat' element={<PasswordCongrat/>} />
      </Routes>
    </Router>
  );
};

export default Details;
