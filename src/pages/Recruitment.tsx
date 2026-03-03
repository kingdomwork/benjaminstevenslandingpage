import { SubBrandPage } from "@/components/SubBrandPage";

export default function Recruitment() {
  return (
    <SubBrandPage
      title="x eXp Recruitment"
      subtitle="Ready to go independent?"
      myth="Going independent is lonely and risky."
      truth="Agents get BS brand + eXp tech + mentorship. It's a 9-month head start, not a leap of faith."
      cta="Apply for Partnership"
      benefits={[
        "Freedom + support + better commission",
        "Mentorship from top agents",
        "Advanced tech stack included",
        "Keep your own brand identity"
      ]}
      accentColor="text-teal-400"
      bulletColor="bg-teal-400"
      campaignId="recruitment"
    />
  );
}
