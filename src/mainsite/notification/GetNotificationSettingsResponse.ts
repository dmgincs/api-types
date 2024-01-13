import { NotificationApplications, NotificationPlatforms } from '~/types/Notification';

class NotificationSettingsDto {
    /** Description about the notification platform */
    description: string;

    /** List of enabled platforms */
    platform: Record<NotificationPlatforms, boolean>;
}

export type GetNotificationSettingsResponseDto = {
    [key in NotificationApplications]: NotificationSettingsDto;
};
