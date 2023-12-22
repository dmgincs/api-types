/* eslint-disable max-classes-per-file */

export class GetMemberCountsResponseObjectDto {
    /** The total count of members */
    total_count: number;

    /** Total amount of members that have more than 0 rep earned during timeFrame */
    total_avg_count: number;

    /** Total amount of members on away during the timeFrame */
    away_count: number;

    /** Total amount of members unassigned during the timeFrame */
    unassigned_count: number;

    /** Total amount of members on probation during the timeFrame */
    probation_count: number;

    /** Total amount of hl,hv,dl,dv officers during the timeFrame */
    officer_count: number;

    /** Total amount of tl\s during the timeFrame */
    tl_count: number;

    /** Total amount of members with an EHL during the timeFrame */
    ehl_count: number;

    /** Total amount of vanguard members during the timeFrame */
    vanguard_count: number;

    /** Total amount of active members during the timeFrame */
    total_active: number;
}

export class GetMemberCountsResponseDto {
    [key: string]: GetMemberCountsResponseObjectDto;
}
