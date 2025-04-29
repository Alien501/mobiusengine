import { LinkedIcon } from "../icons";
import { AboutProps } from "./About";

const AboutCard = ({img, linkedinLink, content}: AboutProps) => {
    return(
        <div className="h-[280px] w-[80%] mx-auto flex justify-between space-x-10 items-center">
            <div className="relative">
                <div className="w-[160px] h-[160px] bg-white rounded-full overflow-hidden relative">
                    <img className="block object-cover scale- ml-1" src={img} />
                </div>
                <span className="absolute right-2 bottom-0 z-20 backdrop-blur-[14px] bg-white/20 h-[44px] w-[44px] rounded-full flex items-center justify-center border-1 border-white">
                    <a href={linkedinLink} className="text-white">
                        <LinkedIcon />
                    </a>
                </span>
            </div>
            <div className="text-sm text-white font-dm-sans font-light W-[30%] mx-auto">
                {content}
            </div>
        </div>
    )
};

export default AboutCard;