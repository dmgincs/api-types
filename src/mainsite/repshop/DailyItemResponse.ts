import { ItemResponseDto } from '~/mainsite/itemsystem/items';
import { DailyItemSlot } from '~/types/mainsite/DailyItemSlot';

export class DailyItemResponseDto {
    /** The item itself */
    item: ItemResponseDto;

    /** The item slot name */
    slot: DailyItemSlot;

    /** The day during which an item can be bought */
    day: Date;

    /** If the item was already bought */
    purchased: boolean;
}
