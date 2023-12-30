
export class SplitDivisionRequestDto {
    /** The division to split the list of members into */

    target_division: string;

    /** List of member IDs that should be split into the target division */

    member_ids: number[];
}
