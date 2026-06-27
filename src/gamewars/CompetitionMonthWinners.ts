
export class CompetitionMonthWinnersDto {
    
    /** `The member id for the first place winner (to receive ${COMMUNITY_COMPETITION_POINTS.first} Game Wars points)` */
    first: number;
    
    /** `The member id for the second place winner (to receive ${COMMUNITY_COMPETITION_POINTS.second} Game Wars points)` */
    second: number;
    
    /** `The member id for the third place winner (to receive ${COMMUNITY_COMPETITION_POINTS.third} Game Wars points)` */
    third: number;
}
