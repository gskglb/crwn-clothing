import React from 'react';
import CollectionItem  from '../collections-item/collections-item.component';

import './collections-preview.styles.scss';

const CollectionsPreview = ({title, items}) => (
    <div className="collection-preview">
        <div className='title'>{title}</div>
        <div className='preview'>
        {
            items.filter((item, idx) => (idx < 4))
            .map(({id, ...otherItemProps}) => (
                <CollectionItem key = {id} {...otherItemProps} />
            ))
        }
        </div>
    </div>
)

export default CollectionsPreview;