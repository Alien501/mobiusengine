import { WhyItem } from "./types";

const WhyCard = ({title, icon, content}: WhyItem) => {

    return(
        <div className="h-[240px] text-blue-dark font-dm-sans rounded-4xl border-blue-dark w-[320px] border-2 p-8 flex flex-col justify-between space-y-6">
            <div>
                <img className="block h-[50px]" src={icon} />
            </div>
            <h1 className="text-xl font-medium">{title}</h1>
            <p className="text-sm">
                {content}
            </p>
        </div>
    )
}

export default WhyCard;