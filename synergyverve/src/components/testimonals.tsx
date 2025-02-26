import { AnimatedTestimonials } from './ui/animated-testimonials';

const Testimonials = () => {
  return (
    <div className="relative w-full h-full">
      <div className="absolute inset-0">
        <AnimatedTestimonials testimonials={[]} />
      </div>
    </div>
  );
};