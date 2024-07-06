
export class MobileSettingsResponseDto {
    /** The member_id to whom the notification settings belong */
    member_id: number;

    /** Configuration for receiving mobile push notification for maybe RSVP\s */
    maybeNotifications: boolean;

    /** Configuration for receiving mobile push notification 30 minutes in advance of events */
    thirtyMinuteNotification: boolean;

    /** Configuration for receiving mobile push notification for event updates */
    eventUpdatesNotifications: boolean;
}
