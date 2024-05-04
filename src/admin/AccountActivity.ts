
export class AccountActivityResponseDto {

    /** The ID of the log */
    logId: number;

    /** The type of the log */
    logType: string;

    /** The data of the log */
    data: string;

    /** The date and time the log was created */
    createdAt: string;

    /** The ID of the member */
    memberId: number;

    /** The ID of the user who created the log */
    logBy: number;
}
