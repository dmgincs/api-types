
export class ApiKeyResponseDto {
    /** The name of the new API Key */
    name: string;

    /** How many requests are allowed to be made in the time-frame */
    rateLimit?: number;

    /** What is the time-frame in seconds for which the rate-limit should be applied */
    rateLimitTtl?: number;

    /** Should the rate-limit be re-calculated for each IP?  */
    rateLimitPerIp?: boolean;
}
