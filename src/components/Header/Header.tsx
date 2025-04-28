import PrimaryButton from "../PrimaryButton";
import MenuItem from "./MenuItem";
import { MenuItem as MenuItemType } from "./types";

const Header = () => {
    const MenuItems: MenuItemType[] = [
        {
            link: "#",
            title: 'Home'
        },
        {
            link: "#",
            title: 'About Us'
        },
        {
            link: '#',
            title: 'Plans'
        },
        {
            link: '#',
            title: "Testimonials"
        },
        {
            link: '#',
            title: 'Privacy Policy',
            hasSubMenu: false
        },
        {
            link: '#',
            title: "More",
            hasSubMenu: true
        }
    ]
    return(
        <header className="top-nav-bar h-[72px] bg-transparent fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-4">
            <div className="nav-container">
                <div className="logo-wrapper flex space-x-2 items-center">
                    <img src="/logo-white.png" alt="MobuisEngine" title="MobuisEngine" className="logo block h-7" />
                    <span className="font-dm-sans text-base text-white">MobuisEngine</span>
                </div>
            </div>
            <div className="nav-center text-base flex items-center space-x-8 text-white">
                {
                    MenuItems.map((menuItem, index) => <MenuItem {...menuItem} key={`${menuItem.title + index}`} />)
                }
            </div>
            <div className="nav-right-container">
                <PrimaryButton>
                    <>
                        <span>Get Started</span>
                    </>
                </PrimaryButton>
            </div>
        </header>
    )
}

export default Header;