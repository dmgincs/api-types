/* eslint-disable max-classes-per-file */
import { JusticeAppealOpenStatus, JusticeAppealStatus, JusticeAppealType, JusticeMessageType } from '~/constants/JusticeAppeal';
import { IssuedStrikeResponseDro } from './IssuedStrikeResponse';

class JusticeAppealMessage {
    /** The member who sent the message */
    member_id: number | null;

    /** The date at which the message was sent */
    created_at: Date;

    /** The message content */
    message: string;

    /** The type of the message */
    type: JusticeMessageType;

    /** Whether the message is internal or not */
    is_internal: boolean;
}

export class AllJusticeAppealsDro {
    /** The strike referenced in the appeal */
    referenced_strike: IssuedStrikeResponseDro | null;

    /** The member who submitted the appeal */
    member_id: number;

    /** The type of the appeal */
    type: JusticeAppealType;

    /** The date at which the appeal was submitted */
    created_at: Date;

    /** The status of the appeal */
    status: JusticeAppealStatus;

    /** The open status of the appeal */
    open_status: JusticeAppealOpenStatus;

    /** Appeal messages */
    messages: JusticeAppealMessage[];
}

export class JusticeAppealDro extends AllJusticeAppealsDro {
    /** All the strikes issued to the appealer */
    all_strikes: IssuedStrikeResponseDro[];
}
