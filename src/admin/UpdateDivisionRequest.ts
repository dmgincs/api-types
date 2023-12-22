
export class UpdateDivisionRequestDto {

    /** The hex color of the division */
    hex_color: string;

    /** The house ID of the house the division belongs to */
    house_id: number;

    /** The game associated with the division */
    game: string;

    /** The CDN link of the bordered division icon */
    bordered_icon: string;

    /** The CDN link of the borderless division icon */
    borderless_icon: string;

    /** Whether the division is enabled */
    enabled: boolean;

    /** Whether the division is a seed division */
    seed: boolean;

    /** Whether the division is an artisan division */
    artisan: boolean;

    /** Whether the division is a stable division */
    stable: boolean;
}
