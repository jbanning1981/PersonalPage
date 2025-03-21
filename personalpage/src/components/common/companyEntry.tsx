type job = {
    title: string
    startDate: string
    endDate: string
    accomplishments: string[]
}


type companyEntry = {
    name: string
    logoUrl: string
    companyUrl: string
    roles: job[]    
};

export { companyEntry, job } 