import React from 'react';
import CollectionItem  from '../collections-item/collections-item.component';

import './collections-preview.styles.scss';

const CollectionsPreview = ({title, items}) => (
    <div className="collection-preview">
        <div className='title'>{title}</div>
        <div className='preview'>
        {
            items.filter((item, idx) => (idx < 4))
            .map((item) => (
                <CollectionItem key = {item.id} item={item} />
            ))
        }
        </div>
    </div>
)

export default CollectionsPreview;