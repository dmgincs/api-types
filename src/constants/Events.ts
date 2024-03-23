import { PermissionObjectNames } from '~/types/admin/PermissionObjectNames';
import { EmtRepTypes } from '~/types/EmtRepTypes';

export enum EventTypes {
    CASUAL = 'casual',
    COMPETITIVE = 'competitive',
    COMMUNITY = 'community',
    TWITCH = 'twitch',
    MEETING = 'meeting',
    COACH = 'coach',
    TRAINING = 'training',
    REAL_LIFE = 'real life',
    SOCIAL = 'social'
}

export const EventTypeRepTypes: { [key in EventTypes]: EmtRepTypes } = {
    [EventTypes.CASUAL]: EmtRepTypes.EVENT_TYPE_CASUAL,
    [EventTypes.COMPETITIVE]: EmtRepTypes.EVENT_TYPE_COMP,
    [EventTypes.COMMUNITY]: EmtRepTypes.EVENT_TYPE_COMMUNITY,
    [EventTypes.TWITCH]: EmtRepTypes.EVENT_TYPE_TWITCH,
    [EventTypes.MEETING]: EmtRepTypes.EVENT_TYPE_LEADERSHIP,
    [EventTypes.COACH]: EmtRepTypes.EVENT_TYPE_COACHING,
    [EventTypes.TRAINING]: EmtRepTypes.EVENT_TYPE_TRAINING,
    [EventTypes.REAL_LIFE]: EmtRepTypes.EVENT_TYPE_REAL_LIFE,
    [EventTypes.SOCIAL]: EmtRepTypes.EVENT_TYPE_SOCIAL
};

export const EventTypePermissionObjects: { [key in EventTypes]: PermissionObjectNames } = {
    [EventTypes.CASUAL]: PermissionObjectNames.EMT__LOG__CASUAL,
    [EventTypes.COMPETITIVE]: PermissionObjectNames.EMT__LOG__COMPETITIVE,
    [EventTypes.COMMUNITY]: PermissionObjectNames.EMT__LOG__COMMUNITY,
    [EventTypes.TWITCH]: PermissionObjectNames.EMT__LOG__TWITCH,
    [EventTypes.MEETING]: PermissionObjectNames.EMT__LOG__MEETING,
    [EventTypes.COACH]: PermissionObjectNames.EMT__LOG__COACH,
    [EventTypes.TRAINING]: PermissionObjectNames.EMT__LOG__TRAINING,
    [EventTypes.REAL_LIFE]: PermissionObjectNames.EMT__LOG__REAL_LIFE,
    [EventTypes.SOCIAL]: PermissionObjectNames.EMT__LOG__SOCIAL
};

export enum EventRegions {
    NA = 'NA',
    EU = 'EU',
    OCE = 'OCE',
    ASIA = 'Asia',
    ALL = 'All'
}

export enum EventRsvpTypes {
    GOING = 'going',
    MAYBE = 'maybe',
    DECLINE = 'decline'
}

export const EventRsvpInvitePermissionObjects: { [key: string]: PermissionObjectNames } = {
    'new initiates': PermissionObjectNames.EMT__INVITE__NEW_INITIATES
};

export const NumberOfFreeCoachingEvents = 2;
