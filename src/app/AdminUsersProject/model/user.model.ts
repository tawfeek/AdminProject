import { Role } from './role.model';
export interface User {
    id: string;
    name: string;
    email: string;
    phone: string;
    password: String;
    login: string;
    roles: Role[];
}
