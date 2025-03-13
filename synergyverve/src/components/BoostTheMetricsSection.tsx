import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";
import CPL from "../../public/cplimg.webp";
import Data from "../../public/data.webp";
import Revenue from "../../public/revenue.webp";
import {
  Search,
  Megaphone,
  Target,
  LineChart,
  Network,
  Mail,
  Database,
  BarChart,
  Link,
  DollarSign,
  Users,
  ArrowRightCircle,
  MonitorSmartphone,
} from "lucide-react";

export function BoostTheMetrics(): React.JSX.Element {
  const data = [
    {
      title: "Traffic",
      content: (
        <div className="p-6 bg-secondary dark:bg-gray-900 rounded-lg shadow-lg">
          <span className="bg-accent text-white text-md px-4 py-2 rounded-full inline-block">
            Traffic
          </span>

          <h5 className="text-4xl font-bold mt-4 text-gray-900 dark:text-white">
            Drive More Visitors and Visibility
          </h5>

          <p className="text-gray-700 dark:text-gray-300 text-lg font-normal mt-2">
            Without consistent website traffic, you're missing out on potential
            leads and sales. Our tailored SEO strategies can help improve your
            rankings, making it easier for people to find you and explore what
            you offer
          </p>

          <div className="mt-6">
            <Image
              src={Revenue}
              alt="SEO optimization"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-48 lg:h-60 w-full shadow-lg"
            />
          </div>

          <ul className="mt-6 space-y-4 text-gray-800 dark:text-gray-200 text-lg">
            <li className="flex items-center gap-3">
              <Search  className="w-6 h-6 text-accent" />
              <span>Improve organic visibility in search results</span>
            </li>
            <li className="flex items-center gap-3">
              <Megaphone  className="w-6 h-6 text-accent" />
              <span>Engage your audience through targeted paid ads</span>
            </li>
            <li className="flex items-center gap-3">
              <Users  className="w-6 h-6 text-accent" />
              <span>Connect with the right audience through social media.</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Leads",
      content: (
        <div className="p-6 bg-secondary dark:bg-gray-900 rounded-lg shadow-lg">
          <span className="bg-accent text-white text-md px-4 py-2 rounded-full inline-block">
            Leads
          </span>

          <h5 className="text-4xl font-bold mt-4 text-gray-900 dark:text-white">
            Supercharge Your Lead Generation
          </h5>

          <p className="text-gray-700 dark:text-gray-300 text-lg font-normal mt-2">
            Tired of low-quality leads? We’ll help fill your pipeline with
            qualified prospects by creating a digital marketing strategy that
            matches your goals and budget.
          </p>

          <div className="mt-6">
            <Image
              src={CPL}
              alt="SEO optimization"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-48 lg:h-60 w-full shadow-lg"
            />
          </div>

          <ul className="mt-6 space-y-4 text-gray-800 dark:text-gray-200 text-lg">
            <li className="flex items-center gap-3">
              <Users className="w-6 h-6 text-accent" />
              <span>Bring in high-value leads to your business</span>
            </li>
            <li className="flex items-center gap-3">
              <ArrowRightCircle className="w-6 h-6 text-accent" />
              <span>Enhance your website’s conversion flow</span>
            </li>
            <li className="flex items-center gap-3">
              <MonitorSmartphone className="w-6 h-6 text-accent" />
              <span>Create a new, personalized website for your brand</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "CPL",
      content: (
        <div className="p-6 bg-secondary dark:bg-gray-900 rounded-lg shadow-lg">
          <span className="bg-accent text-white text-md px-4 py-2 rounded-full inline-block">
            CPL
          </span>

          <h5 className="text-4xl font-bold mt-4 text-gray-900 dark:text-white">
            Optimize Your Ads for Better Results
          </h5>

          <p className="text-gray-700 dark:text-gray-300 text-lg font-normal mt-2">
            Struggling with high ad costs? Let our experts streamline your paid
            campaigns, refine targeting, and optimize your budget to ensure
            every dollar counts.
          </p>

          <div className="mt-6">
            <Image
              src={CPL}
              alt="SEO optimization"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-48 lg:h-60 w-full shadow-lg"
            />
          </div>

          <ul className="mt-6 space-y-4 text-gray-800 dark:text-gray-200 text-lg">
            <li className="flex items-center gap-3">
              <Target className="w-6 h-6 text-accent" />
              <span>Fine-tune your ad targeting</span>
            </li>
            <li className="flex items-center gap-3">
              <Network className="w-6 h-6 text-accent" />
              <span>Engage potential customers across multiple platforms</span>
            </li>
            <li className="flex items-center gap-3">
              <DollarSign className="w-6 h-6 text-accent" />
              <span>Get the most out of your paid ads budget.</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Data",
      content: (
        <div className="p-6 bg-secondary dark:bg-gray-900 rounded-lg shadow-lg">
          <span className="bg-accent text-white text-md px-4 py-2 rounded-full inline-block">
            Data
          </span>

          <h5 className="text-4xl font-bold mt-4 text-gray-900 dark:text-white">
            Unify Your Marketing and Sales Insights
          </h5>

          <p className="text-gray-700 dark:text-gray-300 text-lg font-normal mt-2">
            Stop losing track of valuable leads. With our powerful tools, we can
            integrate your sales and marketing data to give you clear,
            actionable insights.
          </p>

          <div className="mt-6">
            <Image
              src={Data}
              alt="SEO optimization"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-48 lg:h-60 w-full shadow-lg"
            />
          </div>

          <ul className="mt-6 space-y-4 text-gray-800 dark:text-gray-200 text-lg">
            <li className="flex items-center gap-3">
              <Link className="w-6 h-6 text-accent" />
              <span>Sync sales and marketing efforts</span>
            </li>
            <li className="flex items-center gap-3">
              <BarChart className="w-6 h-6 text-accent" />
              <span>
                Make data-driven decisions to target the right audience
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Database className="w-6 h-6 text-accent" />
              <span>Keep track of customer data and use it effectively</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Revenue",
      content: (
        <div className="p-6 bg-secondary dark:bg-gray-900 rounded-lg shadow-lg">
          <span className="bg-accent text-white text-md px-4 py-2 rounded-full inline-block">
            Revenue
          </span>

          <h5 className="text-4xl font-bold mt-4 text-gray-900 dark:text-white">
            Surpass Your Revenue Goals
          </h5>

          <p className="text-gray-700 dark:text-gray-300 text-lg font-normal mt-2">
            Not happy with your current sales numbers? We’ll help you attract
            and close more SQLs (Sales Qualified Leads) and turn those
            opportunities into long-term revenue growth.
          </p>

          <div className="mt-6">
            <Image
              src={Revenue}
              alt="SEO optimization"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-48 lg:h-60 w-full shadow-lg"
            />
          </div>

          <ul className="mt-6 space-y-4 text-gray-800 dark:text-gray-200 text-lg">
            <li className="flex items-center gap-3">
              <LineChart className="w-6 h-6 text-accent" />
              <span>
                Build a strategy that ties revenue directly to marketing
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Network className="w-6 h-6 text-accent" />
              <span>Boost sales with an omnichannel approach</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="w-6 h-6 text-accent" />
              <span>Use personalized email campaigns to drive revenue</span>
            </li>
          </ul>
        </div>
      ),
    },
    {
      title: "Campaign Management",
      content: (
        <div className="p-6 bg-secondary dark:bg-gray-900 rounded-lg shadow-lg">
          <span className="bg-accent text-white text-md px-4 py-2 rounded-full inline-block">
            Campaigns
          </span>

          <h5 className="text-4xl font-bold mt-4 text-gray-900 dark:text-white">
            Simplify and Optimize Your Campaigns
          </h5>

          <p className="text-gray-700 dark:text-gray-300 text-lg font-normal mt-2">
            Managing campaigns can be time-consuming and overwhelming. Our
            comprehensive services handle the heavy lifting, freeing you so you
            can focus on growing your business.
          </p>

          <div className="mt-6">
            <Image
              src={CPL}
              alt="SEO optimization"
              width={500}
              height={500}
              className="rounded-lg object-cover h-32 md:h-48 lg:h-60 w-full shadow-lg"
            />
          </div>

          <ul className="mt-6 space-y-4 text-gray-800 dark:text-gray-200 text-lg">
            <li className="flex items-center gap-3">
              <Search className="w-6 h-6 text-accent" />
              <span>Save time and reduce stress</span>
            </li>
            <li className="flex items-center gap-3">
              <Megaphone className="w-6 h-6 text-accent" />
              <span>
                Automate and optimize your campaigns for effective marketing
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Target className="w-6 h-6 text-accent" />
              <span>
                Trust us as your full-service digital marketing partner
              </span>
            </li>
          </ul>
        </div>
      ),
    },
  ];
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
