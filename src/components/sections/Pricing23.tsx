import { Button, type ButtonProps } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Check } from "relume-icons";

type Billing = "monthly" | "yearly";

type Feature = {
  icon: React.ReactNode;
  text: string;
};

type PricingPlan = {
  planName: string;
  price: string;
  discount?: string;
  features: Feature[];
  button: ButtonProps;
};

type Tab = {
  value: Billing;
  tabName: string;
  plans: PricingPlan[];
};

type Props = {
  tagline: string;
  heading: string;
  description: string;
  defaultTabValue: Billing;
  tabs: Tab[];
};

export type Pricing23Props = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const Pricing23 = (props: Pricing23Props) => {
  const { tagline, heading, description, defaultTabValue, tabs } = {
    ...Pricing23Defaults,
    ...props,
  };

  return (
    <section className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mx-auto mb-12 max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
          <h1 className="mb-5 text-h2 font-bold md:mb-6">{heading}</h1>
          <p className="text-medium">{description}</p>
        </div>
        <Tabs defaultValue={defaultTabValue}>
          <TabsList className="mx-auto mb-12 w-fit items-center justify-center rounded-button border border-transparent bg-scheme-foreground p-1">
            {tabs.map((tab, index) => (
              <TabsTrigger
                key={index}
                value={tab.value}
                className="rounded-button data-[state=active]:bg-scheme-background data-[state=active]:font-medium data-[state=inactive]:bg-transparent"
              >
                {tab.tabName}
              </TabsTrigger>
            ))}
          </TabsList>
          {tabs.map((tab, index) => (
            <TabsContent
              key={index}
              value={tab.value}
              className="grid grid-cols-1 gap-8 data-[state=active]:animate-tabs lg:grid-cols-3"
            >
              {tab.plans.map((plan, index) => (
                <PricingPlan key={index} plan={plan} billing={tab.value} />
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

const PricingPlan = ({ plan, billing }: { plan: PricingPlan; billing: Billing }) => (
  <Card className="flex h-full flex-col justify-between px-6 py-8 md:p-8">
    <div>
      <div className="mb-6 text-center md:mb-8">
        <h2 className="mb-2 text-h6 font-bold">{plan.planName}</h2>
        <h3 className="mb-2 text-h1 font-bold">
          {plan.price}
          {/* a heading cannot nest inside a heading — span keeps the markup valid */}
          <span className="inline text-h4 font-bold">{billing === "monthly" ? "/mo" : "/yr"}</span>
        </h3>
        {billing === "yearly" && "discount" in plan && (
          <p className="mt-2 font-medium">{plan.discount}</p>
        )}
      </div>
      <div className="mb-8 grid grid-cols-1 gap-4 py-2">
        {plan.features.map((feature, index) => (
          <div key={index} className="flex self-start">
            <div className="mr-4 flex-none self-start">{feature.icon}</div>
            <p>{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
    <div>
      <Button {...plan.button} className="w-full">
        {plan.button.title}
      </Button>
    </div>
  </Card>
);

export const Pricing23Defaults: Props = {
  tagline: "Tagline",
  heading: "Pricing plan",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  defaultTabValue: "monthly",
  tabs: [
    {
      value: "monthly",
      tabName: "Monthly",
      plans: [
        {
          planName: "Basic plan",
          price: "$19",
          features: [
            { icon: <Check className="size-6 text-scheme-text" />, text: "Feature text goes here" },
            { icon: <Check className="size-6 text-scheme-text" />, text: "Feature text goes here" },
            { icon: <Check className="size-6 text-scheme-text" />, text: "Feature text goes here" },
          ],
          button: { title: "Get started" },
        },
        {
          planName: "Business plan",
          price: "$29",
          features: [
            { icon: <Check className="size-6 text-scheme-text" />, text: "Feature text goes here" },
            { icon: <Check className="size-6 text-scheme-text" />, text: "Feature text goes here" },
            { icon: <Check className="size-6 text-scheme-text" />, text: "Feature text goes here" },
            { icon: <Check className="size-6 text-scheme-text" />, text: "Feature text goes here" },
          ],
          button: { title: "Get started" },
        },
        {
          planName: "Enterprise plan",
          price: "$49",
          features: [
            { icon: <Check className="size-6 text-scheme-text" />, text: "Feature text goes here" },
            { icon: <Check className="size-6 text-scheme-text" />, text: "Feature text goes here" },
            { icon: <Check className="size-6 text-scheme-text" />, text: "Feature text goes here" },
            { icon: <Check className="size-6 text-scheme-text" />, text: "Feature text goes here" },
            { icon: <Check className="size-6 text-scheme-text" />, text: "Feature text goes here" },
          ],
          button: { title: "Get started" },
        },
      ],
    },

    {
      value: "yearly",
      tabName: "Yearly",
      plans: [
        {
          planName: "Basic plan",
          price: "$180",
          discount: "Save 20%",
          features: [
            { icon: <Check className="size-6 text-scheme-text" />, text: "Feature text goes here" },
            { icon: <Check className="size-6 text-scheme-text" />, text: "Feature text goes here" },
            { icon: <Check className="size-6 text-scheme-text" />, text: "Feature text goes here" },
          ],
          button: { title: "Get started" },
        },
        {
          planName: "Business plan",
          price: "$280",
          discount: "Save 20%",
          features: [
            { icon: <Check className="size-6 text-scheme-text" />, text: "Feature text goes here" },
            { icon: <Check className="size-6 text-scheme-text" />, text: "Feature text goes here" },
            { icon: <Check className="size-6 text-scheme-text" />, text: "Feature text goes here" },
            { icon: <Check className="size-6 text-scheme-text" />, text: "Feature text goes here" },
          ],
          button: { title: "Get started" },
        },
        {
          planName: "Enterprise plan",
          price: "$480",
          discount: "Save 20%",
          features: [
            { icon: <Check className="size-6 text-scheme-text" />, text: "Feature text goes here" },
            { icon: <Check className="size-6 text-scheme-text" />, text: "Feature text goes here" },
            { icon: <Check className="size-6 text-scheme-text" />, text: "Feature text goes here" },
            { icon: <Check className="size-6 text-scheme-text" />, text: "Feature text goes here" },
            { icon: <Check className="size-6 text-scheme-text" />, text: "Feature text goes here" },
          ],
          button: { title: "Get started" },
        },
      ],
    },
  ],
};
