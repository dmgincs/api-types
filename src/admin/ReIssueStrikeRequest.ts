
export class ReIssueStrikeRequestDto {

    /** The ID of the old issued strike */
    issued_strike_id: number;

    /** The ID of the strike to issue */
    strike_id: number;

    /** The ID of the member who the strike should be issued to */
    member_id: number;

    /** The description of why the member is receiving the strike */
    content: string;

    /** The content for moderators */
    moderator_content?: string | undefined;
}
