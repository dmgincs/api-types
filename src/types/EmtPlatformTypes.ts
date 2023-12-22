export enum EmtPlatformTypes {
    DISCORD = 1,
    TWITCH = 2,
    REAL_LIFE = 3
}

export const EmtPlatformNames: { [key in EmtPlatformTypes]: string } = {
    [EmtPlatformTypes.DISCORD]: 'Discord',
    [EmtPlatformTypes.TWITCH]: 'Twitch',
    [EmtPlatformTypes.REAL_LIFE]: 'Real Life'
};
