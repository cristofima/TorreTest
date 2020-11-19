export interface Employee {
    amount: number;
    currency: string;
    periodicity: string;
}

export interface Compensations {
    employee: Employee;
}

export interface Skill {
    name: string;
    weight: number;
}

export interface PersonModel {
    compensations: Compensations;
    locationName: string;
    name: string;
    openTo: string[];
    picture: string;
    professionalHeadline: string;
    remoter: boolean;
    skills: Skill[];
    subjectId: string;
    username: string;
    verified: boolean;
    weight: number;
}