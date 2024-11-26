import { ItemTiers } from '~/types/mainsite/ItemTiers';
import { BaseItemDropRatesFormat } from './BaseItemDropRates';

export enum DailyItemSlot {
    PRESTIGE = 'prestige',
    PREMIUM = 'premium',
    PREFERRED = 'preferred',
    BATTLEPASS1 = 'battlepass1',
    BATTLEPASS2 = 'battlepass2',
    STANDARD = 'standard'
}

export const DailyItemSlotDropRates: Record<DailyItemSlot, BaseItemDropRatesFormat> = {
    [DailyItemSlot.PRESTIGE]: {
        [ItemTiers.LEGENDARY]: 1,
        [ItemTiers.EPIC]: 10,
        [ItemTiers.RARE]: 30,
        [ItemTiers.UNCOMMON]: 49
    },
    [DailyItemSlot.PREMIUM]: {
        [ItemTiers.EPIC]: 3,
        [ItemTiers.RARE]: 20,
        [ItemTiers.UNCOMMON]: 77
    },
    [DailyItemSlot.PREFERRED]: {
        [ItemTiers.EPIC]: 1,
        [ItemTiers.RARE]: 10,
        [ItemTiers.UNCOMMON]: 40,
        [ItemTiers.COMMON]: 49
    },
    [DailyItemSlot.BATTLEPASS1]: {
        [ItemTiers.RARE]: 5,
        [ItemTiers.UNCOMMON]: 35,
        [ItemTiers.COMMON]: 60
    },
    [DailyItemSlot.BATTLEPASS2]: {
        [ItemTiers.RARE]: 5,
        [ItemTiers.UNCOMMON]: 35,
        [ItemTiers.COMMON]: 60
    },
    [DailyItemSlot.STANDARD]: {
        [ItemTiers.RARE]: 1,
        [ItemTiers.UNCOMMON]: 20,
        [ItemTiers.COMMON]: 79
    }
};
