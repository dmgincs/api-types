export interface EmtCharge {
    TYPE: string;
    REQUIREMENT: number;
    BASE_MULTIPLIER: number;
    HOURLY_REP: number;
    EARLY_POST_BONUS: number;
    ATTENDEE_BONUS: number;
}

export const EmtCharging: readonly EmtCharge[] = [
    {
        TYPE: 'Turbo Charged',
        REQUIREMENT: 16,
        BASE_MULTIPLIER: 5,
        HOURLY_REP: 25,
        EARLY_POST_BONUS: 50,
        ATTENDEE_BONUS: 3
    },
    {
        TYPE: 'Super Charged',
        REQUIREMENT: 7,
        BASE_MULTIPLIER: 2,
        HOURLY_REP: 15,
        EARLY_POST_BONUS: 25,
        ATTENDEE_BONUS: 2
    },
    {
        TYPE: 'Baseline',
        REQUIREMENT: 0,
        BASE_MULTIPLIER: 1,
        HOURLY_REP: 10,
        EARLY_POST_BONUS: 15,
        ATTENDEE_BONUS: 1
    }
] as const;
