
export interface GetDivisionsIconsResponseDto {
    [divisionName: string]: DivisionIconsResponseDto;
}

export class DivisionIconsResponseDto {
    /** The name of the division */
    division_name: string;

    /** The icon of the division without the border */
    division_symbol_image: string;

    /** he icon of the division with the border */
    division_logo_image: string;
}
