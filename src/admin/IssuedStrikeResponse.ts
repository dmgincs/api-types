/* eslint-disable max-classes-per-file */

export class IssuedStrikeMemberDro {
    /** The ID of the member */
    member_id: number;

    /** The name of the member */
    name: string;

    /** The profile picture URL of the member */
    profile_picture: string;
}

export class IssuedStrikeResponseDro {
    /** The ID of the strike */
    strike_id: number;

    /** The ID of the issued strike */
    issued_strike_id: number;

    /** The member who received the strike */
    member: IssuedStrikeMemberDro;

    /** The amount of points the member received for the strike */
    points: number | null;

    /** The reason why the member received the strike */
    content: string;

    /** The content for moderators */
    moderator_content: string | null;

    /** The member who issued the strike */
    issuer: IssuedStrikeMemberDro;

    /** The date at which the strike was issued */
    issued_at: Date;

    /** The date at which the strike will expire */
    expiry_date: Date | null;

    /** Whether the strike was acknowledged by the member */
    acknowledged: boolean;

    /** The date at which the strike was revoked */
    deleted_at: Date | null;

    /** The ID of the member whom revoked the strike */
    deleted_by: number | null;

    /** Whether the strike can be appealed */
    appealable: boolean | null;
}
