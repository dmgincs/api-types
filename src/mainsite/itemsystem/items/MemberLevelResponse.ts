
type LevelKeys = 'leadership' | 'casual_attendance' | 'comp_attendance' | 'hosting' | 'discord' | 'recruiting' | 'crafting';

export interface MemberLevelResponseValue {
    category_id: number;
    category_name: string;
    category_xp: number;
    category_level: number;
    next_level_xp: number;
    current_level_xp: number;
    entities_left: number;
}

export type MemberLevelResponse = Record<LevelKeys, MemberLevelResponseValue> & {
    totalLevel: number;
};
