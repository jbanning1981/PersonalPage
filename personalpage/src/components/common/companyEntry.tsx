type job = {
    title: string
    startDate: Date
    endDate: Date
    accomplishments: string[]
}


type companyEntry = {
    name: string
    logoUrl: string
    companyUrl: string
    jobs: job[]    
};

export default companyEntry;