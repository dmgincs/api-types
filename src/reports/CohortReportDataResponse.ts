/* eslint-disable spellcheck/spell-checker */
/* eslint-disable max-classes-per-file */

class InitiateCounts {
    /** The total number of initiates for the division */
    total: number;

    /** The total number of first-time initiates for the division */
    firstTimers: number;

    /** The percentage of initiates in the cohort */
    cohortPercentage: number;
}

class FailedInitiateRequirements {
    /** The number of initiates that failed to meet requirements */
    total: number;

    /** The percentage of total initiates that failed to meet requirements */
    percentageTotal: number;

    /** The percentage of first-time initiates that failed to meet requirements */
    percentageFirstTimers: number;
}

class FailedFirstTenDays {
    /** The number of initiates that failed in the first ten days */
    total: number;

    /** The percentage of total initiates that failed in the first ten days */
    percentageTotal: number;
}

class GraduatedFirstTimers {
    /** The number of first-timer initiates that graduated */
    total: number;

    /** The percentage of cohort total for first-timer initiates that graduated */
    percentageCohortTotal: number;
}

class AllGraduations {
    /** The number of initiates that graduated */
    total: number;

    /** The percentage of total active initiates that graduated */
    percentageTotalActive: number;
}

class EarlyInactiveMembers {
    /** The number of members that became inactive early */
    total: number;

    /** The percentage of total early inactive members */
    percentageTotalEarlyInactive: number;
}

class DivisionCounts {
    /** Initiate counts for each division */
    initiateCounts: InitiateCounts;

    /** Failed initiate requirements for each division */
    failedInitiateRequirements: FailedInitiateRequirements;

    /** Failed first ten days count for each division */
    failedFirstTenDays: FailedFirstTenDays;

    /** Graduated first timers count for each division */
    graduatedFirstTimers: GraduatedFirstTimers;

    /** All graduations count for each division */
    allGraduations: AllGraduations;

    /** Early inactive members count for each division */
    earlyInactiveMembers: EarlyInactiveMembers;
}

export class CohortReportDataResponseDto {
    /** The cohort name */
    cohort: string;

    /** The timeFrame of the cohort */
    timeFrame: string;

    /** Each division initiate count */
    divisionCounts: DivisionCounts;

    /** The total number of initiates for the cohort with comp interest */
    compInterest: {
        yes: number;
        no: number;
    };

    /** Graduated members by rank */
    graduatedGroups: {
        [rankName: string]: number;
    };
}
