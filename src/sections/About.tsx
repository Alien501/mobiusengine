import { AboutProps } from "../components/AboutSection/About";
import AboutCard from "../components/AboutSection/AboutCard";

const AboutSection = () => {
  const AboutItems: AboutProps[] = [
    {
      img: "/ashwin.png",
      linkedinLink: "#",
      content: (
        <>
          <b>Ashwin</b> is the founder of mobiusengine.ai. He is an accomplished
          senior executive with over 20 years of experience in cloud
          infrastructure and financial services. With over 2 decades of
          experience at Google and JP Morgan, Ashwin held various product and
          GTM roles. Ashwin is an MBA holder from Yale University.
          <br />
          <br />
          Ashwin's vision with Mobius is to give job seekers a significant
          advantage in securing the roles of their dreams.
        </>
      ),
    },
    {
      img: "/nicole.png",
      linkedinLink: "#",
      content: (
        <>
          <b>Nicole</b> is an Executive coach at Mobius specializing in resume builds
          and career advisory.
          <br />
          <br />
          With a B.S. in Business Administration from UC Berkeley and 7+ years
          of experience in AI-driven product strategy, she has seen firsthand
          how the proper positioning opens doors. She takes a targeted,
          results-driven approach to help clients confidently stand out and land
          roles that truly match their skills and potential.
        </>
      ),
    },
  ];
  return (
    <section
      id="about-section"
      className="relative h-screen overflow-hidden flex items-center"
    >
      <img
        src="/about-bg.png"
        alt="About Background"
        className="about-bg block absolute left-0 top-0 right-0 bottom-0 z-0"
      />
      <div className="w-[70%] relative z-10 h-[85%] mx-auto">
        <h1 className="font-dm-sans text-white text-2xl">About Us</h1>
        <div className="flex flex-col -space-y-10">
          {AboutItems.map((aboutItem, idx) => (
            <AboutCard {...aboutItem} key={idx} />
          ))}
        </div>
        <div className="flex flex-col space-y-5 text-left items-start w-max ml-[310px]">
            <a href="#" className="text-center text-sm font-light text-white font-dm-sans hover:underline transition duration-300">Learn more about our Board of Advisors ↗</a>
            <a href="#" className="text-center text-sm font-light text-white font-dm-sans hover:underline transition duration-300">Follow us on our Linkedin page ↗</a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
