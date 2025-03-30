import { JusticeAppealType } from '~/constants/JusticeAppeal';

export class CreateJusticeAppealDto {

    /** The ID of the issued strike that is being appealed */
    issued_strike_id: number;

    /** The message of the appeal */
    message: string;

    /** The type of the appeal */
    appeal_type: JusticeAppealType;
}
