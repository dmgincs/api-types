import { StatusNames } from '~/constants/RepShopItemBuyStatusNames';

export class RepshopItemBuyResponseDto {
    /** The ID of the buy log */
    id: number;

    /** The ID of the member */
    member_id: number;

    status: StatusNames;

    /** The ID of the item which was purchased */
    itemId: number;

    /** The name of the item which was purchased */
    itemName: string;

    /** The amount of REP which was paid for the purchase */
    itemPrice: number;

    /** The date at which the item was bought */
    itemBoughtDate: Date;

    /** The date at which the purchase was processed */
    itemProcessedDate: Date | null;

    /** Whether the item is currently activated for the member */
    itemActive?: boolean;
}
