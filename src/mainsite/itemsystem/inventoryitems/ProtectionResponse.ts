/* eslint-disable no-restricted-imports */

export class ProtectionResponseDto {
    /** The length of the protection */
    streakLength: number;

    /** The date the protection ends */
    endDate: Date | null;

    /** Whether the protection is active */
    isActive: boolean;
}
