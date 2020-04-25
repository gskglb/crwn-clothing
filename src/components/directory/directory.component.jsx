import React, { Component } from 'react';
import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

class Directory extends Component {
    constructor(){
        super();

        this.state = {
            sections : [
                {
                    id : 1,
                    title : 'Hats'
                },
                {
                    id : 2,
                    title : 'Jackets'
                },
                {
                    id : 3,
                    title : 'Sneckers'
                },
                {
                    id : 4,
                    title : 'Women'
                },
                {
                    id : 7,
                    title : 'Men'
                }                                                                
            ]            
        }
    }

    render() {
        return(
            <div className="directory-menu">
                {
                    this.state.sections.map( ({id, title}) => (
                        <MenuItem key={id} title={title} />
                        // <div key={id} className="menu-item">
                        //     <div className="content">
                        //         <h1 className="title">{title}</h1>
                        //         <span className="subtitle">Shop Now</span>
                        //     </div>
                        // </div>
                    ))
                }
            </div>
        );
    }

}

export default Directory;