import { StrikeType } from '~/types/admin/StrikeType';

export class CreateStrikeRequestDto {

    /** The name of the new strike */
    name: string;

    /** The content that will be pre-filled when issuing this strike */
    prebuilt_content: string | null;

    /** The amount of points the strike awards to the member */
    points: number | null;

    /** The amount of seconds the strike should be applied for */
    expire_duration: number | null;

    /** The amount of REP that should be deducted upon receiving this strike */
    rep_penalty: number | null;

    /** The type of the strike */
    strike_type: StrikeType;
}
