
export class GetLinkedDevicesResponseDto {
    /** The ID of the linked device */
    link_id: number;

    /** The ID of the member */
    member_id: number;

    /** The operating system of the linked device */
    operatingSystem: string | null;

    /** The operating system version of the linked device */
    osVersion: string | null;

    /** The model of the linked device */
     model: string | null;

    /** The timestamp at which the device was linked */
    linkedTimestamp: Date | null;
}
