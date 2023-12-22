
export class GetEventHistoryResponseDto {
    /** The ID of the event that was changed */
    event_id: number;

    /** The ID of the member who made the change */
    member_id: number;

    /** The actual change that was made */
    edit: Record<string, { old: string | number | boolean; new: string | number | boolean }>;

    /** The date of when the change was made */
    edit_date: Date;
}
