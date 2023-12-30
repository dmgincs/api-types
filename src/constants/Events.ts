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
    [EventTypes.CASUAL]: PermissionObjectNames.EMT_LOG_CASUAL,
    [EventTypes.COMPETITIVE]: PermissionObjectNames.EMT_LOG_COMPETITIVE,
    [EventTypes.COMMUNITY]: PermissionObjectNames.EMT_LOG_COMMUNITY,
    [EventTypes.TWITCH]: PermissionObjectNames.EMT_LOG_TWITCH,
    [EventTypes.MEETING]: PermissionObjectNames.EMT_LOG_MEETING,
    [EventTypes.COACH]: PermissionObjectNames.EMT_LOG_COACH,
    [EventTypes.TRAINING]: PermissionObjectNames.EMT_LOG_TRAINING,
    [EventTypes.REAL_LIFE]: PermissionObjectNames.EMT_LOG_REAL_LIFE,
    [EventTypes.SOCIAL]: PermissionObjectNames.EMT_LOG_SOCIAL
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
    'new initiates': PermissionObjectNames.EMT_INVITE_NEW_INITIATES
};

export const NumberOfFreeCoachingEvents = 2;
