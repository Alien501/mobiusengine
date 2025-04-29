import { PlayIcon, RightArrowIcon } from "../icons";
import { ClientSayItem } from "./types";

const ClientCard = ({link, content}: ClientSayItem) => {
    return(
        <div className="h-[320px] w-[326px] bg-blue-light rounded-3xl p-[1.5px] relative">
            <div className="bg-white h-[180px] w-[99.9%] mx-auto rounded-3xl relative">
                <button className="w-[36px] h-[36px] bg-blue-light flex items-center justify-center rounded-full text-white absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hover:cursor-pointer">
                    <PlayIcon width={12} height={12} />
                </button>
            </div>
            <div className="text-sm font-dm-sans text-white font-light w-[90%] p-4">
                {content}
            </div>
            <div className="absolute bottom-[10px] right-2">
                <button className="-rotate-45 hover:bg-blue-light hover:text-white transition-all duration-300 hover:cursor-pointer text-blue-light w-[44px] h-[44px] bg-white flex items-center justify-center rounded-full">
                    <RightArrowIcon />
                </button>
            </div>
        </div>
    )
}

export default ClientCard;