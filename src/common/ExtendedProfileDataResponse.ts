import { ProfileDataResponseDto } from './ProfileDataResponse';

export class ExtendedProfileDataResponseDto extends ProfileDataResponseDto {

    /** Last activity on the forums */
    last_forum_activity: Date;

    /** Last activity on Discord, including joins and leaves */
    last_discord_activity: Date;

    /** Most recent re-join date after inactivity */
    most_recent_join_date: Date;

    /** Manager responsible for the member */
    manager: string;

}
