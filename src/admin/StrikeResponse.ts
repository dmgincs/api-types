import { StrikeTypes } from '~/constants/Strikes';

export class StrikeResponseDto {
    /** ID of the strike */
    strikeId: number;

    /** The name of the strike */
    name: string;

    /** Some predefined HTML content */
    prebuiltContent?: string | undefined;

    /** How many points are given from the strike */
    points?: number | undefined;

    /** After how many seconds the strike expires */
    expireDuration?: number | undefined;

    /** How much REP is deducted from the person upon strike issuing */
    repPenalty?: number | undefined;

    strikeType: StrikeTypes;
}
