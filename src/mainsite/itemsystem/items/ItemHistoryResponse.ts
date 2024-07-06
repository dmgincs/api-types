import { ItemRecordStatus } from '~/types/mainsite/ItemRecordStatus';

export class ItemHistoryResponseDto {
    /** The ID of the record */
    record_id: number;

    /** The ID of the inventory item */
    inventory_item_id: number;

    /** The ID of the item */
    item_id: number;

    /** The ID of the member */
    member_id: number;

    /** The status of the item */
    status: ItemRecordStatus;

    text_status: keyof typeof ItemRecordStatus;

    /** The date at which the item was obtained */
    inserted_date: Date;

    /** The date at which the item was last updated */
    last_updated: Date;

    /** The reason why the item was obtained */
    obtained_reason: string;

    /** The name of the member */
    member_name: string;

    /** The seo name of the member */
    member_seo_name: string;
}
