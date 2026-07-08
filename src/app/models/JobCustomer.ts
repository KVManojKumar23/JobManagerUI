import { JobUser } from "./JobUser";

export interface JobCustomer {
    id?: number;
    name?: string;
    email?: string;
    country?: string;
    active?: boolean;
    users?: Set<JobUser>;
}