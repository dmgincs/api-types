
export class RepshopItemResponseDto {
    /** The ID of the item */
    id: number;

    /** The name of the item */
    title: string;

    /** The image of the item */
    imageUrl: string;

    /** The price the item can be bought for */
    price: number;

    /** The description of the item */
    description: string | null;

    /** The ID of the category the item belongs to */
    repshopCategoryId: number;

    /** The ID of the subcategory the item belongs to */
    repshopSubcategoryId: number | null;

    /** Whether the item is out of stock */
    outOfStock: boolean;

    /** Whether the item is featured */
    featured: boolean;

    /** The image url of the featured image banner */
    featuredImageUrl: string | null;

    /** Whether the item is selectable after a purchase */
    isSelectable: boolean;

    profileFieldMap: Record<string, unknown>;
}
