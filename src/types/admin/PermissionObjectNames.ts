export enum PermissionObjectNames {
    // LOGINs
    APPLICATION_LOGIN_ADMIN = 'application.login.admin',

    // PERMISSIONS
    PERMISSIONS_API_KEYS = 'permissions.apikeys',
    PERMISSIONS_OBJECT = 'permissions.object',
    PERMISSIONS_ROLES = 'permissions.roles',

    // MEMBER is for fetching/changing data about OTHER PEOPLE
    MEMBER_AWARDS = 'member.awards',
    MEMBER_AWAY = 'member.away',
    MEMBER_DISCORD_ADD_TO_SERVER = 'member.discord.add_to_server',
    MEMBER_DISCORD_SYNC = 'member.discord.sync',
    MEMBER_RPG_ITEMS = 'member.rpg.items',
    MEMBER_MERGE = 'member.merge',
    MEMBER_NAME = 'member.name',
    MEMBER_NOTES = 'member.notes',
    MEMBER_PROFILE = 'member.profile',
    MEMBERS_AWAY = 'members.away',
    MEMBERS_NOTIFY = 'members.notify',
    MEMBERS_EMAIL = 'members.email',

    // SELF is for fetching/changing data about THEMSELVES
    SELF = 'self', // for getting a basic summary/mini-profile about yourself.
    SELF_ACCOUNT_SIGNIN = 'self.account.sign_in',
    SELF_ACCOUNT_SIGNIN_THIRD_PARTY = 'self.account.sign_in.third_party',
    SELF_AWAY = 'self.away',
    SELF_DISCORD_ROLES = 'self.discord.roles',
    SELF_GIFT_REP = 'self.gift_rep',
    SELF_MOBILE_LINKED_DEVICES = 'self.mobile.linked_devices',
    SELF_MOBILE_SETTINGS = 'self.mobile.settings',
    SELF_NOTIFICATIONS = 'self.notifications',
    SELF_NOTIFICATIONS_SETTINGS = 'self.notifications.settings',
    SELF_PERMISSIONS = 'self.permissions',
    SELF_STATS = 'self.stats',
    SELF_STRIKES = 'self.strikes',

    // EMT
    EMT_EVENT = 'emt.event',
    EMT_EVENT_HISTORY = 'emt.event.history',
    EMT_EVENT_RSVP = 'emt.event.rsvp',
    EMT_EVENTS = 'emt.events',
    EMT_HOSTING = 'emt.hosting',
    EMT_INVITE_NEW_INITIATES = 'emt.invite.new_initiates',
    EMT_LOG = 'emt.log',
    EMT_LOG_CASUAL = 'emt.log.casual',
    EMT_LOG_COACH = 'emt.log.coach',
    EMT_LOG_COMMUNITY = 'emt.log.community',
    EMT_LOG_COMPETITIVE = 'emt.log.competitive',
    EMT_LOG_MEETING = 'emt.log.meeting',
    EMT_LOG_MORNING_TEA = 'emt.log.morning_tea',
    EMT_LOG_REAL_LIFE = 'emt.log.real_life',
    EMT_LOG_SOCIAL = 'emt.log.social',
    EMT_LOG_TRAINING = 'emt.log.training',
    EMT_LOG_TWITCH = 'emt.log.twitch',
    EMT_LOGS = 'emt.logs',

    // RPG = CRAFTING/ITEM/LEVEL/PERK/STEAL SYSTEM
    MEMBER_RPG_BOOSTS = 'member.rpg.boosts',
    MEMBER_RPG_PROTECTION = 'member.rpg.protection',
    MEMBER_RPG_STATS = 'member.rpg.stats',
    MEMBERS_RPG_LEVELS = 'members.rpg.levels',
    RPG_ITEMS = 'rpg.items',
    RPG_AUCTION = 'rpg.items.auction',
    RPG_ITEMS_HISTORY = 'rpg.items.history',
    RPG_LEVELS = 'rpg.levels',
    RPG_REPSHOP = 'rpg.repshop',
    RPG_REPSHOP_PROCESS = 'rpg.repshop.process',
    REPSHOP = 'repshop',
    // managing yourself
    SELF_RPG_BOOSTS = 'self.rpg.boosts',
    SELF_RPG_CRAFTING = 'self.rpg.crafting',
    SELF_RPG_ITEMS = 'self.rpg.items',
    SELF_RPG_LEVELS = 'self.rpg.levels',
    SELF_RPG_PERK = 'self.rpg.perks',

    // ADMIN
    ADMIN_LOGS = 'admin.logs',
    AWARDS = 'awards',
    AWARDS_ISSUED = 'awards.issued',
    FILES = 'files',
    STRIKES = 'strikes',
    STRIKES_ISSUE_ANY_RANK = 'strikes.issue_any_rank',

    // ORDERS
    STRUCTURE_DIVISIONS = 'structure.divisions',
    STRUCTURE_DIVISIONS_MERGE = 'structure.divisions.merge',
    STRUCTURE_DIVISIONS_SPLIT = 'structure.divisions.split',
    STRUCTURE_HOUSES = 'structure.houses',
    INITIATE_APPLICATIONS = 'initiate.applications',
    INITIATE_COHORT_MESSAGE = 'initiate.cohort.message',
    INITIATE_GRADUATION = 'initiate.graduation',
    INITIATE_VOTING = 'initiate.voting',
    RECRUIT_LOGS = 'recruit_logs',
    REP = 'rep', // remember DELETE will only work for Dev, even if you give it to more
    REPORTS_AGE = 'reports.age',
    REPORTS_COHORT = 'reports.cohort',
    REPORTS_CSV = 'reports.csv',
    REPORTS_LEVEL_RANK_UP = 'reports.level_rank_up',
}
