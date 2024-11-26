import { ItemTiers } from '~/types/mainsite/ItemTiers';

export type BaseItemDropRatesFormat = { [key in ItemTiers]?: number };

const doubleDropRatesEnabled = process.env.DOUBLE_DROP_RATES_ENABLED === 'true';

const BaseItemDropRates: BaseItemDropRatesFormat = {
    [ItemTiers.MYTHIC]: 0,
    [ItemTiers.LEGENDARY]: doubleDropRatesEnabled ? 0.04 : 0.02,
    [ItemTiers.HEROIC]: 0,
    [ItemTiers.EPIC]: doubleDropRatesEnabled ? 1 : 0.5,
    [ItemTiers.RARE]: doubleDropRatesEnabled ? 4 : 2,
    [ItemTiers.UNCOMMON]: doubleDropRatesEnabled ? 15 : 7.5,
    [ItemTiers.COMMON]: 20
};

Object.freeze(BaseItemDropRates);
export default BaseItemDropRates;
