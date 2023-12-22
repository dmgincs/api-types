
export class MemberNoteResponseDto {
    /** The note ID */
    memberNoteId: number;

    /** The ID of the member who received the note */
    memberId: number;

    /** The content of the note */
    content: string;

    /** The ID of the member who issued the note */
    issuedBy: number;

    /** The date at which the note was issued */
    issuedAt: string;

    /** The ID of the member who deleted the note */
    deletedBy?: number;

    /** The date at which the note was deleted */
    deletedAt?: string;
}
