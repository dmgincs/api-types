/* eslint-disable max-classes-per-file */

export class DivisionResponseDto {
    /** The name of the division */
    name: string;

    /** The name of the house the division belongs to */
    house_name: string;

    /** The numeric value of the division */
    division_number: number;

    /** The color associated with the division */
    color: string;

    /** Whether the division is enabled */
    is_enabled: boolean;

    /** Whether the division is a seed division */
    is_seed: boolean;

    /** Whether the division is a artisan division */
    is_artisan: boolean;

    /** Whether the division is a stable division */
    is_stable: boolean;
}

export class GetDivisionsResponseDto {
    [divisionName: string]: DivisionResponseDto;
}
