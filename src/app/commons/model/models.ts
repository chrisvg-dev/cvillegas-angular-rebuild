export interface Job {
    id: 1,
    uuid: string,
    createdAt: string,
    updatedAt: string,
    name: string,
    company: string,
    description: string,
    current: boolean,
    active: boolean
}

export interface JobResponse {
    key: string,
    data: Job[]
}