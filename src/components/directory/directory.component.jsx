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
                    title : 'Hats',
                    imageURL: 'https://i.ibb.co/cvpntL1/hats.png',
                    linkURL : 'shop'
                },
                {
                    id : 2,
                    title : 'Jackets',
                    imageURL: 'https://i.ibb.co/px2tCc3/jackets.png',
                    linkURL : ''

                },
                {
                    id : 3,
                    title : 'Sneackers',
                    imageURL: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    linkURL : ''

                },
                {
                    id : 4,
                    title : 'Women',
                    imageURL: 'https://i.ibb.co/GCCdy8t/womens.png',
                    size: 'large',
                    linkURL : ''

                },
                {
                    id : 5,
                    title : 'Men',
                    imageURL: 'https://i.ibb.co/R70vBrQ/men.png',
                    size: 'large',
                    linkURL : ''
                },
                                                               
            ]            
        }
    }

    render() {
        return(
            <div className="directory-menu">
                {
                    this.state.sections.map( ({id, ...otherSectionProps}) => (
                        <MenuItem key={id} {...otherSectionProps} />
                    ))
                }
            </div>
        );
    }

}

export default Directory;