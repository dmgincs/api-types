/* eslint-disable spellcheck/spell-checker */
export enum PermissionObjectNames {
    // AUTH / PERMS
    USER_ACCOUNT_SIGNIN = 'user.account.signin',
    USER_ACCOUNT_SIGNIN_THIRD_PARTY = 'user.account.signin.third_party',
    USER_PROFILE = 'user.profile',
    USER_PROFILE_AWAY = 'user.profile.away',
    USER_SELF = 'user.self',
    PERMISSIONS_OBJECT = 'permissions.object',
    PERMISSIONS_ROLES = 'permissions.roles',
    PERMISSIONS_API_KEYS = 'permissions.apikeys',
    PROFILE_DISCORD_JOIN = 'profile.discord.join',

    // EMT
    EMT_EVENT = 'emt.event',
    EMT_EVENTS = 'emt.events',
    EMT_EVENT_RSVP = 'emt.event.rsvp',
    EMT_EVENT_HISTORY = 'emt.event.history',
    EMT_INVITE_NEW_INITIATES = 'emt.invite.new_initiates',
    EMT_LOG = 'emt.log',
    EMT_LOGS = 'emt.logs',
    EMT_LOG_CASUAL = 'emt.log.casual',
    EMT_LOG_COACH = 'emt.log.coach',
    EMT_LOG_COMPETITIVE = 'emt.log.competitive',
    EMT_LOG_COMMUNITY = 'emt.log.community',
    EMT_LOG_MEETING = 'emt.log.meeting',
    EMT_LOG_MORNING_TEA = 'emt.log.morning_tea',
    EMT_LOG_REAL_LIFE = 'emt.log.real_life',
    EMT_LOG_SOCIAL = 'emt.log.social',
    EMT_LOG_TRAINING = 'emt.log.training',
    EMT_LOG_TWITCH = 'emt.log.twitch',

    // ADMIN
    ADMIN_LOGS = 'admin.logs',
    STRIKES = 'strikes',
    STRIKES_ISSUED = 'strikes.issued',
    STRIKES_ISSUE_ALL = 'strikes.issue_all',
    MEMBER_NOTES = 'member.notes',
    AWARDS = 'awards',
    AWARDS_ISSUED = 'awards.issued',
    FILES = 'files',

    // ORDERS
    REPORTS_AGE = 'reports.age',
    REPORTS_LEVEL_RANK_UP = 'reports.level_rank_up',
    REPORTS_COHORT = 'reports.cohort',
    INITIATE_APPLICATIONS = 'initiate_applications',
    IMP_COHORT_DM = 'imp.cohort.dm',
    NOTIFY_MEMBERS = 'notify.members',
    DIVISION = 'division',
    HOUSE = 'house',
    DIVISIONS_MERGE = 'divisions.merge',
    DIVISIONS_SPLIT = 'divisions.split'
}
