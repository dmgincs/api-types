import { JusticeAppealOpenStatus, JusticeAppealStatus } from '~/constants/JusticeAppeal';

export class UpdateJusticeAppealDto {
    
    /** The status of the appeal */
    status?: JusticeAppealStatus;
    
    /** The open status of the appeal */
    openStatus?: JusticeAppealOpenStatus;
}
