/* eslint-disable max-classes-per-file */

export class XpBoostNameDto {
    /** The names of the boosts that are active. */
    boosts: string[];

    /** The total boost value as a string. */
    total_boost: string;

    /** The total boost value as a number. */
    total_boost_value: number;
}

export class XpBoostNamesResponseDto {
    /** Boost applied to all categories */
    global: XpBoostNameDto;

    /** Boost applied to leadership category */
    leadership: XpBoostNameDto;

    /** Boost applied to casual attendance category */
    casual_attendance: XpBoostNameDto;

    /** Boost applied to competitive attendance category */
    comp_attendance: XpBoostNameDto;

    /** Boost applied to twitch attendance category */
    twitch_attendance: XpBoostNameDto;

    /** Boost applied to hosting category */
    hosting: XpBoostNameDto;

    /** Boost applied to discord category */
    discord: XpBoostNameDto;

    /** Boost applied to recruiting category */
    recruiting: XpBoostNameDto;

    /** Boost applied to crafting category */
    crafting: XpBoostNameDto;
}
