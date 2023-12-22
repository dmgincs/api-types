/* eslint-disable spellcheck/spell-checker */

export class AboutMemberResponseDto {
    /** The name of the user */
    name: string;

    /** The join date of the user */
    joinDate: Date;

    /** The profile link of the user */
    profileLink: string;

    /** The house of the user */
    house: string;

    /** The division of the user */
    division: string;

    /** The position of the user */
    position: string;

    /** Whether the user has an interest in competitions */
    compInterest: boolean;

    /** The total level of the user */
    totalLevel: number;

    /** The primary game of the user */
    primaryGame: string;

    /** The secondary game of the user */
    secondaryGame: string | null;

    /** The region of the user */
    region: string | null;

    /** The number of discord hours of the user */
    discordHours: number;

    /** The reputation of the user */
    reputation: number;

    /** The manager of the user */
    manager: string | null;

    /** Number of recruits in the last five months */
    recruitsLastFive?: number;

    /** Number of recruits this month */
    recruitsThisMonth?: number;

    /** Number of events hosted this month */
    eventsHostedThisMonth?: number;

    /** Number of competitive hours this month */
    compHoursThisMonth?: number;

    /** Whether the user have EHL */
    ehl?: boolean;

    /** Whether the user is a trusted host */
    trustedHost?: boolean;

    /** Whether the user is a coach */
    coach?: boolean;
}
