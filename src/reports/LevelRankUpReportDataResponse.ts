/* eslint-disable max-classes-per-file */

export class AllMemberLevelResponseDto {
    [memberId: string]: {
        [catName: string]: number;
        total_level: number;
        prev_total_level: number;
    };
}
export class LevelRankUpReportDataResponseDto {
    /** The time frame of the report */
    time_frame: string;

    /** The date of the previous month\s end */
    prev_month_end: string;

    /** The date of the current month\s end */
    this_month_end: string;

    /** Get new level and old level for each member that ranked up */
    rank_ups: AllMemberLevelResponseDto;
}

