
export class UpdateMemberProfileRequestDto {

    /** The member ID to update */

    memberId: number;

    /** The member name to update */

    name: string;

    /** The member group ID to update */

    memberGroupId: number;

    /** The member group name to update */

    memberSecondaryGroups: string[];

    /** The member house to update */

    house: string;

    /** The member division to update */

    division: string;

    /** The member team to update */

    team: string;

    /** The member order to update */

    order: string;

    /** The member division position to update */

    divisionPosition: string;

    /** The member position to update */

    position: string;

    /** set true or false for member having EHL */

    ehl: boolean;

    /** set true or false for member being coach */

    coach: boolean;

    /** set true or false for member being a trusted Host */

    trustedHost: boolean;

    /** set true or false for member being a guest instructor */

    guestInstructor: boolean;

    /** The members manager to update */

    managerMemberId: number;

    /** The members recruiter to update */

    recruiterMemberId: number;

    /** The members region to update */

    region: string;

    /** The members cohort to update */

    cohort: string;

    /** The members vanguard to update */

    vanguard: string;

    /** set true or false for member being assigned */

    assigned: boolean;

}
