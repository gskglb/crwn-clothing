import { createSelector } from 'reselect';

const selectShopdata = (state) => state.shopdata

export const selectShopData = createSelector(
    [selectShopdata],
    (shopData) => shopData.data
)

