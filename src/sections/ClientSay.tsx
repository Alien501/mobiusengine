import ClientCard from "../components/ClientSay/ClientCard";
import { ClientSayItem } from "../components/ClientSay/types";
import PrimaryButton from "../components/PrimaryButton";

const ClientSay = () => {
    const ClientItems: ClientSayItem[] = [
        {
            video: '',
            link: '',
            content: <>
                Holly is a <b>senior executive</b> who got over <b>10 job interviews</b> and an offer she accepted
            </>
        },
        {
            video: '',
            link: '',
            content: <>
                Holly is a <b>senior executive</b> who got over <b>10 job interviews</b> and an offer she accepted
            </>
        },
        {
            video: '',
            link: '',
            content: <>
                Holly is a <b>senior executive</b> who got over <b>10 job interviews</b> and an offer she accepted
            </>
        },
    ]
    return(
        <section id="client-say" className="w-[70%] min-h-[50vh] mx-auto p-2">
            <h1 className="text-2xl mt-14 font-dm-sans text-blue-light">What our clients have to say</h1>
            <div className="flex space-x-10 mt-14">
                {
                    ClientItems.map((clientItem, idx) => <ClientCard {...clientItem} key={`${clientItem.content}-${idx}`} />)
                }
            </div>
            <div className="flex justify-evenly mt-12 w-[50%] mx-auto">
                <PrimaryButton isLightTheme>
                    <p>More customer testimonials ↗</p>
                </PrimaryButton>
                <PrimaryButton isDark>
                    <p>Get Started →</p>
                </PrimaryButton>
            </div>
            <br /><br />
        </section>
    )
};

export default ClientSay;