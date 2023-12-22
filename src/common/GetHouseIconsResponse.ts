
export interface GetHouseIconsResponseDto {
    [houseName: string]: HouseIconsResponse;
}

export class HouseIconsResponse {
    /** The name of the house */
    house_name: string;

    /** The icon url of the house */
    house_icon_url: string;

    /** The banner url of the house */
    house_banner_url: string;
}
