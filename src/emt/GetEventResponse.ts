import { EventRegions, EventRsvpTypes, EventTypes } from '~/constants/Events';

export class GetEventResponseDto {
    /** The ID of the event */
    event_id: number;

    /** The title of the event */
    title: string;

    /** The member ID of the host */
    host_id: number | null;

    /** The type of the event */
    type: EventTypes;

    /** The region in which the event will be hosted */
    region: EventRegions;

    /** The game of the event */
    game: string;

    /** The start time of the event */
    start_date: Date;

    /** The end time of the event */
    end_date: Date;

    /** The HTML description of the event */
    description: string;

    /** Whether the event is cancelled */
    cancelled: boolean;

    /** Whether the event is featured */
    featured: boolean;

    /** Whether the event is a flex event */
    is_flex: boolean;

    /** Whether the event is 21+ */
    is_over21: boolean;

    /** The ID of the member whom posted the event */
    posted_by: number;

    /** The time at which the event was posted */
    posted_at: Date;

    /** The ID of the log associated with the event, if a log was created */
    log_id: number | null;

    /** The url to the event banner */
    image_path: string | null;

    /** A list of all RSVPd members */
    rsvps: {
        member_id: number;
        rsvpType: EventRsvpTypes;
    }[];
}
