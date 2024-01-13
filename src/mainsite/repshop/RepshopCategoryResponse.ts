/* eslint-disable max-classes-per-file */

export class RepshopSubcategoryDto {
    /** The subcategory ID */
    id: number;

    /** The repshop category ID */
    repshopCategoryId: number;

    /** The title of the subcategory */
    title: string;

    /** The sorting order of the subcategory within the category */
    order: number;
}

export class RepshopCategoryResponseDto {
    /** The category ID */
    id: number;

    /** The title of the category */
    title: string;

    /** The category type */
    type: string;

    /** The image url associated with the category */
    image: string;

    /** The order index of the category */
    order: number;

    /** The style type for visual representation */
    style: string;

    /** The subcategories associated with the category */
    subcategories: RepshopSubcategoryDto[];
}
