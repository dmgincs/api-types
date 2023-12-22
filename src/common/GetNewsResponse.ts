/* eslint-disable spellcheck/spell-checker */

export class GetNewsResponseDto {
    /** The title of the news post */
    title: string;

    /** A short description of the news post */
    shortBody: string;

    /** The date at which the news article was published */
    publishedDate: Date;

    /** The url to the news post */
    url: string;

    /** Url to the news article image banner */
    imageUrl: string;

    /** Image thumb of the news article */
    imageThumbUrl: string;
}
