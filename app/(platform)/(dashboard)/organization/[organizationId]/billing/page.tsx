import { checkSubscription } from "@/lib/subscription";
import { Info } from "../_components/info";
import { Separator } from "@/components/ui/separator";
import { SubscriptionButton } from "./_components/subscription-button";

export const BillingPage = async () => {
  const isPro = await checkSubscription();

  return (
    <div className="w-full">
      <Info isPro />
      <Separator className="my-2" />
      <SubscriptionButton isPro />
    </div>
  );
};

export default BillingPage;
