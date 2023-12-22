/* eslint-disable max-classes-per-file */

export class GetActivityResponseObjectDto {
    /** The amount of REP for the current timeFrame */
    currentRep: number;

    /** The amount of REP for the last timeFrame */
    lastRep: number;

    /** The amount of separate days spent on discord voice this timeFrame */
    discordDays: number;

    /** The amount of separate days spent on discord voice last timeFrame */
    lastDiscordDays: number;

    /** The amount of hours spent on discord voice this timeFrame */
    discordHours: number;

    /** The amount of hours spent on discord voice last timeFrame */
    lastDiscordHours: number;

    /** Whether the member is active this timeFrame */
    active: boolean;

    /** Whether the member is expected to be active this timeFrame */
    activeExpected: boolean;

    /** `Whether the member has been on discord in the last ${ActivitySettings.DISCORD_ACTIVITY_THRESHOLD_DAYS} days` */
    discordActive: boolean;

    /** Whether the member counts towards the activity total */
    countsTowardsActiveTotal: boolean;

    /** `Whether the member joined in the last ${NewInitiateActivitySettings.NEW_INITIATE_DAYS} days` */
    isNewInitiate: boolean;

    /** Whether the member\s activity should be checked */
    shouldCheckActivity: boolean;

    /** The amount of days the person has been on away this timeFrame */
    awayDaysThisTimeFrame: number;

    /** The amount of days the person has been on away last timeFrame */
    awayDaysLastTimeFrame: number;
}

export class GetActivityResponseDto {
    [key: string]: GetActivityResponseObjectDto;
}
