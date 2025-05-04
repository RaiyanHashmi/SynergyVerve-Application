import Button from "@/components/button";
interface ThreeGridProps {
  title: string;
  description?: string;
  Grid: { Head: string; Desc: string }[];
}

export default function ThreeGrid({ title, description, Grid }: ThreeGridProps) {
    return (
      <section className="py-12 px-6 ">
        
        <div className="max-w-5xl mx-auto text-center">
          {/* Section Title */}
          <h2 className="text-6xl my-6 font-bold text-gray-900">{title}</h2>
          <p className="mt-2 text-gray-600">{description}</p>
        </div>
  
        {/* FAQ Grid */}
        <div className="relative mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Background Image */}
         
          {Grid.map((Grid, index) => (
            <div
              key={index}
              className="relative p-6 bg-transparent  shadow-md rounded-lg shadow-lg bg-white/10 backdrop-blur-md border border-white/30"
            >
              <h3 className="text-6xl font-bold from-primary to-accent bg-clip-text text-transparent bg-gradient-to-r">
          {index + 1 < 10 ? `0${index + 1}.` : `${index + 1}.`}
              </h3>
              <h3 className="text-4xl font-bold text-gray-900">{Grid.Head}</h3>
              <p className="mt-2 text-xl text-gray-700">{Grid.Desc}</p>
            </div>
          ))}
        </div>
  
        {/* Call to Action Button */}
        <div className="mt-8 flex text-center justify-center ">
          <Button text="Request a Price"/>
        </div>
      </section>
    );
  }
  