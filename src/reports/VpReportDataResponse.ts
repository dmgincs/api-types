
export class InactivityReportDataResponseDto {
    /** Total number of members that were warned for inactivity for the first time in the current month */
    firstWarning: number;

    /** Total number of members that went inactive last month */
    inactive: number;

    /** Total number of members that went inactive due to discord inactivity last month */
    discordInactive: number;
}
