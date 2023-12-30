
export interface GetHousesResponseDto {
    [houseName: string]: GetHouseResponse;
}

export class GetHouseResponse {
    /** The name of the house */
    name: string;

    /** The HEX color of the house */
    color: string;

    /** Whether the house is enabled */
    is_enabled: boolean;
}
