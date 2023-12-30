/* eslint-disable max-classes-per-file */
import { DivisionPositions } from '~/constants/MemberPositions';
import { ProfileDataResponseDto } from './ProfileDataResponse';

export class DivisionLeadersResponse {
    /** The division leader\s profile data */
    division_leader: ProfileDataResponseDto | null;

    /** The division vice\s profile data */
    division_vice: ProfileDataResponseDto | null;
}

export class GetDivisionLeadersResponseDto {
    [divisionName: string]: DivisionLeadersResponse;
}

export const DivisionPositionToKey: { [key in DivisionPositions]?: string } = {
    [DivisionPositions.DIVISION_LEADER]: 'divisionLeader',
    [DivisionPositions.DIVISION_VICE]: 'divisionVice'
};
