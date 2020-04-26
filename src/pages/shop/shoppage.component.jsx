import React, { Component } from 'react';
import CollectionsPreview from '../../components/collections-preview/collections-preview.component';

import SHOP_DATA from './shop.data';

class ShopPage extends Component {
    constructor(props){
        super(props)
        
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const { collections } = this.state
        return(
            <div>
                <h2>Shop Page</h2>
                {
                    collections.map(({id, ...otherCollectionsProps}) => {
                    return(
                        <div key={id} >
                            <CollectionsPreview {...otherCollectionsProps}/>
                        </div>
                    );
                })}
                
            </div>
        );
    }
}

export default ShopPage;