
export class UpdateAwardRequestDto {

    /** The name of the award */
    name: string | null;

    /** The prebuild description that will automatically embedded into the award, unless edited */
    prebuilt_description: string | null;

    /** The url of the image */
    image_url: string | null;

    /** How many honor points are awarded by the award */
    honor_points: number | null;
}
