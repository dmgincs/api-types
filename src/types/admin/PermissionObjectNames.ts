// Permissions will be combined into a 4-bit HEX number
// 000 0
// the first three will correspond with the PermissionObject
// the last bit will correspond with the PermissionAction

// So an example HEX would be 0192
// 019 = 25 (DEC) = SELF
// 2 = 2 (DEC) = CREATE

export enum PermissionObjectNames {
    // LOGINs
    APPLICATION__LOGIN__ADMIN = 0,

    // PERMISSIONS
    PERMISSIONS__API__KEYS = 5,
    PERMISSIONS__OBJECT = 6,
    PERMISSIONS__ROLES = 7,

    // MEMBER is for fetching/changing data about OTHER PEOPLE
    MEMBER__AWARDS = 10,
    MEMBER__AWAY = 11,
    MEMBER__DISCORD__ADD_TO_SERVER = 12,
    MEMBER__DISCORD__SYNC = 13,
    MEMBER__RPG__ITEMS = 14,
    MEMBER__MERGE = 15,
    MEMBER__NAME = 16,
    MEMBER__NOTES = 17,
    MEMBER__PROFILE = 18,
    MEMBERS__AWAY = 19,
    MEMBERS__NOTIFY = 20,
    MEMBERS__EMAIL = 21,
    MEMBERS__INTEGRATION = 107,

    // SELF is for fetching/changing data about THEMSELVES
    SELF = 25, // for getting a basic summary/mini-profile about yourself.
    SELF__ACCOUNT__SIGNIN = 26,
    SELF__ACCOUNT__SIGNIN_THIRD_PARTY = 27,
    SELF__AWAY = 28,
    SELF__DISCORD__ROLES = 29,
    SELF__GIFT_REP = 30,
    SELF__MOBILE__LINKED_DEVICES = 31,
    SELF__MOBILE__SETTINGS = 32,
    SELF__NOTIFICATIONS = 33,
    SELF__NOTIFICATIONS__SETTINGS = 34,
    SELF__PERMISSIONS = 35,
    SELF__STATS = 36,
    SELF__STRIKES = 37,

    // EMT
    EMT__EVENT = 38,
    EMT__EVENT__HISTORY = 39,
    EMT__EVENT__FEATURE = 108,
    EMT__EVENT__RSVP = 40,
    EMT__EVENTS = 41,
    EMT__HOSTING = 42,
    EMT__INVITE__NEW_INITIATES = 43,
    EMT__LOG = 44,
    EMT__LOG__CASUAL = 45,
    EMT__LOG__COACH = 46,
    EMT__LOG__COMMUNITY = 47,
    EMT__LOG__COMPETITIVE = 48,
    EMT__LOG__MEETING = 49,
    EMT__LOG__MORNING_TEA = 50,
    EMT__LOG__REAL_LIFE = 51,
    EMT__LOG__SOCIAL = 52,
    EMT__LOG__TRAINING = 53,
    EMT__LOG__TWITCH = 54,
    EMT__LOGS = 55,

    // RPG = CRAFTING/ITEM/LEVEL/PERK/STEAL SYSTEM
    MEMBER__RPG__BOOSTS = 56,
    MEMBER__RPG__PROTECTION = 57,
    MEMBER__RPG__STATS = 58,
    MEMBERS__RPG__LEVELS = 59,
    RPG__ITEMS = 60,
    RPG__AUCTION = 61,
    RPG__ITEMS__HISTORY = 62,
    RPG__LEVELS = 63,
    RPG__REPSHOP = 64,
    RPG__REPSHOP__PROCESS = 65,
    REPSHOP = 66,
    // managing yourself
    SELF__RPG__BOOSTS = 67,
    SELF__RPG__CRAFTING = 68,
    SELF__RPG__ITEMS = 69,
    SELF__RPG__LEVELS = 70,
    SELF__RPG__PERK = 71,

    // ADMIN
    ADMIN__LOGS = 80,
    AWARDS = 81,
    AWARDS__ISSUED = 82,
    FILES = 83,
    MEMBER__ACCOUNT = 84,
    STRIKES = 85,
    STRIKES_REISSUE = 109,
    STRIKES__ISSUE_ANY_RANK = 86,

    // ORDERS
    STRUCTURE__DIVISIONS = 90,
    STRUCTURE__DIVISIONS__MERGE = 91,
    STRUCTURE__DIVISIONS__SPLIT = 92,
    STRUCTURE__HOUSES = 93,
    INITIATE__APPLICATIONS = 94,
    INITIATE__COHORT__MESSAGE = 95,
    INITIATE__GRADUATION = 96,
    INITIATE__VOTING = 97,
    DAILY__ACTIVITY__LOGS = 98,
    RECRUIT__LOGS = 99, // todo: rename to logs.recruits
    REP = 100, // remember DELETE will only work for Dev, even if you give the permission out to non-Dev
    REPORTS__AGE = 101,
    REPORTS__COHORT = 102,
    REPORTS__CSV = 103,
    REPORTS__LEVEL__RANK_UP = 104,
    REPORTS__LFT_DATA = 105,
    REPORTS__INACTIVITY = 106,
}
