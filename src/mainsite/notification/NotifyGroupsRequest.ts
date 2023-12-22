import { MemberRanks } from '~/constants/MemberRanks';

export class NotifyGroupsRequestDto {
    /** The groups to notify */

    groups: MemberRanks[];

    message: string;
}
