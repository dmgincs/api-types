import { ItemResponseDto } from '~/mainsite/itemsystem/items';

export class EquippedItemsResponse {
    [memberId: string]: ItemResponseDto[];
}

