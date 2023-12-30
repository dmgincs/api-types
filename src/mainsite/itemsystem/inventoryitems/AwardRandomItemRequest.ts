
export class AwardRandomItemRequestDto {

    /** The member ID */
    member_id: number;

    /** The base percentage */

    base_percentage?: number = 100;

    /** The reason for the item */

    reason?: string;
}
