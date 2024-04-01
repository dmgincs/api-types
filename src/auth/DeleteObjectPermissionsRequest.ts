/* eslint-disable max-classes-per-file */

class DeletedPermission {
    /** The permission object ID to delete */

    permission_object_id: number;

    /** The associated action to remove */

    action: string;
}

export class DeleteObjectPermissionsRequestDto {
    /** A list of permissions to delete */

    permissions: DeletedPermission[];
}
