
export class DailyActivityCalculationRequestDto {

    /** The ID of the member to calculate the daily activity log for. */
    member_id: number | null;

    /** The date to calculate the daily activity log(s) for. */
    day: string;
}
