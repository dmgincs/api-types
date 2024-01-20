import { ItemResponseDto } from './ItemResponse';

export class ItemWithBenefitResponseDto extends ItemResponseDto {
    /** The benefits associated with equipping the item */
    benefits: string[];
}
