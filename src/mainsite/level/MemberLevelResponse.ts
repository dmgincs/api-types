/* eslint-disable max-classes-per-file */

export class MemberLevelCategory {
    /** The ID of the category */
    category_id: number;

    /** The name of the category */
    category_name: string;

    /** The XP of the category */
    category_xp: number;

    /** The level of the category */
    category_level: number;

    /** The XP required to reach the next level */
    next_level_xp: number;

    /** The XP required to reach the current level */
    current_level_xp: number;

    /** The number of entities left to reach the next level */
    entities_left: number;
}

export class MemberLevelResponseDto {
    /** The recruiting category levels */
    recruiting: MemberLevelCategory | number;

    /** The casual category levels */
    casual_attendance: MemberLevelCategory | number;

    /** The comp category levels */
    comp_attendance: MemberLevelCategory | number;

    /** The twitch category levels */
    twitch_attendance: MemberLevelCategory | number;

    /** The hosting category levels */
    hosting: MemberLevelCategory | number;

    /** The discord category levels */
    discord: MemberLevelCategory | number;

    /** The leadership category levels */
    leadership: MemberLevelCategory | number;

    /** The crafting category levels */
    crafting: MemberLevelCategory | number;

    /** The total level of the member */
    totalLevel: number;
}
