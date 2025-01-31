/* eslint-disable max-classes-per-file */

export class GetDiscordActivityResponseObjectDto {
    /** Amount of total seconds spent in discord voice this timeFrame */
    totalSecs: number;

    /** Amount of total seconds spent in discord voice last timeFrame */
    prevTotalSecs: number;

    /** Amount of total hours spent in discord voice this timeFrame */
    totalHours: number;

    /** Amount of total hours spent in discord voice last timeFrame */
    prevTotalHours: number;

    /** Amount of total seconds spent in discord lounge this timeFrame */
    totalLoungeSecs: number;

    /** Amount of total seconds spent in discord lounge last timeFrame */
    prevTotalLoungeSecs: number;

    /** Amount of total hours spent in discord lounge this timeFrame */
    totalLoungeHours: number;

    /** Amount of total hours spent in discord lounge last timeFrame */
    prevTotalLoungeHours: number;
}

export class GetDiscordActivityResponseDto {
    [key: string]: GetDiscordActivityResponseObjectDto;
}
