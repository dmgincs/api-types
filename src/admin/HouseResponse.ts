
export class HouseResponseDto {
    /** The ID of the house */
    houseId: number;

    /** The name of the house */
    name: string;

    /** The sorting number of the house */
    sortingNumber: number;

    /** Hex based color of the house */
    hexColor: string;

    /** The icon url of the house */
    icon: string;

    /** The banner url of the house */
    banner: string;

    /** Whether the house is enabled or not */
    enabled: boolean;
}
