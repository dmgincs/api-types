
export class IssueAwardRequestDto {

    /** The ID of the award to issue */
    award_id: number;

    /** The ID of the member to issue the award to */
    member_id: number;

    /** The description of the award */
    description: string;
}
