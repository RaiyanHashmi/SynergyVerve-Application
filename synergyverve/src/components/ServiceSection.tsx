import React from "react";
import Image from "next/image";

interface Benefit {
  title: string;
  description: string;
}

interface TeamMember {
  image: string;
  name: string;
}

interface DataSource {
  title: string;
  label: string;
}

interface DataResult {
  title: string;
  label: string;
}

interface ServiceSectionProps {
  tagText?: string;
  title?: string;
  description?: string[];
  ctaText?: string;
  ctaLink?: string;
  benefits?: Benefit[];
  showDataFlow?: boolean;
  dataSources?: DataSource[];
  dataTarget?: DataResult;
  dataResults?: DataResult[];
  illustration?: React.ReactNode;
  teamMembers?: TeamMember[];
  backgroundColor?: string;
  imageOnLeft?: boolean;
  gridservice?: string;
}

const ImageSection: React.FC<{ illustration?: React.ReactNode }> = ({
  illustration,
}) => {
  return (
    <div className="w-full md:w-2/5 flex justify-center">
      {illustration && <div className="mt-12">{illustration}</div>}
    </div>
  );
};

const ContentSection: React.FC<{ title: string; description: string[]; imageSrc?: string }> = ({
    title,
    description,
    imageSrc,
  }) => {
    return (
      <div className="w-full md:w-3/5">
        <div className="flex items-center space-x-4">
          <h2 className="text-6xl font-bold text-text dark:text-white mt-4">{title}</h2>
          {imageSrc && (
            <div className="w-16 h-16 md:w-20 md:h-20">
              <Image src={imageSrc} alt="Service Icon" width={80} height={80} className="object-contain" />
            </div>
          )}
        </div>
        {description.map((paragraph, index) => (
          <p key={index} className={`text-lg text-text ${index === 0 ? "mt-8" : "mt-4"} ps-4 dark:text-gray-300 max-w-3xl`}>
            {paragraph}
          </p>
        ))}
      </div>
    );
  };
  
  

const ServiceSection: React.FC<ServiceSectionProps> = ({
  tagText = "Our Services",
  title = "Service Title",
  description = [],
  ctaText = "Learn More →",
  ctaLink = "/services",
  benefits = [],
  illustration = null,
  imageOnLeft = false,
}) => {
  return (
    <section className={`bg-secondary rounded-3xl p-10 m-6 mx-20 md:p-16`}>
      <div className="flex flex-col md:flex-row items-start">
        <span className="bg-primary text-text px-4 py-3 text-lg font-semibold rounded-full">
          {tagText}
        </span>
      </div>
      <div className="flex flex-col md:flex-row items-start">
        {imageOnLeft ? (
          <>
            <ImageSection illustration={illustration} />
            <ContentSection title={title} description={description} imageSrc="/path-to-your-image.png" />

          </>
        ) : (
          <>
            <ContentSection title={title} description={description} />
            <ImageSection illustration={illustration} />
          </>
        )}
      </div>
      {benefits.length > 0 && (
        <div className="mt-12">
          <h3 className="text-2xl font-bold text-text dark:text-white ps-4 md:ps-0 md:ml-auto md:w-3/5">
            Key Benefits:
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="col-span-1 rounded-xl p-6 backdrop-blur-sm bg-opacity-50"
              >
                <div className="flex items-center mb-4">
                  <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-text font-bold">
                    {index + 1}
                  </div>
                  <h4 className="text-xl font-semibold text-text dark:text-white ml-3">
                    {benefit.title}
                  </h4>
                </div>
                <p className="text-text dark:text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      <a
        href={ctaLink}
        className="mt-10 inline-block bg-primary hover:bg-primary text-text font-semibold px-6 py-3 rounded-lg transition-all"
      >
        {ctaText}
      </a>
    </section>
  );
};

export default ServiceSection;
