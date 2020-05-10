import React from 'react';
import './custom-button.styles.scss';

// Children refers to anything placed in between the component
// i.e. CustomButton's children refers to anything placed inside <CustomButton>--CHILDREN HERE--</CustomButton>
const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => {
  return (
    <button
      className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
