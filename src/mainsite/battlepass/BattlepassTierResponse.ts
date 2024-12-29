import { ItemWithBenefitResponseDto } from '~/mainsite/itemsystem/items';

export class BattlepassTierResponseDto {
    /** The benefits associated with equipping the item */
    id: number;

    /** The items rewarded for completing this battlepass tier */
    items: (ItemWithBenefitResponseDto & { quantity: number })[];

    /** The xp required to complete this tier */
    xp_required: number;
}

