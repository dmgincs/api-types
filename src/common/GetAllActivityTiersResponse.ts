/* eslint-disable max-classes-per-file */

export class GetAllActivityTiersTier {
    /** Activity tier name */
    name: string;

    /** XP needed to reach this activity tier */
    xp_needed: number;

    /** The color associated with this activity tier */
    color: string;

    /** The benefits associated with this activity tier */
    benefits: readonly string[];
}

export class GetAllActivityTiersResponseDto {
    /** All activity tiers */
    data: GetAllActivityTiersTier[];
}
