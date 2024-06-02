/* eslint-disable max-classes-per-file */

class DiscordValueThreshold {
    /** The amount of discord days a member has to get in the specified timeFrame */
    days: number;

    /** The amount of discord hours a member has to get in the specified timeFrame */
    hours: number;

    /** The timeFrame in which the member has to get the specified discord activity */
    timeFrame: string;
}

class Reputation {
    /** The amount of reputation a member has to get in the specified timeFrame */
    value: number;

    /** The timeFrame in which the member has to get the specified reputation */
    timeFrame: string;
}

export class GetActivitySettingsResponseDto {

    discord: DiscordValueThreshold;

    rep: Reputation;
}
