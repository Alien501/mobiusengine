import HeroSection from "../sections/Hero";

const HomePage = () => {
    return(
        <section className="min-h-screen flex items-center justify-center relative">
            <img src="/bg-hero.png" alt="Background" className="bg-image block absolute top-0 left-0 bottom-0 right-0 h-full w-full object-cover z-0" />
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full">
                <HeroSection />
            </div> 
        </section>
    )
}

export default HomePage;