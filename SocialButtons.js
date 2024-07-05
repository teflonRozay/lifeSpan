import React from 'react';
import NewGoogle from './Logo_button.jpg';
import NewApple from './pple.png';
import Google from './google_logo.jpg';
import Apple from './Apple_Button.png';


const SocialButtons = ({ isSignIn }) => {
  return (
    <div className="button-toggle-container">
      {isSignIn ? (
        <>
          <button className='social-button'>
            <img src={NewGoogle} alt="Google logo" />
          </button>
          <button className='social-button Apple'>
            <img src={NewApple} alt="Apple logo" />
          </button>
        </>
      ) : (
        <>
          <button className='social-button'>
            <img src={Google} alt="Google logo" />
          </button>
          <button className='social-button Apple'>
            <img src={Apple} alt="Apple logo" />
          </button>
        </>
      )}
    </div>
  );
};

export default SocialButtons;
