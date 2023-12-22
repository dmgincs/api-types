
export class IssuedAwardResponseDto {
    /** The ID of the issued award */
    award_id: number;

    /** The description of the issued award */
    description: string;

    /** The amount of honor points given by the award */
    honor_points: number;

    /** The ID of the member that received the award */
    member_id: number;

    /** The Date at which the award was issued */
    issued_at: Date;

    /** The ID of the member by whom the award was issued */
    issued_by: number;
}
