// eslint-disable-next-line max-classes-per-file
import { QuestMetadata } from '~/types/mainsite/QuestMetadata';
import { QuestType } from '~/types/mainsite/QuestType';

class MemberQuestDto {
    /** Quest title */
    title: string;

    /** Quest type */
    type: QuestType;

    /** Message to send when a quest is completed */
    completion_message: string;

    /** Quest description */
    description: string;
}

export class MemberQuestsResponseDto {
    /** Member Id */
    member_id: number;

    /** Start date of the member quest */
    start_date: string;

    /** Completion date of the member quest. Can be null */
    completion_date: string | null;

    /** Contains target and current values of the member quest */
    metadata: QuestMetadata;

    /** The linked quest */
    quest: MemberQuestDto;
}
