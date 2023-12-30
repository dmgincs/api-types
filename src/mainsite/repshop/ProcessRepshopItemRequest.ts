import { StatusNames } from '~/constants/RepShopItemBuyStatusNames';

export class ProcessRepshopItemRequestDto {

    /** The ID of the purchase */
    purchase_id: number;

    /** The status of the purchase */

    status: StatusNames;
}
