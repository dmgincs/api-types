import { DivisionGradingMetrics } from '~/types/ms/DivisionGradingMetrics';

export class GetHouseGradingOverviewResponseDto {
    /** The name of the house */
    houseName: string;

    /** The grade score of the house */
    grade: number;

    /** The total amount of divisions */
    divisionCount: number;

    /** The total amount of points */
    pointsTotal: number;

    points: { [key in DivisionGradingMetrics]: { points: number } } & { total: number; totalDivisions: number };
}
