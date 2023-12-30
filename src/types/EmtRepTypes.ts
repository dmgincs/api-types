
export enum EmtRepTypes {
    REP_TYPE_HOSTING = 1,
    EVENT_TYPE_CASUAL = 2,
    EVENT_TYPE_COMP = 3,
    EVENT_TYPE_COMMUNITY = 4,
    EVENT_TYPE_TWITCH = 5,
    EVENT_TYPE_LEADERSHIP = 6,
    EVENT_TYPE_COACHING = 7,
    EVENT_TYPE_TRAINING = 8,
    EVENT_TYPE_REAL_LIFE = 9,
    EVENT_TYPE_SOCIAL = 10
}

export const EmtRepNames: { [key in EmtRepTypes]: string } = {
    [EmtRepTypes.REP_TYPE_HOSTING]: 'Hosting',
    [EmtRepTypes.EVENT_TYPE_CASUAL]: 'Casual Event',
    [EmtRepTypes.EVENT_TYPE_COMP]: 'Competitive Event',
    [EmtRepTypes.EVENT_TYPE_COMMUNITY]: 'Community Event',
    [EmtRepTypes.EVENT_TYPE_TWITCH]: 'Twitch Event',
    [EmtRepTypes.EVENT_TYPE_LEADERSHIP]: 'Leadership Event',
    [EmtRepTypes.EVENT_TYPE_COACHING]: 'Coaching Event',
    [EmtRepTypes.EVENT_TYPE_TRAINING]: 'Training Event',
    [EmtRepTypes.EVENT_TYPE_REAL_LIFE]: 'Real Life Event',
    [EmtRepTypes.EVENT_TYPE_SOCIAL]: 'Social Event'
};
