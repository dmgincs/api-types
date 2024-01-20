/* eslint-disable max-classes-per-file */

export class GetRecruitsActivityResponseObjectDto {
    /** The total amount of recruits for the current timeFrame */
    totalRecruits: number;

    /** The total amount of recruits for the last timeFrame */
    lastTotalRecruits: number;

    /** The total amount of active recruits for the current timeFrame */
    totalActive: number;

    /** The total amount of active recruits for the last timeFrame */
    lastTotalActive: number;

    /** The total amount of retained recruits for the current timeFrame */
    totalRetained: number;

    /** The total amount of active retained for the last timeFrame */
    lastTotalRetained: number;

    /** The total amount of recruits with vanguard for the current timeFrame */
    totalVanguard: number;

    /** The total amount of recruits with vanguard for the last timeFrame */
    lastTotalVanguard: number;
}

export class GetRecruitsActivityResponseDto {
    [key: string]: GetRecruitsActivityResponseObjectDto;
}
