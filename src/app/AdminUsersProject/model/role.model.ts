import { Permission } from './permission.model';

export interface Role {
  roleId: string;
  role_name: string;
  description: string;
  permissions: Permission[];
  checked: boolean;
}
