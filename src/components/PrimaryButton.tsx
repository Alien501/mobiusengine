interface ButtonProps {
    children: React.JSX.Element
}
const PrimaryButton = ({children}: ButtonProps) => {
    return(
        <button className="h-10 flex items-center justify-center hover:cursor-pointer w-max px-4 py-1 text-sm font-dm-sans rounded-3xl bg-white text-blue-dark hover:bg-blue-dark hover:text-white transition-all duration-300">
            {children}
        </button>
    )
}

export default PrimaryButton;