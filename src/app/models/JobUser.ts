import { Role } from "./Role.enum";

export interface JobUser {
    id?: number;
    username?: string;
    password?: string;
    email?: string;
    firstName?: string;
    lastName?: string;
    designation?: string;
    role?: Set<Role>;
    customer?: Set<number>;
    Country?: string;
    phoneNum?: string;
    imageURL?: string;
    active?: boolean;
}