/* eslint-disable max-classes-per-file */

export class EventBrowserResponseDto {
    /** Event ID */
    id: number;

    /** EMT Event ID */
    emt_event_id: number | null;

    /** Event Title */
    title: string;

    /** Event Start Date */
    start_date: Date;

    /** Event Content */
    event_content: string | undefined;

    /** Event End Date */
    end_date: Date;

    /** Event Cover Photo */
    cover_photo: string;

    /** Event Featured */
    featured: boolean;

    /** Event Ongoing */
    ongoing: boolean;

    /** Event Tags */
    tags: string[] | null;

    /** Event Category */
    category: string;

    /** Event Type */
    type: string;

    /** Event Region */
    region: string;

    /** Event Cancelled */
    cancelled: boolean;

    /** Event RSVP Count */
    rsvps_count: number;

    /** Event Image ID */
    image_id: number | null;

    /** Event Image Path */
    imagePath: string | null;
}

