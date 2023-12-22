/* eslint-disable max-classes-per-file */

export class GetEmtActivityResponseObjectDto {
    /** Amount of attendance seconds for casual events this timeFrame */
    casualSecs: number;

    /** Amount of attendance seconds for competitive events this timeFrame */
    compSecs: number;

    /** Amount of attendance seconds for community events this timeFrame */
    communitySecs: number;

    /** Amount of attendance seconds for twitch events this timeFrame */
    twitchSecs: number;

    /** Amount of attendance seconds for leadership events this timeFrame */
    leadershipSecs: number;

    /** Amount of attendance seconds for coaching events this timeFrame */
    coachSecs: number;

    /** Amount of attendance seconds for training events this timeFrame */
    trainingSecs: number;

    /** Amount of attendance seconds for real life events this timeFrame */
    realLifeSecs: number;

    /** Amount of attendance seconds for social events this timeFrame */
    socialSecs: number;

    /** Total amount of attendance seconds this timeFrame */
    totalAttendSecs: number;

    /** Total amount of attended events this timeFrame */
    totalAttendCount: number;

    /** Total amount of seconds hosted this timeFrame */
    hostSecs: number;

    /** Total amount of hosted events this timeFrame */
    totalHostCount: number;

    /** Amount of attendance seconds for casual events last timeFrame */
    prevCasualSecs: number;

    /** Amount of attendance seconds for competitive events last timeFrame */
    prevCompSecs: number;

    /** Amount of attendance seconds for community events last timeFrame */
    prevCommunitySecs: number;

    /** Amount of attendance seconds for twitch events last timeFrame */
    prevTwitchSecs: number;

    /** Amount of attendance seconds for leadership events last timeFrame */
    prevLeadershipSecs: number;

    /** Amount of attendance seconds for coaching events last timeFrame */
    prevCoachSecs: number;

    /** Amount of attendance seconds for training events last timeFrame */
    prevTrainingSecs: number;

    /** Amount of attendance seconds for real life events last timeFrame */
    prevRealLifeSecs: number;

    /** Amount of attendance seconds for social events last timeFrame */
    prevSocialSecs: number;

    /** Total amount of attendance seconds last timeFrame */
    prevTotalAttendSecs: number;

    /** Total amount of attended events last timeFrame */
    prevTotalAttendCount: number;

    /** Total amount of seconds hosted last timeFrame */
    prevHostSecs: number;

    /** Total amount of hosted events last timeFrame */
    prevTotalHostCount: number;
}

export class GetEmtActivityResponseDto {
    [key: string]: GetEmtActivityResponseObjectDto;
}
