import { AwayHistory } from 'entities/mainsite/AwayHistory.entity';

export enum AwayHistoryStatus {
    SCHEDULED = 1,
    ACTIVE = 2,
    COMPLETED = 3,
    ABORTED = 4,
    CANCELLED = 5
}

export const AwayHistoryStatusNames: { [key in AwayHistoryStatus]: string } = {
    [AwayHistoryStatus.SCHEDULED]: 'scheduled',
    [AwayHistoryStatus.ACTIVE]: 'active',
    [AwayHistoryStatus.COMPLETED]: 'completed',
    [AwayHistoryStatus.ABORTED]: 'aborted',
    [AwayHistoryStatus.CANCELLED]: 'cancelled'
};

export interface AwayStatus {
    active_away: AwayHistory;
    last_6_months: AwayDaysStats;
}

export interface AwayDaysStats{
    days: Number;
    max: Number;
}

export interface AwayBankDays{
    member_id: Number;
    away_days: Number;
    max_days: Number;
}
