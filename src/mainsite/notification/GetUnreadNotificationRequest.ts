
export class GetUnreadNotificationRequestDto {
    /** The ID of the notification */
    id: number;

    /** The content of the notification */
    content: string;

    /** The time the notification is seen at */
    sentAt: string;
}

