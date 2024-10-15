
export class BoostedDivisionsDataResponseDto {
    /** Boost tier */
    boost_tier: number | null;

    /** Number of boosts required */
    boosts_required: number | null;

    /** Date when boost is available */
    boost_left: string | null;

    /** Array of boosting members */
    boosting_members: number[] | null;

    /** Boost percentage */
    boost_percentage: number | null;
}
