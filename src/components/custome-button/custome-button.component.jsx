import React from 'react';

import './custome-button.styles.scss';

const CustomeButton = ({children, isGoogleSignIn, inverted, ...otherProps}) => (
    <button className={`
            ${inverted ? 'inverted': ''} 
            ${isGoogleSignIn ? 'google-sign-in': ''} 
    custome-button`} {...otherProps}>
        {children}
    </button>
)

export default CustomeButton;