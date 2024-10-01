export enum MemberRanks {
    LEADER = 4,
    L8 = 7,
    L7 = 20,
    L6 = 8,
    L5 = 19,
    L4 = 6,
    L3 = 14,
    INITIATE = 10, // L1
    MEMBER = 9, // L2
    ELITE = 11, // L2
    VETERAN = 12, // L2
    SENIOR = 13, // L2
    BOT = 26,
    ACP_SECONDARY = 17,
    COUNCIL = 21,
    GUEST = 2,
    APPLICANT = 3,
    PROBATION = 15,
    AWAY = 16,
    INACTIVE = 18,
}

export const LEVELS: { [key in MemberRanks]?: string } = {
    [MemberRanks.LEADER]: 'L9',
    [MemberRanks.L8]: 'L8',
    [MemberRanks.L7]: 'L7',
    [MemberRanks.L6]: 'L6',
    [MemberRanks.L5]: 'L5',
    [MemberRanks.L4]: 'L4',
    [MemberRanks.L3]: 'L3',
    [MemberRanks.ELITE]: 'L2A',
    [MemberRanks.VETERAN]: 'L2B',
    [MemberRanks.SENIOR]: 'L2C',
    [MemberRanks.MEMBER]: 'L2D',
    [MemberRanks.INITIATE]: 'L1'
};

export const LEVELS_ORDERED = [
    'L1',
    'L2D',
    'L2C',
    'L2B',
    'L2A',
    'L3',
    'L5',
    'L4',
    'L6',
    'L7',
    'L8',
    'L9'
];

export const LevelIsGreaterThanOrEqualTo = (levelInQuestion: string, levelToCompareTo: string): boolean => LEVELS_ORDERED.indexOf(levelInQuestion) >= LEVELS_ORDERED.indexOf(levelToCompareTo);

export const MEMBER_RANK_NAMES: { [key in MemberRanks]: string } = {
    [MemberRanks.LEADER]: 'Leader',
    [MemberRanks.L8]: 'L8',
    [MemberRanks.L7]: 'L7',
    [MemberRanks.L6]: 'L6',
    [MemberRanks.L5]: 'L5',
    [MemberRanks.L4]: 'L4',
    [MemberRanks.L3]: 'L3',
    [MemberRanks.INITIATE]: 'Initiate',
    [MemberRanks.MEMBER]: 'Member',
    [MemberRanks.ELITE]: 'Elite',
    [MemberRanks.VETERAN]: 'Veteran',
    [MemberRanks.SENIOR]: 'Senior',
    [MemberRanks.BOT]: 'Bot',
    [MemberRanks.ACP_SECONDARY]: 'Acp Secondary',
    [MemberRanks.COUNCIL]: 'Council',
    [MemberRanks.GUEST]: 'Guest',
    [MemberRanks.APPLICANT]: 'Applicant',
    [MemberRanks.PROBATION]: 'Probation',
    [MemberRanks.AWAY]: 'Away',
    [MemberRanks.INACTIVE]: 'Inactive'
};

export const SORT_ORDER = [
    MemberRanks.LEADER,
    MemberRanks.COUNCIL,
    MemberRanks.L8,
    MemberRanks.L7,
    MemberRanks.L6,
    MemberRanks.L5,
    MemberRanks.ACP_SECONDARY,
    MemberRanks.L4,
    MemberRanks.L3,
    MemberRanks.ELITE,
    MemberRanks.VETERAN,
    MemberRanks.SENIOR,
    MemberRanks.MEMBER,
    MemberRanks.BOT,
    MemberRanks.AWAY,
    MemberRanks.INITIATE,
    MemberRanks.PROBATION,
    MemberRanks.INACTIVE,
    MemberRanks.APPLICANT,
    MemberRanks.GUEST
];

export const COMPLETE_INACTIVITY_EXPECTED = [
    MemberRanks.APPLICANT,
    MemberRanks.BOT,
    MemberRanks.GUEST,
    MemberRanks.INACTIVE
];

export const DEFAULT_EXCEPT = [
    ...COMPLETE_INACTIVITY_EXPECTED,
    MemberRanks.AWAY,
    MemberRanks.PROBATION
];

export const OFFICER_RANKS = [
    MemberRanks.LEADER,
    MemberRanks.L8,
    MemberRanks.L7,
    MemberRanks.L6,
    MemberRanks.L5,
    MemberRanks.L4
];

export const FULL_MEMBER_RANKS = [
    ...OFFICER_RANKS,
    MemberRanks.L3,
    MemberRanks.ELITE,
    MemberRanks.VETERAN,
    MemberRanks.SENIOR,
    MemberRanks.MEMBER,
    MemberRanks.PROBATION
];

/* The ranks included in MemberRanks that are only assigned as a secondary role */
export const SECONDARY_RANKS = [
    MemberRanks.COUNCIL,
    MemberRanks.ACP_SECONDARY
];
