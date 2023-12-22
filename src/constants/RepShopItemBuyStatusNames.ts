import { RepShopItemBuyStatus } from '~/types/mainsite/RepShopItemBuyStatus';

export type StatusNames = 'Cancelled' | 'Pending' | 'Processed';

export const RepShopItemBuyStatusNames: { [key in RepShopItemBuyStatus]: StatusNames } = {
    [RepShopItemBuyStatus.CANCELLED]: 'Cancelled',
    [RepShopItemBuyStatus.PENDING]: 'Pending',
    [RepShopItemBuyStatus.PROCESSED]: 'Processed'
};
