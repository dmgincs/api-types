/* eslint-disable no-restricted-imports */

export class InventoryResponseDto {
    /** The inventory item ID */
    inventory_item_id: number;

    /** The member ID */
    member_id: number;

    /** The item ID */
    item_id: number;

    /** The date the item was obtained */
    obtained_at: Date;

    /** Whether the item is hidden */
    hidden?: boolean;

    /** Whether the item is auctioned */
    auctioned?: boolean;

    /** Whether the item is in use */
    in_use: boolean;
}
