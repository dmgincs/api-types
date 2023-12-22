
export class EquippedInventoryResponseDto {
    /** Member ID */
    member_id: number;

    /** Inventory size */
    size: number;

    /** Number of equippable slots */
    equippableSlots: number;

    /** Equipped cape item ID */
    equippedCapeItemId?: number | null;

    /** Equipped chest item ID */
    equippedChestItemId?: number | null;

    /** Equipped legs item ID */
    equippedLegsItemId?: number | null;

    /** Equipped weapon item ID */
    equippedWeaponItemId?: number | null;

    /** Equipped trinket 1 item ID */
    equippedTrinket1ItemId?: number | null;

    /** Equipped trinket 2 item ID */
    equippedTrinket2ItemId?: number | null;
}
