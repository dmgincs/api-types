/* eslint-disable max-classes-per-file */

/* eslint-disable max-classes-per-file */
class BetCategoryResponse {
    /** A map of member id -> bet rep */
    betParticipants: Record<number, number>;

    /** The name of the betting option */
    name: string;

    /** The total amount of rep bet on the category */
    totalBetRep: number;

    /** The total amount of bets on the category */
    totalBets: number;
}

class BetSettings {
    /** Whether the bet is currently active */
    active: boolean;

    /** The winner of the bet */
    winner: string | null;
}

export class GetBetByIdResponseDto {
    /** The different betting categories */
    categories: BetCategoryResponse[];

    /** The settings of the current bet run */
    settings: BetSettings;
}
