import { NotificationPlatforms } from '~/types/Notification';

export class UpdateNotificationSettingsRequestDto {

    inactivity: NotificationPlatforms[];

    daily_event_overview: NotificationPlatforms[];

    event_changes: NotificationPlatforms[];

    event_reminder: NotificationPlatforms[];

    away_changes: NotificationPlatforms[];

    attack_item: NotificationPlatforms[];

    item_drops: NotificationPlatforms[];

    member_graduation: NotificationPlatforms[];

    preference: object;
}
