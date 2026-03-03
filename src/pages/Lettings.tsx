import { SubBrandPage } from "@/components/SubBrandPage";

export default function Lettings() {
  return (
    <SubBrandPage
      title="Lettings"
      subtitle="Worried about new laws?"
      myth="The new laws make it impossible to remove tenants."
      truth="Section 21 ends but stronger grounds for arrears and possession exist. The law changed — not the income."
      cta="Book Free Rental Valuation"
      benefits={[
        "Radical compliance & personal management",
        "Expert legal guidance on new regulations",
        "Protect your investment yield",
        "Vetted, high-quality tenants"
      ]}
      accentColor="text-amber-400"
      bulletColor="bg-amber-400"
      campaignId="lettings"
    />
  );
}
