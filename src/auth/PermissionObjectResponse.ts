/* eslint-disable max-classes-per-file */

class PermissionDro {
    /** The name of the permission action */
    action: string;
}

export class PermissionObjectResponseDro {
    /** The ID of the permission object */
    permissionObjectId: number;

    /** The name of the permission object */
    name: string;

    /** The list of permissions associated with the permission object */
    permissions: PermissionDro[];

    /** Should the permission object be exposed to the JWT, so it\s usable from front-end applications */
    exposeInJwt: boolean;
}
