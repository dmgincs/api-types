import { ActivityTiers } from '~/constants/ActivityTiers';

export class GetActivityTierResponseDto {
    /** Your current activity tier */
    current_tier: ActivityTiers;

    /** Your previous activity tier */
    previous_tier: ActivityTiers;

    /** Your current total XP */
    current_xp: number;

    /** Total XP you need to reach your previous tier; null if your tier is the same or higher */
    xp_needed_previous_tier: number | null;
}
