export interface Flags {
    benefits: boolean;
    canary: boolean;
    enlauSource: boolean;
    fake: boolean;
    featureDiscovery: boolean;
    getSignaledBenefitsViewed: boolean;
    firstSignalSent: boolean;
    promoteYourselfBenefitsViewed: boolean;
    promoteYourselfCompleted: boolean;
    importingLinkedin: boolean;
    onBoarded: boolean;
    remoter: boolean;
    signalsFeatureDiscovery: boolean;
    signedInToOpportunities: boolean;
    importingLinkedinRecommendations: boolean;
    contactsImported: boolean;
    appContactsImported: boolean;
    genomeCompletionAcknowledged: boolean;
}

export interface Link {
    id: string;
    name: string;
    address: string;
}

export interface Location {
    name: string;
    shortName: string;
    latitude: number;
    longitude: number;
    timezone: string;
    timezoneOffSet: number;
}

export interface Person {
    professionalHeadline: string;
    completion: number;
    showPhone: boolean;
    created: Date;
    verified: boolean;
    flags: Flags;
    weight: number;
    locale: string;
    subjectId: number;
    picture: string;
    hasEmail: boolean;
    name: string;
    links: Link[];
    location: Location;
    theme: string;
    id: string;
    pictureThumbnail: string;
    claimant: boolean;
    summaryOfBio: string;
    weightGraph: string;
    publicId: string;
}

export interface Stats {
    strengths: number;
    publications: number;
    awards: number;
    education: number;
    interests: number;
    jobs: number;
    projects: number;
}

export interface Strength {
    id: string;
    code: number;
    name: string;
    weight: number;
    recommendations: number;
    media: any[];
    created: Date;
    additionalInfo: string;
}

export interface Interest {
    id: string;
    code: number;
    name: string;
    media: any[];
    created: Date;
    additionalInfo: string;
}

export interface Organization {
    id: number;
    name: string;
    picture: string;
}

export interface MediaItem {
    id: string;
    address: string;
}

export interface Medium {
    group: string;
    mediaType: string;
    description: string;
    mediaItems: MediaItem[];
}

export interface Experience {
    id: string;
    category: string;
    name: string;
    contributions: string;
    organizations: Organization[];
    responsibilities: any[];
    fromMonth: string;
    fromYear: string;
    toMonth: string;
    toYear: string;
    remote: boolean;
    additionalInfo: string;
    highlighted: boolean;
    weight: number;
    verifications: number;
    recommendations: number;
    media: Medium[];
    rank: number;
}

export interface Award {
    id: string;
    category: string;
    name: string;
    contributions: string;
    organizations: any[];
    responsibilities: any[];
    fromMonth: string;
    fromYear: string;
    toMonth: string;
    toYear: string;
    remote: boolean;
    additionalInfo: string;
    highlighted: boolean;
    weight: number;
    verifications: number;
    recommendations: number;
    media: any[];
    rank: number;
}

export interface Job {
    id: string;
    category: string;
    name: string;
    organizations: any[];
    responsibilities: any[];
    fromMonth: string;
    fromYear: string;
    remote: boolean;
    additionalInfo: string;
    highlighted: boolean;
    weight: number;
    verifications: number;
    recommendations: number;
    media: any[];
    rank: number;
    toMonth: string;
    toYear: string;
}

export interface Project {
    id: string;
    category: string;
    name: string;
    contributions: string;
    organizations: any[];
    responsibilities: any[];
    fromMonth: string;
    fromYear: string;
    toMonth: string;
    toYear: string;
    remote: boolean;
    additionalInfo: string;
    highlighted: boolean;
    weight: number;
    verifications: number;
    recommendations: number;
    media: any[];
    rank: number;
}

export interface Publication {
    id: string;
    category: string;
    name: string;
    contributions: string;
    organizations: any[];
    responsibilities: any[];
    fromMonth: string;
    fromYear: string;
    toMonth: string;
    toYear: string;
    remote: boolean;
    additionalInfo: string;
    highlighted: boolean;
    weight: number;
    verifications: number;
    recommendations: number;
    media: any[];
    rank: number;
}

export interface Education {
    id: string;
    category: string;
    name: string;
    organizations: any[];
    responsibilities: any[];
    fromMonth: string;
    fromYear: string;
    toMonth: string;
    toYear: string;
    remote: boolean;
    additionalInfo: string;
    highlighted: boolean;
    weight: number;
    verifications: number;
    recommendations: number;
    media: any[];
    rank: number;
}

export interface Opportunity {
    id: string;
    interest: string;
    field: string;
    data: any;
}

export interface Language {
    code: string;
    language: string;
    fluency: string;
}

export interface Group {
    id: string;
    order: number;
    median: number;
    stddev: number;
}

export interface Analysis {
    groupId: string;
    analysis: number;
}

export interface PersonalityTraitsResults {
    groups: Group[];
    analyses: Analysis[];
}

export interface ProfessionalCultureGenomeResults {
    groups: any[];
    analyses: any[];
}

export interface GenomaModel {
    person: Person;
    stats: Stats;
    strengths: Strength[];
    interests: Interest[];
    experiences: Experience[];
    awards: Award[];
    jobs: Job[];
    projects: Project[];
    publications: Publication[];
    education: Education[];
    opportunities: Opportunity[];
    languages: Language[];
    personalityTraitsResults: PersonalityTraitsResults;
    professionalCultureGenomeResults: ProfessionalCultureGenomeResults;
}
