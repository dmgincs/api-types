
export class GetIPSStrikesResponseDto {
    /** The reason of why the member received the strike */
    content: string;

    /** The timestamp at which the strike was issued */
    date: string;

    /** The ID of the member */
    memberId: number;

    /** The ID of the issuer */
    issuerId: number;

    /** The amount of points the member received for the strike */
    points: number | null;

    /** The content for moderators */
    modContent: string | null;

    /** The displayed reason for the strike */
    reason: string;

    /** The date at which the strike will expire */
    expireDate: string | null;

    /** Whether the strike was acknowledged by the member */
    acknowledged: boolean;
}
