export enum EmtActionTypes {
    LOG_ACTION_CREATED = 1,
    LOG_ACTION_STARTED = 2,
    LOG_ACTION_ENDED = 4,
    LOG_ACTION_CANCELLED = 8,
    LOG_ACTION_AWARDS_ISSUED = 16,
    LOG_ACTION_AWARDS_REVOKED = 32,
    LOG_ACTION_AWARDS_REISSUED = 64,
}

export const EmtActionNames: { [key in EmtActionTypes]: string } = {
    [EmtActionTypes.LOG_ACTION_CREATED]: 'log_created',
    [EmtActionTypes.LOG_ACTION_STARTED]: 'log_started',
    [EmtActionTypes.LOG_ACTION_ENDED]: 'log_ended',
    [EmtActionTypes.LOG_ACTION_CANCELLED]: 'log_cancelled',
    [EmtActionTypes.LOG_ACTION_AWARDS_ISSUED]: 'log_awards_issued',
    [EmtActionTypes.LOG_ACTION_AWARDS_REVOKED]: 'log_awards_revoked',
    [EmtActionTypes.LOG_ACTION_AWARDS_REISSUED]: 'log_awards_reissued'
};

export const EmtActionDescriptions: { [key in EmtActionTypes]: string } = {
    [EmtActionTypes.LOG_ACTION_CREATED]: 'Created the event log.',
    [EmtActionTypes.LOG_ACTION_STARTED]: 'Started the event.',
    [EmtActionTypes.LOG_ACTION_ENDED]: 'Ended the event.',
    [EmtActionTypes.LOG_ACTION_CANCELLED]: 'Cancelled the event.',
    [EmtActionTypes.LOG_ACTION_AWARDS_ISSUED]: 'Issued the awards.',
    [EmtActionTypes.LOG_ACTION_AWARDS_REVOKED]: 'Revoked the awards.',
    [EmtActionTypes.LOG_ACTION_AWARDS_REISSUED]: 'Reissued the awards.'
};
