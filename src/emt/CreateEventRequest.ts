import { EventRegions, EventTypes } from '~/constants/Events';

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

    /** The member ID of the host */
    host_id: number;

    /** The ID of the image used as the event banner */

    image_id?: number;
}
