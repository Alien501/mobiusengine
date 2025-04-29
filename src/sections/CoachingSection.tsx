import ResumeServiceCard from "../components/CoachinSection/CoachingCard";


export default function ResumeCoachingSection() {
  return (
    <div className="mt-20 mb-16 w-[70%] mx-auto text-blue-light font-dm-sans">
      <h2 className="text-2xl font-medium text-blue-light mb-2">Resume Building & Coaching</h2>
      <p className="text-blue-light mb-1">Let's talk about where you're headed — and how your resume can get you there.</p>
      <p className="text-blue-light mb-10">
        <a href="#" className="hover:underline font-bold">
          Schedule a call to get started.
        </a>
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ResumeServiceCard
          title="Resume Rebuild"
          subtitle="Crafted for senior to VP-level professionals ready for their next big step."
          price="1000"
          oneTime={true}
          features={[
            "3+ 30-min coaching",
            "Focused on storytelling, not just formatting",
            "Analyst + full application team on Pacific hours",
            "Tailored to your target industry, company, or role",
            "Direct work with our co-founder (ex-Google, JP Morgan)",
            "Executive coaching from UC Berkeley alum with 10+ yrs experience",
            "Resume Rebuild portfolio available upon request",
          ]}
        />

        <ResumeServiceCard
          title="Interview Prep"
          subtitle="Two sessions to sharpen your story, confidence, and clarity — fast."
          price="500"
          oneTime={true}
          features={[
            "2x 45-min live coaching with our co-founder",
            "Real-time, practical feedback",
            "Build clarity, empathy & executive presence",
            "For senior and leadership roles — technical & non-technical",
          ]}
        />
      </div>
    </div>
  )
}
