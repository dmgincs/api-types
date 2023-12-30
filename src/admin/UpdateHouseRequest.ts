
export class UpdateHouseRequestDto {

    /** The updated name of the house */
    name?: string;

    /** The updated house sorting number */
    sorting_number?: number;

    /** The updated house hex color */
    hex_color?: string;

    /** The updated house icon url */
    icon?: string;

    /** The updated house banner url */
    banner?: string;

    /** Whether the house is enabled or disabled */
    enabled?: boolean;
}
