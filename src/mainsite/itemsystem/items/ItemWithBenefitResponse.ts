import { ItemResponseDto } from '~/mainsite/itemsystem/items';

export class ItemWithBenefitResponseDto extends ItemResponseDto {
    /** The benefits associated with equipping the item */
    benefits: string[];
}
