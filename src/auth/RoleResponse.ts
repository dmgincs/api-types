/* eslint-disable max-classes-per-file */

class GroupResponseDro {
  /** The ID of the group */
  groupId: number;

  /** The forums group ID */
  ipsGroupId: number;

  /** The name of the group */
  groupName: string;
}

class ProfileFieldRoleResponseDro {
  /** The name of the profile field */
  profileFieldName: string;

  /** The value of the profile field */
  profileFieldValue: string;

  /** The ID of the role */
  roleId: number;
}

class RolePermissionResponseDro {
  /** The ID of the object */
  objectId: number;

  /** The name of the object */
  objectName: string;

  /** The permission action */
  action: string;

  /** Whether the action is allowed */
  allowed: boolean;

  /** Should the permission object be exposed to the JWT, so it\s usable from front-end applications */
  exposeInJwt: boolean;
}

export class RoleResponseDto {
  /** The ID of the role */
  roleId: number;

  /** The name of the role */
  name: string;

  /** List of groups */
  groups: GroupResponseDro[];

  /** List of profile field roles */
  profileFieldRoles: ProfileFieldRoleResponseDro[];

  /** List of permissions */
  permissions: RolePermissionResponseDro[];
}
