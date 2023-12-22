/* eslint-disable spellcheck/spell-checker */
import { LogLevel } from '~/types/admin/LogLevel';

export class LogResponseDto {
    /** The log ID */
    logId: number;

    /** The level of the log */
    logLevel: LogLevel;

    /** The member ID of the person associated with the log */
    memberId?: number | undefined;

    /** The admin member ID of the person associated with the log */
    adminId?: number | undefined;

    /** The code context of where the log was logged */
    context: string;

    /** The node the pod was running on */
    nodeContext: string;

    /** The name of the pod the code was running on */
    containerContext: string;

    /** The name of the microservice the log was raised from */
    containerMode: string;

    /** The actual log message */
    message: string;

    /** The timestamp of when the log was logged */
    timestamp: number;
}
