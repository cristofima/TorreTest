export interface Organization {
    id: number;
    name: string;
    picture: string;
}

export interface Data {
    code: string;
    currency: string;
    minAmount: number;
    maxAmount: number;
    periodicity: string;
}

export interface Compensation {
    data: Data;
    visible: boolean;
}

export interface Skill {
    name: string;
    experience: string;
}

export interface Member {
    subjectId: string;
    name: string;
    username: string;
    professionalHeadline: string;
    picture: string;
    member: boolean;
    manager: boolean;
    poster: boolean;
    weight: number;
}

export interface Context {
    signaled: any[];
}

export interface Criteria {
    skills: string[];
}

export interface Opportunity {
    skills: string[];
}

export interface Input {
    criteria: Criteria;
    opportunity: Opportunity;
}

export interface JobModel {
    id: string;
    objective: string;
    type: string;
    organizations: Organization[];
    locations: string[];
    remote: boolean;
    external: boolean;
    deadline: Date;
    status: string;
    compensation: Compensation;
    skills: Skill[];
    members: Member[];
    questions: any[];
    context: Context;
}
