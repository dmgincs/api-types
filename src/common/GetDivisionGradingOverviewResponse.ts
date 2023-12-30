import { DivisionGrades } from '~/types/ms/DivisionGrades';
import { DivisionGradingMetrics } from '~/types/ms/DivisionGradingMetrics';

export interface DivisionGradesPoints {
    [divisionName: string]: {
        [key in DivisionGradingMetrics]: { points: number; rank: number };
    } & { total: number };

}

export class GetDivisionGradingOverviewResponseDto {
    /** The name of the division */
    divisionName: string;

    /** The grade of the division */
    grade: DivisionGrades;

    /** The HEX color of the grade */
    gradeColor: string;

    /** The rank of the division on the points scale */
    rank: number;

    /** The points distribution for the division\s grading */
    points: { [key in DivisionGradingMetrics]: { points: number; rank: number } } & { total: number };

    gradeSince: number;

    memberCount: number;
}
