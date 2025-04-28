interface WorkItemProps {
    sno: number;
    des: string
}

const WorkItem = ({sno, des}: WorkItemProps) => {
    return(
        <div className="w-[200px] h-[160px] flex flex-col items-start space-y-6">
            <div className="h-[44px] w-[44px] border border-blue-dark rounded-full flex items-center justify-center">
                <span className="text-xl">{sno}</span>
            </div>
            <hr className="block w-[70%] text-blue-light border-1" />
            <p className="text-blue-light text-sm font-medium">{des}</p>
        </div>
    )
}

const WorkSection = () => {
    const WorkItems: WorkItemProps[] = [
        {
            sno: 1,
            des: 'Submit Intake Form'
        },
        {
            sno: 2,
            des: 'We do the search and curation for list of jobs'
        },
        {
            sno: 3,
            des: 'You approve, we do the tedious part (applying)'
        },
        {
            sno: 4,
            des: "You get the interviews"
        }
    ]
    return(
        <section id="work-section" className="h-[400px] flex items-center justify-center font-dm-sans">
            <div className="w-[70%]">
                <h1 className="text-2xl text-blue-light">How we work?</h1>
                <div className="flex justify-between items-center mt-12">
                    {
                        WorkItems.map((workItem, index) => <WorkItem {...workItem} key={`${workItem.des}-${index}`}  />)
                    }
                </div>
            </div>
        </section>
    )
}


export default WorkSection;