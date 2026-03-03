import { SubBrandPage } from "@/components/SubBrandPage";

export default function Auctions() {
  return (
    <SubBrandPage
      title="Auctions & Investments"
      subtitle="Need a fast sale?"
      myth="Auctions are only for rundown repossessions."
      truth="2025 auctions regularly beat private treaty prices. 28-day completion vs months of chain uncertainty."
      cta="Register for Next Auction"
      benefits={[
        "Speed, certainty, 28-day completion",
        "Competitive bidding environment",
        "Ideal for probate & quick sales",
        "Zero commission for sellers (option)"
      ]}
      accentColor="text-red-400"
      bulletColor="bg-red-400"
      campaignId="auctions"
    />
  );
}
