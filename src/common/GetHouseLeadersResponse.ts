/* eslint-disable max-classes-per-file */
import { DivisionPositions } from '~/constants/MemberPositions';
import { ProfileDataResponseDto } from './ProfileDataResponse';

export class HouseLeadersResponse {
    /** The house leader\s profile data */
    house_leader: ProfileDataResponseDto | null;

    /** The house vice\s profile data */
    house_vice: ProfileDataResponseDto | null;
}

export class GetHouseLeadersResponseDto {
    [houseName: string]: HouseLeadersResponse;
}

export const HousePositionToKey: { [key in DivisionPositions]?: string } = {
    [DivisionPositions.HOUSE_LEADER]: 'houseLeader',
    [DivisionPositions.HOUSE_VICE]: 'houseVice'
};
