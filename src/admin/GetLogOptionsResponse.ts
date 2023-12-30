/* eslint-disable spellcheck/spell-checker */
import { LogLevel } from '~/types/admin/LogLevel';

export class GetLogOptionsResponseDto {
    /** The names of the microservices where logs originated from */
    containerModes: string[];

    /** The possible nodes the logs originate from */
    nodeContexts: string[];

    /** The possible log levels */
    logLevels: LogLevel[];
}
