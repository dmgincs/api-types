/* eslint-disable spellcheck/spell-checker */
import { ItemPackResponseDto } from '~/mainsite/itemsystem/items';

export class ItemPackWithBenefitResponseDto extends ItemPackResponseDto {
    /** The benefits associated with equipping the item */
    benefits: string[];
}
