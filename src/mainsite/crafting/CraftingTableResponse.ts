
export class CraftingTableResponseDto {
    /** The member id of the user */
    member_id: number;

    /** The table number */
    table_number: number;

    /** The recipe id */
    recipe_id: number | null;

    /** The item one id */
    item_one_id: number;

    /** The item two id */
    item_two_id: number | null;

    /** The item three id */
    item_three_id: number | null;

    /** The xp gained */
    xp_gained: number;
}
