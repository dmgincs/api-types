import { BattlepassTierResponseDto } from './BattlepassTierResponse';
import { MemberBattlepassResponseDto } from './MemberBattlepassResponse';

export class ExtendedMemberBattlepassResponseDto {
    /** The start date of the battlepass */
    start: Date;

    /** The end date of the battlepass */
    end: Date;

    /** The cost of the battlepass */
    cost: number;

    /** The tiers of the battlepass */
    tiers: BattlepassTierResponseDto[];

    /** The members current battlepass tier */
    current_tier: MemberBattlepassResponseDto | null;

    /** Whether the member has completed the battlepass or not */
    complete: boolean;
}
