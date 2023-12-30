/* eslint-disable no-restricted-imports */
import { MemberRanks } from '~/constants/MemberRanks';

export class AwayHistoryResponseDto {
    /** History ID */
    history_id: number;

    /** Member ID */
    member_id: number;

    /** Start date and time */
    start: Date;

    /** End date and time */
    end: Date;

    /** Previous group ID */
    previous_group_id: number | null;

    /** Status */
    status: number;

    /** Last updated timestamp */
    last_updated: Date;

    /** Previous secondary groups */
    previous_secondary_groups: MemberRanks[] | null;
}
