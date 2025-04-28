import { ChveronDownIcon } from "../icons";
import { MenuItem as MenuItemType } from "./types";

const MenuItem = ({title, link, hasSubMenu}: MenuItemType) => {
    return(
        <div className="flex items-center space-x-0 group">
            <a href={link}>
                {title}
            </a>
            {
                hasSubMenu &&
                <span className="transition-all duration-200 group-hover:rotate-180">
                    <ChveronDownIcon />
                </span>
            }
        </div>
    )
}

export default MenuItem;