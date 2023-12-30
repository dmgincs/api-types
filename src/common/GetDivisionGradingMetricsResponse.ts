
export class GetDivisionGradingMetricsResponseDto {
    /** The field name of the metric */
    field: string;

    /** The human readable name of the metric */
    label: string;

    /** The max amount of points achievable for this metric */
    maxPoints: number;
}
