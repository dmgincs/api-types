
export class GetCommonGameResponseDto {
    /** The name of the game */
    name: string;

    /** The icon url of the game */
    icon: string | null;

    /** The roles associated with the game */
    roles: string[];
}
