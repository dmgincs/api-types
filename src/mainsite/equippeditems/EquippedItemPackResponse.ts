import { ItemPackWithBenefitResponseDto } from '../../itemsystem/items/dto';

export class EquippedItemPackResponseDto {

    pack: ItemPackWithBenefitResponseDto;

    /** Whether the full pack is equipped by the member */
    fullyEquipped: boolean;

    /** The amount of items from the pack which have been equipped */
    equippedCount: number;

    /** The total amount of items required to be equipped for the pack to be fully equipped */
    requiredEquippedCount: number;
}
