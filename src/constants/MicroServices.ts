export const MicroServices = ['api', 'cron', 'common', 'emt', 'notifications', 'auth', 'storage', 'statistics', 'profile', 'admin'] as const;
export type MicroService = typeof MicroServices[number];
