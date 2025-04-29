import { WhyItem } from "../components/WhySection/types";
import WhyCard from "../components/WhySection/WhyCard";


const WhySection = () => {
    const WhyItems: WhyItem[] = [
        {
            icon: '/handshake.png',
            title: 'Tried, Tested, Trusted',
            content: 'Built by folks with 40+ years in tech and hiring — we know the game, and we’ve got your back.'   
        },
        {
            icon: '/person.png',
            title: 'Real People, Real Help',
            content: 'A hands-on team that actually cares — guiding you through every twist in your career path.'   
        },
        {
            icon: '/star.png',
            title: 'Beat the Line',
            content: 'We search, shortlist, and apply for you, so your name shows up first — every single day.'   
        },
    ]
    return(
        <section className="w-[70%] min-h-[50vh] mx-auto p-2" id="why-seciton">
            <h1 className="text-2xl mt-14 font-dm-sans text-blue-dark">Why Choose Us?</h1>
            <div className="flex space-x-10 mt-14">
                {
                    WhyItems.map((whyItem, idx) => <WhyCard {...whyItem} key={`${whyItem.content}-${idx}`} />)
                }
            </div>
            <br /><br />
        </section>
    )
}

export default WhySection;