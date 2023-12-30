
export class GetEmtLogsResponseDto {
    /** The ID of the log */
    id: number;

    /** The type of the event */
    event_type: string;

    /** The title of the event */
    event_title: string;

    /** The platform the event is log is hosted on  */
    platform: string;

    /** Information about the host */
    host: {
        id: number;
        name: string;
        country: string;
    };

    /** The timestamp at which the log created */
    created_time: Date;

    /** The current status of the event */
    status: string;
}
