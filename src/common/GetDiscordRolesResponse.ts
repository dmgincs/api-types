export class GetDiscordRolesResponseDto {
    server_name: string;
    server_id: string;
    roles: {
        [categoryName: string]: {
            role_name: string;
            role_id: string;
            member_active: boolean;
        }[];
    };
}
