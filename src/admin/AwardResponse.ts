
export class AwardResponseDto {
    /** The ID of the award */
    awardId: number;

    /** The name of the award */
    name: string;

    /** The prebuilt description that will automatically embedded into the award, unless edited */
    prebuiltDescription: string;

    /** The url of the image */
    imageUrl: string;

    /** How many honor points are awarded by the award */
    honorPoints: number;

}
