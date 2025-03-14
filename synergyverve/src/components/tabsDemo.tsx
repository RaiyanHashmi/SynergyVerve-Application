"use client";
import { Tabs } from "./ui/tabs";
import { CareersSection } from "./CareersSection";
import { OurCulture } from "./OurCulture";
import { OurAwards } from "./OurAwards";
import { CommunityImpact } from "./CommunityImpact";

export function TabsDemo() {
  const tabs = [
    {
      title: "Our Culture",
      value: "Our Culture",
      content: (
        <OurCulture></OurCulture>
      ),
    },
    {
      title: "Our Awards",
      value: "Our Awards",
      content: (
        <OurAwards></OurAwards>
      ),
    },
    {
      title: "Community Impact",
      value: "Community Impact",
      content: (
        <CommunityImpact></CommunityImpact>
      ),
    },
    {
      title: "Careers",
      value: "Careers",
      content: (
        <CareersSection></CareersSection>
      ),
    },
  
  ];

  return (
    <section>
    <h2 className="text-center mt-10  text-text text-6xl md:text-6xl font-bold text-text dark:text-white">Inside Synergy Verve</h2>
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative  flex flex-col  mx-auto w-full  items-start justify-center my-10">
      <Tabs tabs={tabs} />
    </div>
    </section>
  );
}
