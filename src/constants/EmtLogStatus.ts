import { EmtActionTypes } from '~/types/EmtActionTypes';

export const EmtLogStatus: { [key in EmtActionTypes]: string } = {
    [EmtActionTypes.LOG_ACTION_CREATED]: 'Created',
    [EmtActionTypes.LOG_ACTION_STARTED]: 'Started',
    [EmtActionTypes.LOG_ACTION_ENDED]: 'Ended',
    [EmtActionTypes.LOG_ACTION_CANCELLED]: 'Cancelled',
    [EmtActionTypes.LOG_ACTION_AWARDS_ISSUED]: 'Ended',
    [EmtActionTypes.LOG_ACTION_AWARDS_REVOKED]: 'Ended',
    [EmtActionTypes.LOG_ACTION_AWARDS_REISSUED]: 'Ended'
};
