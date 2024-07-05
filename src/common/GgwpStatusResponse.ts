
export class GGWPStatusResponseDto {

    /** The amount of months in the current activity requirements streak. */
    current_streak: number;

    /** The amount of concurrent months with passed activity requirements needed to have a full GGWP bar. */
    streak_required: number;
}
