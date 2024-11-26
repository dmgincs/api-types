import { DailyItemSlot } from '~/constants/DailyItemSlotDropRates';
import { ItemResponseDto } from '../../itemsystem/items/dto';

export class DailyItemResponseDto {
    /** The item itself */
    item: ItemResponseDto;

    /** The item slot name */
    slot: DailyItemSlot;

    /** The day during which an item can be bought */
    day: Date;
}
