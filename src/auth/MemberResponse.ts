import { MemberRanks } from '~/constants/MemberRanks';

export class MemberResponseDto {
    /** The forum name of the member */
    forum_name: string;

    /** The link to the member\s profile image */
    profile_image: string;

    /** The ID of the member */
    member_id: number;

    /** The current amount of REP for the member */
    current_rep: number;

    /** The discord snowflake of the member */
    discord_id: string;

    /** The position name of the member */
    position: string;

    /** The group ID of the member */
    group_id: MemberRanks;

    /** The ID of the linked device */
    mobile_device_id: number | undefined;

    /** The name of the member, when ghosting someone else */
    original_name: string | undefined;

    /** Whether the member is an admin */
    is_admin: boolean;
}
