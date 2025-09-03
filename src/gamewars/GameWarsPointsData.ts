import { ApiResponse } from '@nestjs/swagger';

export interface GameWarsPointsDataByMemberId { [memberId: string]: GameWarsPointDataResponseDto }
// export interface GameWarsPointsData { [game: string]: number }

@ApiResponse({ description: 'Points per game, keyed by game name' })
export class GameWarsPointDataResponseDto {
    [game: string]: number;
}
