import AdvanceTier from "../components/PricingSection/AdvanceTier";
import PricingCard from "../components/PricingSection/PricingCard";


export default function PricingSection() {
  return (
    <div className="w-[70%] mx-auto font-dm-sans">
      <h1 className="text-2xl font-medium text-blue-light mb-16">Job Application Service Plans</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        <PricingCard
          title="April Promo"
          price="35"
          features={[
            "Curated jobs from 1M+ listings, refreshed every 48 hours",
            "Up to 20 human-applied roles per week (no bots, no fluff — just real company sites)",
            "Need more? Add extra apps for just $15 each",
            "Your own dedicated application analyst",
            "Personalized with up to 10 filters & 5 job titles",
          ]}
        />
        <PricingCard
          title="Starter"
          price="50"
          isPopular={true}
          badge="Popular"
          features={[
            "All the perks of the Promo Plan, plus:",
            "Resume review & story-focused feedback",
            "Dedicated search specialist",
            "Up to 50 job apps/week",
            "Extra apps at $15 each",
            "Analyst support within 6 hours (SLA/PST hours)",
          ]}
        />

        <PricingCard
          title="Plus"
          price="100"
          features={[
            "Everything in Starter, with more muscle:",
            "Up to 75 apps/week",
            "Apply to 15 job titles",
            "Analyst + full application team on Pacific hours",
          ]}
        />
      </div>

      <AdvanceTier />
      <br /><br />
    </div>
  )
}
