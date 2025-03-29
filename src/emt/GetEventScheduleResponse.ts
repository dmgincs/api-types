import { EventRequestedRsvpType } from '~/constants/EventRequestedRsvpType';
import { EventRegions, EventTypes } from '~/constants/Events';
import { EventScheduleStatus } from '~/constants/EventScheduleStatus';

export class GetEventScheduleResponseDto {
    /** The ID of the event */
    event_schedule_id: number;

    /** The title of the event */
    title: string;

    /** The member ID of the host */
    host_id: number | null;

    /** The type of the event */
    type: EventTypes;

    /** The status of the event schedule */
    status: EventScheduleStatus;

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

    /** The url to the event banner */
    image_path: string | null;

    /** Whether the event is private or not */
    is_private: boolean;

    /** The group/member(s) rsvps have been requested from */
    requested_rsvps?: { requested_entity_id: string; type: EventRequestedRsvpType }[];

    /** A cron expression that the event schedule creates events for */
    cron_schedule: string;
}
