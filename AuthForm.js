import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from './logo.png';
import './AuthForm.css';
import HeaderImage from './HeaderImage';
import ExploreAuth from './ExploreAuth';

import SocialButtons from './SocialButtons';
import SignInForm from './SignInForm.js';
import SignUpForm from './SignUpForm';

const AuthForm = () => {
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [rememberPassword, setRememberPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const toggleRememberPassword = () => {
    setRememberPassword(!rememberPassword);
  };

  return (
    <div className="auth-container">
      <HeaderImage src={Logo} />
      <ExploreAuth isSignIn={isSignIn} setIsSignIn={setIsSignIn} />
      <SocialButtons isSignIn={isSignIn} />
      <div className="form-container">
        {isSignIn ? (
          <SignInForm 
            passwordVisible={passwordVisible}
            togglePasswordVisibility={togglePasswordVisibility}
            rememberPassword={rememberPassword}
            toggleRememberPassword={toggleRememberPassword}
            navigate={navigate}
          />
        ) : (
          <SignUpForm 
            passwordVisible={passwordVisible}
            togglePasswordVisibility={togglePasswordVisibility}
            rememberPassword={rememberPassword}
            toggleRememberPassword={toggleRememberPassword}
            navigate={navigate}
          />
        )}
      </div>
      <div className='all'>
        By creating an account, you agree to our Terms of Service and Privacy & Cookie Statement.
      </div>
    </div>
  );
};

export default AuthForm;
