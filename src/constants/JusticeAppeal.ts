export enum JusticeMessageType {
    APPEALER = 'appealer',
    JUSTICE = 'justice',
    LEADER = 'leader',
    SYSTEM = 'system',
}

export enum JusticeAppealType {
    STRIKE = 'strike',
    BAN = 'ban',
}

export enum JusticeAppealStatus {
    UNDER_REVIEW = 'under review',
    UPHELD = 'upheld',
    OVERTURNED = 'overturned',
    REISSUED = 'reissued',
}

export enum JusticeAppealOpenStatus {
    OPEN = 'open',
    CLOSED = 'closed',
}
