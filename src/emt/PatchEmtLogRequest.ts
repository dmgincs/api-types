
export class PatchEmtLogRequestDto {

    /** The action to apply to the log */
    action: string;

    /** `Whether the host participated in the event. Should only be supplied for action ${[EmtActionTypes.LOG_ACTION_AWARDS_ISSUED, EmtActionTypes.LOG_ACTION_AWARDS_REISSUED].map(x => EmtActionNames[x]).join( and )}` */

    didHostParticipate?: boolean;
}
