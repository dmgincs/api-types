/* eslint-disable max-classes-per-file */

export class GetRepActivityResponseObjectDto {
    /** The amount of REP for the current timeFrame */
    totalRep: number;

    /** The amount of REP for the last timeFrame */
    prevTotalRep: number;
}

export class GetRepActivityResponseDto {
    [key: string]: GetRepActivityResponseObjectDto;
}
