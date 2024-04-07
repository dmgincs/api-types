/* eslint-disable max-classes-per-file */

export class WarningNotificationGroup {

    id: number;

    name: string;

    formattedName: string;
}

export class WarningNotificationField {

    name: string;

    value: string | null;
}

export class WarningNotificationFieldGroup {

    name: string;

    fields: Record<string, WarningNotificationField>;
}

export class WarningNotificationRank {

    id: number;

    name: string;

    url: string;

    points: number;
}

export class WarningNotificationReason {

    id: number;

    name: string;

    defaultNotes: string;

    points: number;

    pointsOverride: boolean;

    removeOverride: boolean;

    removePoints: string | null;

    pointsAutoRemove: boolean;
}

export class WarningNotificationMember {

    id: number;

    name: string;

    title: string | null;

    timeZone: string | null;

    formattedName: string;

    ipAddress?: string;

    primaryGroup: WarningNotificationGroup;

    secondaryGroups: WarningNotificationGroup[];

    email: string;

    joined: Date;

    registrationIpAddress: string;

    warningPoints: number;

    reputationPoints: number;

    photoUrl: string;

    photoUrlIsDefault: boolean;

    coverPhotoUrl: string;

    profileUrl: string;

    validating: boolean;

    posts: number;

    lastActivity: Date | null;

    lastVisit: Date | null;

    lastPost: Date | null;

    profileViews: number;

    birthday: string;

    customFields: Record<string, WarningNotificationFieldGroup>;

    rank: WarningNotificationRank[] | null;

    achievements_points: number;

    allowAdminEmails: boolean;

    completed: boolean;

}

export class WarningNotificationRequestDto {

    id: number;

    member: WarningNotificationMember;

    moderator: WarningNotificationMember;

    points: number;

    reason: WarningNotificationReason;

    expiration: Date | number;

    date: Date;

    acknowledged: boolean;

    memberNotes: string;

    moderatorNotes: string;

    modQueuePermanent: boolean;

    modQueue: string | null;

    restrictPostsPermanent: boolean;

    restrictPosts: string | null;

    suspendPermanent: boolean;

    suspend: string | null;
}
