import React from 'react';
import { motion } from 'framer-motion';
import { Star, Home, Wrench, PaintBucket, Leaf } from 'lucide-react';
import GradientText from '../components/ui/GradientText';
import GlowingButton from '../components/ui/GlowingButton';

const testimonials = [
  {
    name: "Mike Anderson",
    company: "Anderson Plumbing & Heating",
    role: "Owner",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    content: "ADverta's AI system transformed our lead generation. We've seen a 200% increase in qualified leads and cut our marketing costs by 40%. The automated follow-up system keeps our pipeline full.",
    icon: <Wrench className="h-6 w-6 text-accent-blue" />,
    rating: 5
  },
  {
    name: "Sarah Martinez",
    company: "Elite Home Services",
    role: "Marketing Director",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    content: "Since implementing ADverta's solution, our HVAC division has seen a 150% boost in seasonal maintenance contracts. The AI targeting helps us reach homeowners right when they need us.",
    icon: <Home className="h-6 w-6 text-accent-purple" />,
    rating: 5
  },
  {
    name: "David Thompson",
    company: "Thompson's Professional Painting",
    role: "CEO",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    content: "The automated lead qualification saves us hours daily. We're now booking 3x more residential projects, and our customer acquisition cost has dropped by 50%. Game-changing for our business.",
    icon: <PaintBucket className="h-6 w-6 text-accent-pink" />,
    rating: 5
  },
  {
    name: "Jennifer Wilson",
    company: "Green Lawn Experts",
    role: "Operations Manager",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
    content: "ADverta's platform helped us scale our landscaping business across three new neighborhoods. The AI targeting is incredible at finding homeowners ready for lawn care services.",
    icon: <Leaf className="h-6 w-6 text-accent-blue" />,
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Trusted by Leading <GradientText>Home Service Providers</GradientText>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            See how home service businesses are transforming their lead generation and growing their customer base with our AI solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-background-secondary rounded-lg p-6 border border-accent-purple/10 hover:border-accent-purple/30 transition-all"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="relative">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-2 -right-2 p-1 rounded-full bg-background-secondary">
                    {testimonial.icon}
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-accent-blue">{testimonial.company}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </div>
              
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-accent-purple fill-current" />
                ))}
              </div>
              
              <p className="text-gray-300">{testimonial.content}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <GlowingButton onClick={() => window.location.href = '/services'}>
            Transform Your Business Today
          </GlowingButton>
        </motion.div>
      </div>
    </div>
  );
};

export default Testimonials;