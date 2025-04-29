interface ButtonProps {
  children: React.JSX.Element;
  isLightTheme?: boolean;
  isDark?: boolean;
}
const PrimaryButton = ({
  children,
  isLightTheme = false,
  isDark = false,
}: ButtonProps) => {
  return (
    <>
      {isLightTheme ? (
        <button className="h-10 flex items-center justify-center hover:cursor-pointer w-max px-4 py-1 text-sm font-dm-sans rounded-3xl text-blue-light border-2 border-blue-light transition-all duration-300">
          {children}
        </button>
      ) : isDark ? (
        <button className="h-10 flex items-center justify-center hover:cursor-pointer w-max px-4 py-1 text-sm font-dm-sans rounded-3xl hover:bg-white hover:text-blue-light bg-blue-light text-white transition-all duration-300">
          {children}
        </button>
      ) : (
        <button className="h-10 flex items-center justify-center hover:cursor-pointer w-max px-4 py-1 text-sm font-dm-sans rounded-3xl bg-white text-blue-light hover:bg-blue-light hover:text-white transition-all duration-300">
          {children}
        </button>
      )}
    </>
  );
};

export default PrimaryButton;
