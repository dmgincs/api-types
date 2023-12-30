/* eslint-disable max-classes-per-file */

export class ProfileDataResponseDto {
    /** The ID of the member */
    member_id: number;

    /** The name of the member */
    member_name: string;

    /** The current amount of REP for the member */
    member_reputation: number;

    /** The seo name of the member */
    member_seo_name: string;

    /** The link to the member\s profile image */
    profile_photo: string;

    /** The group ID of the member */
    member_group_id: number;

    /** `Whether the member is an initiate that joined in the last ${NewInitiateActivitySettings.NEW_INITIATE_DAYS} days` */
    is_new_initiate: boolean;

    /** The country code of the member */
    member_country: string;

    /** The primary game of the member */
    member_primary_game: string;

    /** The secondary game of the member */
    member_secondary_game: string;

    /** The house of the member */
    house: string;

    /** The division of the member */
    division: string;

    /** The order of the member */
    order: string;

    /** Whether the member is not assigned to a division */
    unassigned: boolean;

    /** Whether the member has an EHL */
    has_hosting_license: boolean;

    /** The divisional team of the member */
    member_team: string;

    /** The divisional position of the member */
    member_position: string;

    /** The position of the member */
    member_position_title: string;

    /** The competitive role of the member */
    member_comp_role: string;

    /** The cohort of the member */
    member_cohort: string;

    /** The region of the member */
    member_region: string;

    /** The vanguard multiplier of the member */
    member_vanguard: string | null;

    /** The member ID of the member that recruiter the member */
    recruiter_member_id: number | null;

    /** The discord name of the member */
    discord_name: string;

    /** The formatted link of the member including a link and colouring */
    member_formatted_link: string;

    /** The discord ID of the member\s account */
    discord_id: string;

    /** The date the member joined */
    join_date: Date | null;

    /** Whether the member is a coach */
    is_coach: boolean;

    /** Whether the member has an EHL */
    has_ehl: boolean;

    /** Whether the member is a trusted host */
    is_trusted_host: boolean;
}

export class ProfileDataDro {

    members: {
        [memberID: number]: ProfileDataResponseDto;
    };
}
