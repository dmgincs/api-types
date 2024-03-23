/* eslint-disable max-classes-per-file */

class LftData {
    /** The post author */
    author: string;

    /** The post title */
    title: string;

    /** The post content */
    content: string;

    /** The post tags */
    tags: string[];

    /** The post creation date */
    createdDate: string;
}

export class LftDataResponseDto {
    /** LFT data */
    lft: LftData[];

    /** LFP data */
    lfp: LftData[];
}
