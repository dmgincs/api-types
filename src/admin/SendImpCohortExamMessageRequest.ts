
export class SendImpCohortExamMessageRequestDto {

    /** A list of member IDs whom the cohort message should be sent to */

    memberIds: number[];

    /** The link to the exam */

    examLink: string;
}
