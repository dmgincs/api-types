/* eslint-disable max-classes-per-file */

class UpdatedPermission {

    /** The ID of the permission object */

    permission_object_id: number;

    /** The action of the permission */

    action: string;

    /** Whether the action is allowed */

    allowed: boolean;
}

export class UpdateObjectPermissionRequestDto {

    /** List of permissions */

    permissions: UpdatedPermission[];
}
