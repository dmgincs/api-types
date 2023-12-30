/* eslint-disable max-classes-per-file */

class TurboChargingChargeObject {
    /** The current type of charging */
    type: string;

    /** The amount of base REP awarded for hosting an event */
    base_rep: number;

    /** The amount of REP awarded for posting an event early */
    early_bonus: number;

    /** The amount of REP awarded for every hour */
    hourly_rep: number;

    /** The amount of REP awarded for every attendee */
    attendee_bonus: number;
}

class TurboChargingMetaDataObject {
    /** The amount of events hosted this month */
    events_hosted: number;

    /** The amount of events hosted required for the next level */
    next_charge_level: number;

    /** The amount of events hosted required for reaching the next level */
    entities_left: number;
}

export class GetTurboChargingResponseDto {
    /** Information about the charge */
    charge: TurboChargingChargeObject;

    /** Extra information about the charge */
    metadata: TurboChargingMetaDataObject;
}
