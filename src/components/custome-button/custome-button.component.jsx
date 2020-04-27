import React from 'react';

import './custome-button.styles.scss';

const CustomeButton = ({children, ...otherProps}) => (
    <button className='custome-button' {...otherProps}>
        {children}
    </button>
)

export default CustomeButton;