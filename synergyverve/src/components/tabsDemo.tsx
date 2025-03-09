"use client";

import Image from "next/image";
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
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative  flex flex-col  mx-auto w-full  items-start justify-center my-10">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
