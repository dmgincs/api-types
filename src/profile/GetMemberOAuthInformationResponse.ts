import { OAuthAccessTypes } from '~/types/admin/OAuthAccessTypes';

export class GetMemberOAuthInformationResponse {
    /** OAuth type */
    type: OAuthAccessTypes;

    /** OAuth external name (on third party application) */
    externalName: string;

    /** OAuth status */
    status: string;

    /** OAuth id (on third party application) */
    id: string;
}
