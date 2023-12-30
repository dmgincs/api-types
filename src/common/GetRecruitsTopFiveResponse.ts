
export class GetRecruitsTopFiveResponseDto {
    /** The ID of the member */
    member_id: number;

    /** The link to the member\s profile */
    profile_link: string;

    /** The member name formatted as a link */
    formatted_member_name: string;

    /** The total amount of recruits the member gained this month */
    recruits: number;
}
