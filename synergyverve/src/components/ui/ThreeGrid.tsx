import Button from "@/components/button";
import {Meteors} from "@/components/ui/meteors";
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
              className="relative p-6 bg-text border border-gray-800 px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-center"
            >
              <Meteors number={20} />
              <h3 className="text-6xl font-bold from-primary to-accent bg-clip-text text-transparent bg-gradient-to-r">
          {index + 1 < 10 ? `0${index + 1}.` : `${index + 1}.`}
              </h3>
              <h3 className="text-4xl font-bold text-white text-center">{Grid.Head}</h3>
              <p className="mt-2 text-xl text-gray-400 text-center">{Grid.Desc}</p>
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
  