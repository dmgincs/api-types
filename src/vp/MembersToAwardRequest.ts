
export class MembersToAwardRequestDto {
    /** The member names to award in Array format */

    memberNames: string[];

    /** The award ID to award */

    awardId: number;

    /** The reason for the award */

    reason: string;
}
