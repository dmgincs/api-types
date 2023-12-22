/* eslint-disable spellcheck/spell-checker */
/* eslint-disable max-classes-per-file */
import { ThreadState } from '~/constants/ThreadState';

class Member {
    /** The ID of the member */
    member_id: number;

    /** The name of the member */
    member_name: string;
}

export class GetInitiateApplicationsResponseDto {
    /** The member who made the application */
    applicant: Member;

    /** The member who recruited the applicant */
    recruiter: Member | null;

    /** The member who processed the application */
    processor: Member;

    /** The date at which the application was created */
    created_at: Date;

    /** The date at which the application was processed */
    processed_at: Date;

    /** Whether the application was a Cohort Reenrollment Request */
    crr: boolean;

    /** The current status of the application */
    status: ThreadState;

    /** The highest response time recorded in seconds */
    highestResponseTime: number;

    /** The average response time in seconds */
    averageResponseTime: number;

    /** The link to the application */
    application_link: string;
}
