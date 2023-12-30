export enum DivisionPositions {
    LEADER = 'L',
    CHANCELLOR = 'CH',
    HOUSE_LEADER = 'HL',
    HOUSE_VICE = 'HV',
    DIVISION_LEADER = 'DL',
    DIVISION_VICE = 'DV',
    DIVISION_TEAM_LEADER = 'TL',
    DIVISION_MEMBER = 'TM'
}

export const DivisionOfficers = [
    DivisionPositions.LEADER,
    DivisionPositions.CHANCELLOR,
    DivisionPositions.HOUSE_LEADER,
    DivisionPositions.HOUSE_VICE,
    DivisionPositions.DIVISION_LEADER,
    DivisionPositions.DIVISION_VICE,
    DivisionPositions.DIVISION_TEAM_LEADER
] as const;

export const MemberPositions = {
    L9: {
        LEADER: 'Leader - L9'
    },
    L8: {
        CHANCELLOR: 'Chancellor - L8',
        OPS: 'Head of Operations - L8',
        ADMIN: 'Head of Admin - L8'
    },
    L7: {
        DEV: 'Head of Development - L7',
        OPS: 'Vice of Operations - L7',
        HOUSE: 'House Leader - L7'
    },
    L6: {
        VP: 'Head of Moderation - L6',
        AFU: 'Head of Esports - L6',
        IMP: 'Head of Training - L6',
        LM: 'Head of Integration - L6',
        HOUSE: 'House Vice - L6',
        DL: 'Division Leader - L6'
    },
    L5: {
        VP: 'Vice of Moderation - L5',
        AFU: 'Vice of Esports - L5',
        IMP: 'Vice of Training - L5',
        LM: 'Vice of Integration - L5',
        DEV: 'Vice of Development - L5',
        DV: 'Division Vice - L5',
        COUNCIL: 'Council - L5'
    },
    L4: {
        ORDER_TL: 'Order Team Leader - L4',
        VP: 'Activity Manager - L4',
        AFU: 'Comp Manager - L4',
        IMP: 'Training Manager - L4',
        LM: 'Cohort Manager - L4',
        DEV: 'DevOps Officer - L4',
        ADMIN: 'Admin Assistant - L4',
        TL: 'Team Leader - L4'
    },
    L3: {
        VP: 'Justice - L3',
        AFU: 'Esports Staff - L3',
        DEV: 'DevOps Staff - L3',
        TWITCH: 'Twitch Manager - L3'
    }
};
