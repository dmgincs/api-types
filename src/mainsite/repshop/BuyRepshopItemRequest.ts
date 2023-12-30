
export class BuyRepshopItemRequestDto {

    /** The ID of the item */
    itemId: number;

    /** The meta data of the brought item */
    metaData: {
        name?: string | null;
    } | null;
}
