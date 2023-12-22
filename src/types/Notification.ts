export enum NotificationPlatforms {
    DISCORD = 1,
    MOBILE = 2,
    WEBAPP = 4
}

export enum NotificationApplications {
    INACTIVITY = 1,
    DAILY_EVENT_OVERVIEW = 2,
    EVENT_CHANGES = 4,
    EVENT_REMINDER = 8,
    AWAY_CHANGES = 16,
    ATTACK_ITEM = 32,
    ITEM_DROPS = 64,
    MEMBER_DUES = 128,
    MEMBER_GRADUATION = 256,
    ANNOUNCEMENT = 512,
    DIVISION_UPDATES = 1024,
    STRIKES = 2048,
    AWARDS = 4096,
}

export const NotificationApplicationsInfo: { [key in NotificationApplications]: { description: string; platforms: NotificationPlatforms } } = {
    [NotificationApplications.INACTIVITY]: {
        description: 'Notifications regarding being set to inactive, including an initiate reminder.',
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
    }
};
