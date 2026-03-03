import { SubBrandPage } from "@/components/SubBrandPage";

export default function BlockManagement() {
  return (
    <SubBrandPage
      title="Block Management"
      subtitle="Tired of poor service?"
      myth="All managing agents overcharge and disappear."
      truth="BS recovered £520K for one block. TIM app proves site visits. Accounts done 2 months before deadline."
      cta="Download Service Charge Checklist"
      benefits={[
        "Transparency, speed, real savings",
        "Proactive maintenance planning",
        "Clear financial reporting",
        "Dedicated property manager"
      ]}
      accentColor="text-indigo-400"
      bulletColor="bg-indigo-400"
      campaignId="block-management"
    />
  );
}
