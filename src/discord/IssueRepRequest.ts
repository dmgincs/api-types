
export class IssueRepRequestDto {
    /** The application the reputation is being issued from */

    application: string;

    /** The Discord ID of the member */

    discord_id: string;

    /** The amount of reputation to issue */

    reputation: number;

    /** The reason for issuing the reputation */

    reason: string;

    /** Whether to force the reputation to zero */

    force_to_zero: boolean;

    /** Whether the reputation can go negative */

    can_go_negative: boolean;

    /** Whether to hide the reputation on the MDR */

    hide_on_mdr: boolean;
}
