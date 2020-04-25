import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imageURL, size, history, match, linkURL }) => (
    <div className={`${size} menu-item`}>
   
        <div style={{backgroundImage : `url(${imageURL})`}} className='background-image'>
        </div>

        <div className="content" onClick={() => history.push(`${match.url}${linkURL}`)}>
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">Shop Now</span>
        </div>
    </div>
);

export default withRouter(MenuItem);