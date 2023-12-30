import { ItemSlots } from '~/types/mainsite/ItemSlots';
import { ItemTiers } from '~/types/mainsite/ItemTiers';
import { ItemTypes } from '~/types/mainsite/ItemTypes';

export class ItemResponseDto {
  /** Item Id */
  item_id: number;

  /** Item Name */
  name: string;

  /** Item Image Url */
  image_url: string;

  /** Item Tier */
  tier: ItemTiers;

  /** Item Type */
  type: ItemTypes;

  /** Item Equippable */
  equippable: boolean;

  /** Item Slot */
  slot?: ItemSlots | null;

  /** Item Value */
  value?: number | null;

  /** Item Purchasable */
  purchasable: boolean;

  /** Item Droppable */
  droppable: boolean;

  /** Item Stackable */
  stackable: boolean;

  /** Item Min Level */
  minLevel?: number | null;

  /** Item Lore */
  lore?: string | null;

  /** Item Attack */
  attack?: number | null;

  /** Item Defense */
  defense?: number | null;

  /** Item Pack Id */
  pack_id?: number | null;

  /** Item Droppable Items */
  droppable_items?: number[];

  /** Item Can Auction */
  can_auction: boolean;

  /** Item Can Drop Items */
  canDropItems?: boolean | (() => boolean);
}
