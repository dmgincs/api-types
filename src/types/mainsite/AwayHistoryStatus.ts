
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
