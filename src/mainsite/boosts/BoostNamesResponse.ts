/* eslint-disable max-classes-per-file */

export class BoostNameDto {
    /** The names of the boosts that are active. */
    boosts: string[];

    /** The total boost value as a string. */
    total_boost: string;

    /** The total boost value as a number. */
    total_boost_value: number;
}

export class XpBoostNamesDto {
    /** Boost applied to all categories */
    global: BoostNameDto;

    /** Boost applied to leadership category */
    leadership: BoostNameDto;

    /** Boost applied to casual attendance category */
    casual_attendance: BoostNameDto;

    /** Boost applied to competitive attendance category */
    comp_attendance: BoostNameDto;

    /** Boost applied to hosting category */
    hosting: BoostNameDto;

    /** Boost applied to discord category */
    discord: BoostNameDto;

    /** Boost applied to recruiting category */
    recruiting: BoostNameDto;

    /** Boost applied to crafting category */
    crafting: BoostNameDto;

    /** Boost applied to prestige category */
    prestige: BoostNameDto;
}

export class BoostNamesResponseDto {
    /** Boost applied when earning REP from activity. */
    rep: BoostNameDto;

    /** Object containing all XP Boosts that apply to the member. */
    xp: XpBoostNamesDto;
}
