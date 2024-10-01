export const DAY_HOURS = 24;
export const HOUR_MINUTES = 60;
export const DAY_MINUTES = DAY_HOURS * HOUR_MINUTES;
export const MINUTE_SECONDS = 60;
export const HOUR_SECONDS = HOUR_MINUTES * MINUTE_SECONDS;
export const SECOND_MILLISECONDS = 1000;
export const HOUR_MILLISECONDS = HOUR_MINUTES * MINUTE_SECONDS * SECOND_MILLISECONDS;
export const DAY_MILLISECONDS = DAY_HOURS * HOUR_MILLISECONDS;
export const DAY_SECONDS = DAY_HOURS * HOUR_SECONDS;
export const WEEK_SECONDS = DAY_SECONDS * 7;
export const MONTH_SECONDS = DAY_SECONDS * 30;
// https://momentjs.com/timezone/docs/#/zone-object/offset/
// eslint-disable-next-line spellcheck/spell-checker
export const DEFAULT_TIMEZONE = 'Etc/GMT+4'; // EST (+4 will convert to -4, according to moment docs)
export const DATABASE_TIMEZONE = 'Etc/GMT';
