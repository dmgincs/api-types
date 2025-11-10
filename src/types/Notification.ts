export enum NotificationPlatforms {
    DISCORD = 1,
    MOBILE = 2,
    WEBAPP = 4
}

export enum NotificationApplications {
    INACTIVITY = 1 << 0,
    DAILY_EVENT_OVERVIEW = 1 << 1,
    EVENT_CHANGES = 1 << 2,
    EVENT_REMINDER = 1 << 3,
    AWAY_CHANGES = 1 << 4,
    ATTACK_ITEM = 1 << 5,
    ITEM_DROPS = 1 << 6,
    MEMBER_DUES = 1 << 7,
    MEMBER_GRADUATION = 1 << 8,
    ANNOUNCEMENT = 1 << 9,
    DIVISION_UPDATES = 1 << 10,
    STRIKES = 1 << 11,
    AWARDS = 1 << 12,
    REP_CAP_NOTIFICATION = 1 << 13,
    BATTLEPASS_GIFT = 1 << 14,
    ITEM_NO_LONGER_HIDDEN = 1 << 15,
    MEMBER_QUEST = 1 << 16
}

export const NotificationApplicationsInfo: { [key in NotificationApplications]: { description: string; platforms: NotificationPlatforms } } = {
    [NotificationApplications.INACTIVITY]: {
        description: 'Notifications regarding being set to inactive, including a rookie reminder.',
        platforms: NotificationPlatforms.DISCORD | NotificationPlatforms.MOBILE | NotificationPlatforms.WEBAPP
    },
    [NotificationApplications.DAILY_EVENT_OVERVIEW]: {
        description: 'Discord notifications with an overview of daily upcoming events.',
        platforms: NotificationPlatforms.DISCORD
    },
    [NotificationApplications.EVENT_CHANGES]: {
        description: 'Notifications with event changes that a member has rsvp\'d to.',
        platforms: NotificationPlatforms.DISCORD | NotificationPlatforms.MOBILE | NotificationPlatforms.WEBAPP
    },
    [NotificationApplications.EVENT_REMINDER]: {
        description: 'Discord notifications with event reminders.',
        platforms: NotificationPlatforms.DISCORD | NotificationPlatforms.MOBILE | NotificationPlatforms.WEBAPP
    },
    [NotificationApplications.AWAY_CHANGES]: {
        description: 'Active away status updates.',
        platforms: NotificationPlatforms.DISCORD | NotificationPlatforms.MOBILE | NotificationPlatforms.WEBAPP
    },
    [NotificationApplications.ATTACK_ITEM]: {
        description: 'Notifications of being attacked or stolen from.',
        platforms: NotificationPlatforms.DISCORD | NotificationPlatforms.MOBILE | NotificationPlatforms.WEBAPP
    },
    [NotificationApplications.ITEM_DROPS]: {
        description: 'Item drops notifications.',
        platforms: NotificationPlatforms.DISCORD | NotificationPlatforms.MOBILE | NotificationPlatforms.WEBAPP
    },
    [NotificationApplications.ITEM_NO_LONGER_HIDDEN]: {
        description: 'Item no longer hidden notifications.',
        platforms: NotificationPlatforms.DISCORD | NotificationPlatforms.MOBILE | NotificationPlatforms.WEBAPP
    },
    [NotificationApplications.MEMBER_DUES]: {
        description: 'Member dues notifications.',
        platforms: NotificationPlatforms.DISCORD | NotificationPlatforms.MOBILE | NotificationPlatforms.WEBAPP
    },
    [NotificationApplications.MEMBER_GRADUATION]: {
        description: 'Notifications about graduation to Full Member.',
        platforms: NotificationPlatforms.DISCORD | NotificationPlatforms.MOBILE | NotificationPlatforms.WEBAPP
    },
    [NotificationApplications.ANNOUNCEMENT]: {
        description: 'DI Announcements.',
        platforms: NotificationPlatforms.DISCORD | NotificationPlatforms.MOBILE | NotificationPlatforms.WEBAPP
    },
    [NotificationApplications.DIVISION_UPDATES]: {
        description: 'Division Updates.',
        platforms: NotificationPlatforms.DISCORD | NotificationPlatforms.MOBILE | NotificationPlatforms.WEBAPP
    },
    [NotificationApplications.STRIKES]: {
        description: 'Strike System.',
        platforms: NotificationPlatforms.DISCORD | NotificationPlatforms.MOBILE | NotificationPlatforms.WEBAPP
    },
    [NotificationApplications.AWARDS]: {
        description: 'Award System.',
        platforms: NotificationPlatforms.DISCORD | NotificationPlatforms.MOBILE | NotificationPlatforms.WEBAPP
    },
    [NotificationApplications.REP_CAP_NOTIFICATION]: {
        description: 'Reputation Cap Notifications.',
        platforms: NotificationPlatforms.DISCORD | NotificationPlatforms.MOBILE | NotificationPlatforms.WEBAPP
    },
    [NotificationApplications.BATTLEPASS_GIFT]: {
        description: 'Battlepass Gift Notifications.',
        platforms: NotificationPlatforms.DISCORD | NotificationPlatforms.MOBILE | NotificationPlatforms.WEBAPP
    },
    [NotificationApplications.MEMBER_QUEST]: {
        description: 'Member Quests Notifications.',
        platforms: NotificationPlatforms.DISCORD | NotificationPlatforms.MOBILE | NotificationPlatforms.WEBAPP
    }
};
