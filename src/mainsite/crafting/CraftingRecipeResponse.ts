
export class CraftingRecipeResponseDto {
    /** The ID of the recipe */
    id: number;

    /** The ID of the item that is gained from the recipe */
    item_gain_id: number;

    /** The ID of the first item that is used in the recipe */
    item_one_id: number;

    /** The ID of the second item that is used in the recipe */
    item_two_id: number | null;

    /** The ID of the third item that is used in the recipe */
    item_three_id: number | null;

    /** The xp required to craft the recipe */
    xp_required: number;

}
