import React from 'react';
import './custom-button.styles.scss';

// Children refers to anything placed in between the component
// i.e. CustomButton's children refers to anything placed inside <CustomButton>--CHILDREN HERE--</CustomButton>
const CustomButton = ({
  children,
  isGoogleSignIn,
  inverted,
  ...otherProps
}) => {
  return (
    <button
      className={`${inverted ? 'inverted' : ''} ${
        isGoogleSignIn ? 'google-sign-in' : ''
      } custom-button`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
