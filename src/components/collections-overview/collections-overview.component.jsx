import React from 'react';
import { useSelector } from 'react-redux';

import CollectionPreview from '../preview-collection/collection-preview.component';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import { CollectionsOverviewContainer } from './collections-overview.styles';

const CollectionsOverview = () => {
    const collections = useSelector(selectCollectionsForPreview);

    return (
        <CollectionsOverviewContainer>
            {collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))}
        </CollectionsOverviewContainer>
    );
};

export default CollectionsOverview;