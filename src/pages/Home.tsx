import AboutSection from "../sections/About";
import ClientSay from "../sections/ClientSay";
import ResumeCoachingSection from "../sections/CoachingSection";
import Footer from "../sections/Footer";
import HeroSection from "../sections/Hero";
import PricingSection from "../sections/Pricing";
import WhySection from "../sections/Why";
import WorkSection from "../sections/Work";

const HomePage = () => {
    return(
        <>
            <HeroSection />
            <WorkSection />
            <AboutSection />
            <ClientSay />
            <WhySection />
            <PricingSection />
            <ResumeCoachingSection />
            <Footer />
        </>
    )
}

export default HomePage;