import React from 'react';
import CollectionsPreview from '../../components/collections-preview/collections-preview.component';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopData } from '../../redux/shopdata/shopdata.selector';

const ShopPage = ({collections}) => (
    <div>
        <h2>Collections</h2>
        {
            collections.map(({id, ...otherCollectionsProps}) => {
                return(
                    <div key={id} >
                        <CollectionsPreview {...otherCollectionsProps}/>
                    </div>
                );
            })
        }
    </div>
) 

const mapStateToProps = createStructuredSelector({
    collections : selectShopData
})

export default connect(mapStateToProps)(ShopPage);