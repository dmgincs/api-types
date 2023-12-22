
export class CreateAwardRequestDto {

    /** The name of the award */
    name: string;

    /** The prebuild description that will automatically embedded into the award, unless edited */
    prebuilt_description: string;

    /** The url of the image */
    image_url: string;

    /** How many honor points are awarded by the award */
    honor_points: number;
}
