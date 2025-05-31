export enum ActivityTiers {
    INACTIVE = 'Inactive',
    AFK_GAMER = 'AFK Gamer',
    CASUAL_CHAMPION = 'Casual Champion',
    TRYHARD = 'Tryhard',
    HARDCORE_GAMER = 'Hardcore Gamer',
    GIGACHAD_GAMER = 'GigaChad Gamer'
}

export const ACTIVITY_TIERS_ORDERED = [
    ActivityTiers.GIGACHAD_GAMER,
    ActivityTiers.HARDCORE_GAMER,
    ActivityTiers.TRYHARD,
    ActivityTiers.CASUAL_CHAMPION,
    ActivityTiers.AFK_GAMER,
    ActivityTiers.INACTIVE
] as const;

export interface ActivityTierData {
    name: ActivityTiers;
    xp_needed: number;
    color: string;
    benefits: string[];
}

export const ACTIVITY_TIERS_DATA: Record<ActivityTiers, ActivityTierData> = {
    [ActivityTiers.GIGACHAD_GAMER]: {
        name: ActivityTiers.GIGACHAD_GAMER,
        xp_needed: 2000,
        color: '#6B3074',
        benefits: ['Special item', 'Special color']
    },
    [ActivityTiers.HARDCORE_GAMER]: {
        name: ActivityTiers.HARDCORE_GAMER,
        xp_needed: 1000,
        color: '#7268A6',
        benefits: ['Special item', 'Special color']
    },
    [ActivityTiers.TRYHARD]: {
        name: ActivityTiers.TRYHARD,
        xp_needed: 250,
        color: '#86A3C3',
        benefits: ['L4+ positions', 'Voice channel commands (without BP)']
    },
    [ActivityTiers.CASUAL_CHAMPION]: {
        name: ActivityTiers.CASUAL_CHAMPION,
        xp_needed: 100,
        color: '#19B8A6',
        benefits: ['EHL eligibility']
    },
    [ActivityTiers.AFK_GAMER]: {
        name: ActivityTiers.AFK_GAMER,
        xp_needed: 1,
        color: '#D8E0BB',
        benefits: [
            'Attending events',
            'Access to channels',
            'Item system'
        ]
    },
    [ActivityTiers.INACTIVE]: {
        name: ActivityTiers.INACTIVE,
        xp_needed: 0,
        color: '#B7B7B7',
        benefits: []
    }
};
