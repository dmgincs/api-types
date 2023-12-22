/* eslint-disable max-classes-per-file */

export class GetDivisionTeamMembersResponseDto {

    /** A map of all houses -> divisions -> teams then member IDs */
    houses: {};

    /** List of member IDs who are not placed in a valid division or team */
    misplaced: number[];
}
