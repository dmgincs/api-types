import { EventRsvpTypes } from '~/constants/Events';

export class RsvpdEventsResponseDto {
    [eventId: string]: EventRsvpTypes;
}
