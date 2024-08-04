
export class AccountDetailsResponseDto {
    /** The ID of the member */
    memberId: number;

    /** The username of the member */
    name: string;

    /** The group ID (rank) of the member */
    memberGroupId: number;

    /** The email of the member */
    email: string;

    /** The forums account creation date of the member */
    joined: string;

    /** The forums language of the member (the forums does not have multiple languages to choose from) */
    language: number;

    /** The birthday of the member */
    birthday: string;

    /** The last forums activity date of the member */
    lastActivity?: string | undefined;

    /** The additional (secondary) ranks of the member */
    memberSecondaryGroups: string[];

    /** The search engine optimized version of the member\s username */
    membersSeoName: string;

    /** Link to profile photo of the member */
    profilePhoto: string;

    /** The amount of REP (reputation points) the member has accumulated */
    ppReputationPoints: number;

    /** The time zone of the member, as detected by the forums */
    timeZone: string;

    /** The title of the member */
    memberTitle?: string | undefined;

    /** Whether the forum account is completed or not */
    completed: boolean;

    /** The country code of the member */
    membersCountry: string;

    /** The unique hash of the member */
    uniqueHash?: string | undefined;

    /** The description/"About Me" of the member */
    description: string;

    /** The house the member was placed in */
    house: string;

    /** The division the member was placed in */
    division: string;

    /** The team the member was placed in */
    team?: string | undefined;

    /** The structural position the member holds */
    divisionPosition: string;

    /** The most recent initiate cohort the member participated in */
    cohort: string;

    /** The Order the member is a part of */
    order: string;

    /** The profession the member is a part of */
    profession: string;

    /** The vanguard tier the member has earned */
    vanguard?: string | undefined;

    /** The gender of the member */
    gender: string;

    /** The primary game of the member */
    primaryGame: string;

    /** The secondary game of the member */
    secondaryGame: string;

    /** The buddy the member has equipped */
    buddy: string;

    /** The twitch url of the member */
    twitchUrl?: string | undefined;

    /** The member id of the member\s manager, one level above them in the chain of command */
    managerMemberId?: string | undefined;

    /** The skill tier of the member, from when we tried to use them to form teams and make tournaments fair */
    skillTier: string;

    /** The role the member plays in their primary game */
    inGameRole: string;

    /** The username or game id or link to the member\s profile in their primary game */
    primaryGameProfile: string;

    /** The position name and level that the member holds */
    position: string;

    /** The tier of DI-sponsored comp team the member is a part of */
    comp: string;

    /** The member\s gaming platform for their primary game */
    platform: string;

    /** The gaming region of the member */
    region: string;

    /** The event attendance reliability of the member (out of 100) */
    reliability: string;

    /** The active Twitch sub tier the member has */
    twitchSubTier: string;

    /** The equipped forum post background of the member */
    forumPostBackground: string;

    /** Whether the member is currently holding an event host license */
    ehl: boolean;

    /** Whether the member has been assigned to their small section within DI, used by divisional staff */
    assigned: boolean;

    /** The faction of the member */
    faction?: string | undefined;

    /** The member id of the member\s recruiter */
    recruiterMemberId?: number | undefined;

    /** Whether the member is interested in competitive (team) play, used by divisional staff */
    compInterest: boolean;

    /** Whether the member is a trusted host, and can host real life events */
    trustedHost: boolean;

    /** Whether the member Coach, and can host coaching events */
    coach: boolean;

    /** Whether the member is a guest instructor, and can host IMP Training events */
    guestInstructor: boolean;

    /** Whether the member is part of the current IMP cohort */
    impCohortActive: boolean;

    /** Whether the member has been in DI an extraordinary amount of time, and therefore earned special `lifer` exceptions */
    lifer: boolean;

    /** Whether the member is considered a Senior in the position they hold */
    isSeniorPosition: boolean;

    /** Whether the member has a moderator license */
    modLicense: boolean;
}
