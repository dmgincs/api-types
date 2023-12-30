/* eslint-disable spellcheck/spell-checker */
/* eslint-disable max-classes-per-file */
import { EventRsvpTypes } from '~/constants/Events';
import { EventBrowserResponseDto } from './EventBrowserResponse';

class MemberDetails {
    /** Member\s SEO name */
    members_seo_name: string;

    /** Member\s ID */
    member_id: number;

    /** URL of member\s main photo */
    pp_main_photo: string;

    /** Member\s name */
    name: string;

    /** Member\s formatted name */
    formatted_name: string;
}

class RsvpDetails {
    /** RSVP status of the member for the event */
    rsvpType: EventRsvpTypes;

    /** Details of the member who RSVPed */
    member: MemberDetails;
}

export class EventRsvpsResponseDto extends EventBrowserResponseDto {
    /** List of RSVPs for the event */
    rsvps: RsvpDetails[];
}

