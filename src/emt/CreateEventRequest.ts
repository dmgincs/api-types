import { EventRequestedRsvpType } from '~/constants/EventRequestedRsvpType';
import { EventRegions, EventRsvpTypes, EventTypes } from '~/constants/Events';

export class CreateEventRequestDto {

    /** The title of the new event */
    title: string;

    /** The type of the event */
    type: EventTypes;

    /** The game of the event */
    game: string;

    /** The region in which the event will be hosted */
    region: EventRegions;

    /** The start time of the event */
    start_date: string;

    /** The length of the event in hours */
    length: number;

    /** The HTML description of the event */
    description: string;

    featured?: boolean;

    /** Whether the event is a flex event, meaning anyone can join whenever they want */
    is_flex: boolean;

    /** Whether the event is a 21+ event, meaning only members who are above the age of 21 can join */
    is_over21: boolean;

    /** Whether an event is private (limited to the requested rsvps) or not */

    is_private?: boolean;

    /** The member ID of the host */
    host_id: number;

    /** The ID of the image used as the event banner */

    image_id?: number;

    /** A list of all RSVPd members */
    rsvps: {
        member_id: number;
        rsvpType: EventRsvpTypes;
    }[];

    /** The group/member(s) to request rsvps from */

    requested_rsvps?: { requested_entity_id: string; type: EventRequestedRsvpType }[];
}
