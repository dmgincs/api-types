type LevelKeys = 'leadership' | 'casual_attendance' | 'comp_attendance' | 'twitch_attendance' | 'hosting' | 'discord' | 'recruiting' | 'crafting';

export type MemberLevelResponse = Record<LevelKeys, {
    category_id: number;
    category_name: string;
    category_xp: number;
    category_level: number;
    next_level_xp: number;
    current_level_xp: number;
    entities_left: number;
} | number> & {
    totalLevel: number;
};
