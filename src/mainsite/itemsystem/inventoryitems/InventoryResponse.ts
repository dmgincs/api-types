
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

    /** How many of the item are in the stack */
    quantity: number;

    /** The list of all inventory item IDs in the inventory matching this item ID */
    inventory_item_ids: number[];
}
