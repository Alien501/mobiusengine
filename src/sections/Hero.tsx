import { RightArrowIcon } from "../components/icons";
import PrimaryButton from "../components/PrimaryButton";

const HeroSectionContent = () => {
  return (
    <div className="w-[70%] h-[400px] mx-auto flex justify-between px-4">
      <div className="hero-left-wrapper flex flex-col justify-evenly h-full -space-y-2">
        <h1 className="font-sora text-[56px] font-[600] text-white leading-16">
          Land job interviews
          <br />
          <span className="text-blue-light">10x </span> faster
        </h1>
        <span className="text-white font-dm-sans text-xs block">
          Custom-built resumes that match your goals, keywords, and <br></br>{" "}
          recruiter expectations.
        </span>
        <PrimaryButton>
          <p className="flex space-x-0.5 items-center">
            Get Started
            <span>
              <RightArrowIcon />
            </span>
          </p>
        </PrimaryButton>
      </div>
      <div className="hero-right-wrapper flex items-center justify-center">
        <div className="hero-letter-wrapper relative">
          <img
            src="/hero-asset-1.png"
            alt="Hero E-Book"
            className="block h-[390px]"
          />
          <a
            className="absolute group -bottom-2 -right-8 w-[80px] h-[80px] bg-white/10 flex items-center justify-center rounded-full backdrop-blur-[14px] border-1 border-white"
            href="#"
          >
            <span className="scale-200 -mt-1">📖</span>
            <span className="absolute group-hover:bg-blue-light group-hover:text-white transition-all duration-300 h-[24px] flex items-center justify-center w-[24px] left-0 bottom-0 rotate-140 bg-white text-blue-light rounded-full">
              <RightArrowIcon width={14} height={14} />
            </span>
          </a>
          <div className="bg-red-50/0 relative -bottom-8">
            <span className="text-center text-white text-xs font-dm-sans block  mx-auto">
              Download Free E-Book
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative">
      <img
        src="/bg-hero.png"
        alt="Background"
        className="bg-image block absolute top-0 left-0 bottom-0 right-0 h-full w-full object-cover z-0"
      />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
        <HeroSectionContent />
      </div>
    </section>
  );
};

export default HeroSection;
