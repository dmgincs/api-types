/* eslint-disable spellcheck/spell-checker */
/* eslint-disable max-classes-per-file */

export class AwayDto {
    /** Away history ID */
    historyId: number;

    /** Member ID */
    memberId: number;

    /** Start date */
    start: string;

    /** End date */
    end: string;

    /** Previous group ID */
    previousGroupId: number;

    /** Status */
    status: number;

    /** Last updated */
    lastUpdated: string;

    /** Previous secondary group IDs */
    previousSecondaryGroup: number[];
}

export class AwayStatusLastSixMonthsDto {
    /** Number of days away */
    days: number;

    /** Maximum number of days away */
    max: number;
}
export class AwayStatusResponseDto {
    /** Active away status */
    activeAway?: AwayDto;

    /** Away status for the last six months */
    lastSixMonths?: AwayStatusLastSixMonthsDto;
}

