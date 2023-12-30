/* eslint-disable max-classes-per-file */
import { EmtLogControlSetting } from '~/types/EmtLogControlSetting';

export class EmtLogAttendance {
    /** The member\s attendance for every hour */
    attendance: {
        present: boolean;
        event_time: string;
    }[];

    /** Information about the attendee */
    member: {
        country: string;
        id: number;
        name: string;
    };

    /** Whether the member is RSVPd to the event */
    rsvp: boolean;
}

class EmtLogAwardMetadata {
    /** REP received for each attendee */
    attendee_bonus: number[];

    /** The base hosting REP for attending an event */
    base_rep: number[];

    /** `REP received for posting the event ${EmtSettings.EARLY_POST_TIME_IN_DAYS} days in advance` */
    early_bonus: number;

    /** Whether the award was issued to the event host */
    isHost: boolean;

    /** Vanguard multiplier applied to the awards */
    multiplier: number;

    /** The base hosting REP for hosting an event */
    base_host_rep: number[];

    /** Other REP issued */
    misc: string[];
}

export class EmtLogAward {
    /** The member who was awarded */
    member_id: number;

    /** Information about the REP breakdown */
    metadata?: EmtLogAwardMetadata;

    /** The amount of REP issued */
    rep_issued: number;
}

export class GetEmtLogResponseDto {
    /** The type of the event */
    event_type: string;

    /** The amount of rep gained per hour of attendance */
    rep_rate: number;

    /** Information about the event */
    event: {
        title: string;
        link: string;
    };

    // Exclude from docs
    emt_event_id: number | null;

    /** Information about the host */
    host: {
        id: number;
        name: string;
        country: string;
    };

    /** The platform the event is log is hosted on  */
    platform: string;

    /** The current status of the event */
    status: string;

    /** The timestamp at which the log started */
    start_timestamp: Date | null;

    /** The timestamp at which the log was ended */
    end_timestamp: Date | null;

    /** All actions that were made on the log */
    actions: {
        action: string;
        member: {
            country: string;
            name: string;
            id: number;
        };
        time: Date;
    }[];

    /** All attendance for the event log */
    attendance: EmtLogAttendance[];

    controls: EmtLogControlSetting[];

    /** All awarded awards for the event log */
    awards: EmtLogAward[];

    /** All awarded items for the event log */
    awarded_items: { [member_id: string]: number[] };
}
