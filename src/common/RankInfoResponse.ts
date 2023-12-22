import { MemberRanks } from '~/constants/MemberRanks';

export class RankInfoResponseDto {
    /** The group ID of the rank */
    group_id: MemberRanks;

    /** The name of the group */
    group_name: string;

    /** The icon src of the group */
    icon: string | null;

    /** Instead of the icon, the HTML icon to use */
    html_icon?: string;

    /** The color of the HTML icon */
    html_icon_color: string | null;

    /** HEX color of the rank */
    text_color: string;

    /** The positions associated with the rank */
    positions: string[];
}
